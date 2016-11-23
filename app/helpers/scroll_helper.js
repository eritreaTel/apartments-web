module.exports = {
  installScroll(container, contained, cb) {
    const handleScroll = () => {
      let containerBottom = container.innerHeight || container.getBoundingClientRect().bottom;
      let containedBottom = contained.innerHeight || contained.getBoundingClientRect().bottom;

      const check = (Math.abs(containerBottom - containedBottom) <= 575);

      if (check) {
        cb();
      }
    };
    container.addEventListener('scroll', handleScroll);
    return handleScroll;
  },
  uninstallScroll(container, listener) {
    container.removeEventListener('scroll', listener);
  }
};
