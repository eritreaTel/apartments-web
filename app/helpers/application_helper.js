const helpers = {
  compact(array) {
    return array.filter(Boolean);
  },

  flatten(array) {
    return array.reduce((a, b) => a.concat(Array.isArray(b) ? helpers.flatten(b) : b), []);
  },

  last(array) {
    return array.slice(-1)[0];
  },

  identity: i => i,

  isNumber(obj) {
    return typeof obj === 'number' && !isNaN(obj);
  },

  isString(obj) {
    return typeof obj === 'string';
  },

  isClient() {
    return typeof document !== 'undefined';
  },

  noop() {
  },

  pluralize(number, plural, singular) {
    if (number === 1) return singular;
    return plural;
  },


  range(...args) {
    const [start, stop, step = 1] = args.length === 1 ? [0, args[0]] : args;
    return Array.from(Array(Math.ceil((stop - start) / step)), (k, i) => start + i * step);
  },

  animationsDisabled() {
    return typeof ANIMATIONS_DISABLED !== 'undefined' && !!ANIMATIONS_DISABLED;
  },

  formatCurrency(dollars) {
    return `$${Math.round(dollars)}`;
  }
};

module.exports = helpers;
