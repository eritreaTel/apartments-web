const FetchHelper = require('../helpers/fetch_helper');


module.exports = {
    async getBlogs() {
        const url = 'blogs?bestApartments=true&pageSize=3';
        if ( url !== this.getStoreVal('requestUrl')) {
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getBestApartments')) {
                try {
                    //const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    //if (response.data && response.data.results && response.data.results.length > 0) {
                    //this.setStoreVal('blogs', response.data.results);
                    //}

                    const blogs = [
                        {
                            "id" : 3,
                            "title": "Uganda number one tourist destination",
                            "medium_description": "GuestHouses Uganda is founded by ArchSoftwareSolutions LLC. ArchSoftware solutions is based in San Francisco, USA and Kampala Uganda. Our mission is to give visibility to many great guest houses in Uganda to the outside world. Uganda is a beautiful country and it has many great guest houses that lack internet visibility. Our company’s top mission is to promote tourism in Uganda by making it easy to reserve guest house in Uganda. One of the first things a tourist does when traveling to a country is finding accommodation. We want to make this process as pleasant as possible while making sure the tourist gets the best deal on the market. We want to tourists to get the best out of their stay. Staying in a guest house is much better than staying in a hotel as it is less boring and it has home feeling. TODO-Amanuel, make this good.",
                            "created_at": "2016-10-31 09:43:26",
                            "created_by" : "Admin",
                            "comments_cnt" : 4,

                        },
                        {
                            "id" : 2,
                            "title": "Uganda joining forces with Kenya",
                            "medium_description": "Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination",
                            "images" : [
                                {
                                    "full" : "images/blog-2.png"
                                },
                                {
                                    "full" : "images/blog-3.png"
                                },
                                {
                                    "full" : "images/blog-4.png"
                                },
                                {
                                    "full" : "images/blog-5.png"
                                }
                            ],
                            "created_at": "2016-10-27 09:43:26",
                            "created_by" : "Employee",
                            "comments_cnt" : 7
                        },
                        {
                            "id" : 1,
                            "title": "New park opened in Uganda",
                            "medium_description": "Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination",
                            "created_at": "2016-10-23 09:43:26",
                            "created_by" : "Manager",
                            "comments_cnt" : 2
                        }

                    ];

                    this.setStoreVal('blogs', blogs);

                } catch (error) {
                    this.dispatch({
                        type: 'handleRequestError',
                        data: {
                            error,
                            defaultErrorMessage: 'Cannot fetch best apartments'
                        }
                    });
                }
                this.releaseLock('getBestApartments');
            }
        }
    }
};
