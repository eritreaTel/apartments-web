module.exports = function(content) {
  return content.replace(/process.env.NODE_ENV/g, "'" + process.env.NODE_ENV + "'");
};