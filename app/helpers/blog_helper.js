const BlogHelper = {

    getTags(blogMetadatas) {
        const tags = [];
        console.log("inside get tags");
        blogMetadatas.forEach(function(metaData) {
            if (metaData.type == 'tag') {
                tags.push( metaData);
            }
        });
        return tags;
    },

  getCategories(blogMetadatas) {
    const categories = [];
    blogMetadatas.forEach(function(metaData) {
      if (metaData.type == 'category') {
        console.log(metaData);
        categories.push(metaData);
      }
    });
    return categories;
  }
};

module.exports = BlogHelper;
