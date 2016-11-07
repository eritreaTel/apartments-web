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

                    const blogsMetaData = [
                        {
                            "id" : 1,
                            "type" : 'image',
                            "value" : 'images/blog-2.png'
                        },
                        {
                            "id": "1",
                            "type" : 'tag',
                            "value": "Video"
                        },
                        {
                            "id": "2",
                            "type" : 'tag',
                            "value": "Apartments"
                        },
                        {
                            "id": "3",
                            "type" : 'tag',
                            "value": "Promotion"
                        },
                        {
                            "id": "4",
                            "type" : 'tag',
                            "value": "Events"
                        },
                        {
                            "id": "5",
                            "type" : 'tag',
                            "value": "Gallery"
                        },
                        {
                            "id": "6",
                            "type" : 'tag',
                            "value": "New"
                        },
                        {
                            "id": "7",
                            "type" : 'tag',
                            "value": "Travel"
                        },
                        {
                            "id": "1",
                            "type" : 'category',
                            "value": "Video"
                        },
                        {
                            "id": "2",
                            "type" : 'category',
                            "value": "Apartments"
                        },
                        {
                            "id": "3",
                            "type" : 'category',
                            "value": "Promotion"
                        },
                        {
                            "id": "4",
                            "type" : 'category',
                            "value": "Events"
                        }
                    ];

                    const blogs = [
                        {
                            "id" : 3,
                            "title": "Uganda number one tourist destination",
                            "medium_description": "GuestHouses Uganda is founded by ArchSoftwareSolutions LLC. ArchSoftware solutions is based in San Francisco, USA and Kampala Uganda. Our mission is to give visibility to many great guest houses in Uganda to the outside world. Uganda is a beautiful country and it has many great guest houses that lack internet visibility. Our company’s top mission is to promote tourism in Uganda by making it easy to reserve guest house in Uganda. One of the first things a tourist does when traveling to a country is finding accommodation. We want to make this process as pleasant as possible while making sure the tourist gets the best deal on the market. We want to tourists to get the best out of their stay. Staying in a guest house is much better than staying in a hotel as it is less boring and it has home feeling. TODO-Amanuel, make this good.",
                            "created_at": "2016-10-31 09:43:26",
                            "created_by" : "Admin",
                            "comments_cnt" : 4,
                            "tags" :  [
                                {
                                    "id": "1",
                                    "type" : "tag",
                                    "value": "Video"
                                },
                                {
                                    "id": "2",
                                    "type" : "tag",
                                    "value": "Apartments"
                                },
                                {
                                    "id": "3",
                                    "type" : "tag",
                                    "value": "Promotion"
                                },
                                {
                                    "id": "4",
                                    "type" : "tag",
                                    "value": "Events"
                                },
                                {
                                    "id": "5",
                                    "type" : "tag",
                                    "value": "Gallery"
                                },
                                {
                                    "id": "6",
                                    "type" : "tag",
                                    "value": "New"
                                },
                                {
                                    "id": "7",
                                    "type" : "tag",
                                    "value": "Travel"
                                }
                            ],
                            "categories": [
                                {
                                    "id": "1",
                                    "type" : "category",
                                    "value": "Video"
                                },
                                {
                                    "id": "2",
                                    "type" : "category",
                                    "value": "Apartments"
                                },
                                {
                                    "id": "3",
                                    "type" : "category",
                                    "value": "Promotion",
                                },
                                ,
                                {
                                    "id": "4",
                                    "type" : "category",
                                    "value": "Events"
                                }
                            ]
                        },
                        {
                            "id" : 2,
                            "title": "Uganda joining forces with Kenya",
                            "medium_description": "Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination",
                            "images" : [
                                {
                                    "id" : 1,
                                    "full" : "images/blog-2.png"
                                },
                                {
                                    "id" : 2,
                                    "full" : "images/blog-3.png"
                                },
                                {
                                    "id" : 3,
                                    "full" : "images/blog-4.png"
                                },
                                {
                                    "id" : 4,
                                    "full" : "images/blog-5.png"
                                }
                            ],
                            "created_at": "2016-10-27 09:43:26",
                            "created_by" : "Employee",
                            "comments_cnt" : 7,
                            "tags" :  [
                                {
                                    "id": "1",
                                    "type" : "tag",
                                    "value": "Video"
                                },
                                {
                                    "id": "2",
                                    "type" : "tag",
                                    "value": "Apartments"
                                },
                                {
                                    "id": "3",
                                    "type" : "tag",
                                    "value": "Promotion"
                                },
                                {
                                    "id": "4",
                                    "type" : "tag",
                                    "value": "Events"
                                },
                                {
                                    "id": "5",
                                    "type" : "tag",
                                    "value": "Gallery"
                                },
                                {
                                    "id": "6",
                                    "type" : "tag",
                                    "value": "New"
                                },
                                {
                                    "id": "7",
                                    "type" : "tag",
                                    "value": "Travel"
                                }
                            ],
                            "categories": [
                                {
                                    "id": "1",
                                    "type" : "category",
                                    "value": "Video"
                                },
                                {
                                    "id": "2",
                                    "type" : "category",
                                    "value": "Apartments"
                                },
                                {
                                    "id": "3",
                                    "type" : "category",
                                    "value": "Promotion",
                                },
                                {
                                    "id": "4",
                                    "type" : "category",
                                    "value": "Events"
                                }
                            ]
                        },
                        {
                            "id" : 1,
                            "title": "New park opened in Uganda",
                            "medium_description": "Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination",
                            "created_at": "2016-10-23 09:43:26",
                            "created_by" : "Manager",
                            "comments_cnt" : 2,
                            "tags" :  [
                                {
                                    "id": "1",
                                    "type" : "tag",
                                    "value": "Video"
                                },
                                {
                                    "id": "2",
                                    "type" : "tag",
                                    "value": "Apartments"
                                },
                                {
                                    "id": "3",
                                    "type" : "tag",
                                    "value": "Promotion"
                                },
                                {
                                    "id": "4",
                                    "type" : "tag",
                                    "value": "Events"
                                },
                                {
                                    "id": "5",
                                    "type" : "tag",
                                    "value": "Gallery"
                                },
                                {
                                    "id": "6",
                                    "type" : "tag",
                                    "value": "New"
                                },
                                {
                                    "id": "7",
                                    "type" : "tag",
                                    "value": "Travel"
                                }
                            ],
                            "categories": [
                                {
                                    "id": "1",
                                    "type" : "category",
                                    "value": "Video"
                                },
                                {
                                    "id": "2",
                                    "type" : "category",
                                    "value": "Apartments"
                                },
                                {
                                    "id": "3",
                                    "type" : "category",
                                    "value": "Promotion",
                                },
                                ,
                                {
                                    "id": "4",
                                    "type" : "category",
                                    "value": "Events"
                                }
                            ]
                        }

                    ];

                    const recentNews = [
                        {
                            "id" : 1,
                            "title": "Uganda number one tourist",
                            "short_description": "Uganda number one tourist destination ...",
                            "created_at": "2016-10-17 09:43:26"
                        },
                        {
                            "id" : 2,
                            "title": "Uganda joining forces with ",
                            "short_description": "Uganda, Kenya and Rwanda joing tourist forces ...",
                            "created_at": "2016-10-12 09:43:26"
                        },
                        {
                            "id" : 3,
                            "title": "New park opened in Uganda",
                            "short_description": "New national park opened in Uganda, New national ...",
                            "created_at": "2016-10-09 09:43:26"
                        }
                    ];

                    this.setStoreVal('blogs', blogs);
                    this.setStoreVal('blogsMetaData', blogsMetaData);
                    this.setStoreVal('recentNews', recentNews);

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
    },

    async getBlog() {
        const url = 'blogs?recentNews=true';
        if ( url !== this.getStoreVal('requestUrl')) {
            this.setStoreVal('requestUrl', url);

            if (this.acquireLock('getBlog')) {
                try {
                    //const response = await FetchHelper.fetchJson(url, {method: 'GET'});
                    //if (response.data && response.data.results && response.data.results.length > 0) {
                    //    this.setStoreVal('apartment', response.data.results[0]);
                    //}

                    const blog = {
                        "id" : 2,
                        "title": "Uganda joining forces with Kenya",
                        "medium_description": "Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination, Uganda number one tourist destination",
                        "images" : [
                            {
                                "id" : 1,
                                "full" : "images/blog-2.png"
                            },
                            {
                                "id" : 2,
                                "full" : "images/blog-3.png"
                            },
                            {
                                "id" : 3,
                                "full" : "images/blog-4.png"
                            },
                            {
                                "id" : 4,
                                "full" : "images/blog-5.png"
                            }
                        ],
                        "created_at": "2016-10-27 09:43:26",
                        "created_by" : "Employee",
                        "comments_cnt" : 7,
                        "tags" :  [
                            {
                                "id": "1",
                                "type" : "tag",
                                "value": "Video"
                            },
                            {
                                "id": "2",
                                "type" : "tag",
                                "value": "Apartments"
                            },
                            {
                                "id": "3",
                                "type" : "tag",
                                "value": "Promotion"
                            },
                            {
                                "id": "4",
                                "type" : "tag",
                                "value": "Events"
                            },
                            {
                                "id": "5",
                                "type" : "tag",
                                "value": "Gallery"
                            },
                            {
                                "id": "6",
                                "type" : "tag",
                                "value": "New"
                            },
                            {
                                "id": "7",
                                "type" : "tag",
                                "value": "Travel"
                            }
                        ],
                        "categories": [
                            {
                                "id": "1",
                                "type" : "category",
                                "value": "Video"
                            },
                            {
                                "id": "2",
                                "type" : "category",
                                "value": "Apartments"
                            },
                            {
                                "id": "3",
                                "type" : "category",
                                "value": "Promotion",
                            },
                            {
                                "id": "4",
                                "type" : "category",
                                "value": "Events"
                            }
                        ]
                    };
                    const recentNews = [
                        {
                            "id" : 1,
                            "title": "Uganda number one tourist",
                            "short_description": "Uganda number one tourist destination ...",
                            "created_at": "2016-10-17 09:43:26"
                        },
                        {
                            "id" : 2,
                            "title": "Uganda joining forces with ",
                            "short_description": "Uganda, Kenya and Rwanda joing tourist forces ...",
                            "created_at": "2016-10-12 09:43:26"
                        },
                        {
                            "id" : 3,
                            "title": "New park opened in Uganda",
                            "short_description": "New national park opened in Uganda, New national ...",
                            "created_at": "2016-10-09 09:43:26"
                        }
                    ];

                    this.setStoreVal('blog', blog);
                    this.setStoreVal('recentNews', recentNews);

                } catch (error) {
                    this.dispatch({
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
    }
};
