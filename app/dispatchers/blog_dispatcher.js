const FetchHelper = require('../helpers/fetch_helper');
const ResponseHelper = require('../helpers/response_helper');


module.exports = {
    async getBlogs() {
        const url = 'blogs';
        if ( url !== this.getStoreVal('requestUrl') || this.getStoreValue('blogs').length ==0 ) {
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getBlogs')) {
                try {
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    let {results, errors} = ResponseHelper.processResponseReturnMany(response);

                    if (errors.length > 0) {
                        await this.dispatch({type: 'setErrorMessages', data : {errors}});
                    } else {
                        this.setStoreVal('blogs', results);
                    }
                } catch (error) {
                    await this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot fetch blogs'
                        }
                    });
                }
                this.releaseLock('getBlogs');
            }
        }
    },

    async getBlog({blogId}) {
        const url = 'blogs/' + blogId;
        if ( url !== this.getStoreVal('requestUrl') || this.getStoreVal('blog') == null) {
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getBlog')) {
                try {
                    console.log("1");
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    console.log("2");
                    let {object, errors} = ResponseHelper.processResponseReturnOne(response);
                    console.log("3");
                    if (errors.length > 0) {
                        await this.dispatch({type: 'setErrorMessages', data : {errors}});
                    } else {
                        console.log("4");
                        this.setStoreVal('blog', object);
                        console.log("5");
                    }
                } catch (error) {
                    console.log(error);
                    this.releaseLock('getBlog');
                    await this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot fetch recent News'
                        }
                    });
                }
                this.releaseLock('getBlog');
            }
        }
    },

    async createContactUs(data) {
        const url = 'contact_us';
        this.setStoreVal('requestUrl', url);
        if (this.acquireLock('createContactUs')) {
            try {
                const response = await FetchHelper.fetchJson(url, {body: data, method: 'POST'});
                const {object, errors} = ResponseHelper.processResponseReturnOne(response);
                if (errors.length > 0) {
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                } else {
                    this.setStoreVal('contactUs', object);
                }
            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'There is system error. Please refresh your page and try again.'
                    }
                });
            }
            this.releaseLock('createContactUs');
            return this.dispatch({type: 'prepareResponse'});
        }
    },

    async createBlogComment(data) {
        const url = 'blog_comments';
        this.setStoreVal('requestUrl', url);
        if (this.acquireLock('createBlogComment')) {
            try {
                const response = await FetchHelper.fetchJson(url, {body: data, method: 'POST'});
                let {results, errors} = ResponseHelper.processResponseReturnMany(response);
                if (errors.length > 0) {
                    await this.dispatch({type: 'setErrorMessages', data : {errors}});
                } else {
                    this.setStoreVal('blogComments', results);
                }
            } catch (error) {
                await this.dispatch({
                    type: 'handleRequestError',
                    data: {
                        error,
                        defaultErrorMessage: 'There is system error. Please refresh your page and try again.'
                    }
                });
            }
            this.releaseLock('createBlogComment');
            return this.dispatch({type: 'prepareResponse'});
        }
    },

    async getRecentNews() {
        const url = 'blogs?recent_post=true' ;
        if ( url !== this.getStoreVal('requestUrl') || this.getStoreVal('recentNews').length == 0) {
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getRecentNews')) {
                try {
                    let response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    let {results, errors} = ResponseHelper.processResponseReturnMany(response);

                    if (errors.length > 0) {
                        await this.dispatch({type: 'setErrorMessages', data : {errors}});
                    } else {
                        this.setStoreVal('recentNews', results);
                    }
                } catch (error) {
                    await this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot fetch recent News'
                        }
                    });
                }
                this.releaseLock('getRecentNews');
            }
        }
    },

    async getBlogMetaData() {
        const url = 'blog_metadatas?tags=all&&category=all' ;
        if ( url !== this.getStoreVal('requestUrl') || this.getStoreVal('blogMetaData').length == 0) {
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getBlogMetaData')) {
                try {
                    let response = await FetchHelper.fetchJson(url, {method: 'GET'});

                    let {results, errors} = ResponseHelper.processResponseReturnMany(response);

                    if (errors.length > 0) {
                        await this.dispatch({type: 'setErrorMessages', data : {errors}});
                    } else {
                        this.setStoreVal('blogMetaData', results);
                    }
                } catch (error) {
                    await this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot fetch recent News'
                        }
                    });
                }
                this.releaseLock('getBlogMetaData');
            }
        }
    }
};
