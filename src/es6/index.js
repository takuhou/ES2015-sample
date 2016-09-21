import AdUnit from './adunit';

(() => {
  window.ES6 = window.ES6 || {
    init: (id) => {
      const adUnit = new AdUnit(id);
      adUnit.create();
    },
  };
})();
