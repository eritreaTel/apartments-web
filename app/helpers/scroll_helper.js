module.exports = {
  installScroll(container, contained, cb) {
    const handleScroll = () => {
      let containerBottom = container.innerHeight || container.getBoundingClientRect().bottom;
      let containedBottom = contained.innerHeight || contained.getBoundingClientRect().bottom;

      const check = (Math.abs(containerBottom - containedBottom) <= 100);

      if (check) {
        cb();
      }
    };
    container.addEventListener('scroll', handleScroll);
    return handleScroll;
  },
  uninstallScroll(container, listener) {
    console.log('in uninstall scroller');
    container.removeEventListener('scroll', listener);
  }
};
