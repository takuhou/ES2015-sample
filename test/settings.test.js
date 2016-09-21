import assert from 'power-assert';
import Settings from '../src/es6/settings.js';

describe('Settings Test', () => {
  it('URL', () => {
    assert(Settings.URL === 'http://ad-tech-study.com/display/q7');
  });
});
