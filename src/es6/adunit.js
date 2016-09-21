/* eslint class-methods-use-this: "error" */

import Settings from './settings';
import Utils from './utils';

export default class AdUnit {
  constructor(id) {
    this.target = document.getElementById(id);
  }

  create() {
    Utils.request(Settings.URL).then((res) => {
      const elements = JSON.parse(res);
      this.format(elements);
    }).catch((e) => {
      console.error(e);
    });
  }

  format(elements) {
    let html = Settings.DOM_FORMAT.replace(/__CLICKURL__/g, elements.click_url);
    html = html.replace(/__IMAGEURL__/g, elements.image_url);
    html = html.replace(/__TITLE__/g, elements.title);
    html = html.replace(/__VERSION__/g, 'ES6');
    const ad = document.createElement('div');
    ad.innerHTML = html;
    this.display(ad);
  }

  display(ad) {
    this.target.appendChild(ad);
  }
}
