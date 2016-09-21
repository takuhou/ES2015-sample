export default class Settings {

  static get URL() {
    return 'http://ad-tech-study.com/display/q7';
  }

  static get DOM_FORMAT() {
    return '<li><a href=__CLICKURL__><div class="date"><span class="day"><img src="__IMAGEURL__" alt="__TITLE__" width="43"></span></div><div class="txt">[__VERSION__] __TITLE__</div></a></li>';
  }
}
