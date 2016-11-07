const BlogHelper = {

    getTags(blogMetadatas) {
        const tags = [];
        blogMetadatas.forEach(function(metaData) {
            if (metaData.type === 'tag') {
                tags.push( metaData);
            }
        });
        return tags;
    },

  getCategories(blogMetadatas) {
    const categories = [];
    blogMetadatas.forEach(function(metaData) {
      if (metaData.type === 'tag') {
        categories.push(metaData);
      }
    });
    return categories;
  }
};

module.exports = BlogHelper;
