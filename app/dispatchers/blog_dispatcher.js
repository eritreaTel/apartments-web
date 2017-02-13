const FetchHelper = require('../helpers/fetch_helper');
const ResponseHelper = require('../helpers/response_helper');


module.exports = {
    async getBlogs({tags, category}) {
        let url = 'blogs';

        url = (tags == undefined)? url : url + '?tags=' + tags;
        url = (category == undefined)? url : url + '?category=' + category;
        if ( url !== this.getStoreVal('requestUrl') || this.getStoreVal('blogs') == null || this.getStoreVal('blogs').length == 0 ) {
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
                    const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    let {object, errors} = ResponseHelper.processResponseReturnOne(response);
                    if (errors.length > 0) {
                        await this.dispatch({type: 'setErrorMessages', data : {errors}});
                    } else {
                        this.setStoreVal('blog', object);
                    }
                } catch (error) {
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
        let recentNews = this.getStoreVal('recentNews') ? this.getStoreVal('recentNews') : [];
        if (recentNews.length == 0) {
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
        let blogMetaData = this.getStoreVal('blogMetaData') ? this.getStoreVal('blogMetaData') : [];
        if (blogMetaData.length == 0) {
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
