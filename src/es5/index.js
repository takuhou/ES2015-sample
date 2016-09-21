(function(){

  var URL = 'http://ad-tech-study.com/display/q7';
  var DOM_FORMAT = '<li><a href=__CLICKURL__><div class=\"date\"><span class=\"day\"><img src=\"__IMAGEURL__\" alt=\"__TITLE__\" width=\"43\"></span></div><div class=\"txt\">[__VERSION__] __TITLE__</div></a></li>';

  function create(url,id) {
    var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;
    xhr.onreadystatechange = function (){
      switch(xhr.readyState){
      case 4:
        if(200 === xhr.status) {
          var adJson = JSON.parse(xhr.responseText);
          adJson.id = id;
          format(adJson);
        } else {
          console.log('no ad');
        }
      break;
      }
    };
    xhr.open('GET', url);
    xhr.send();
  }

  function format(json){
    var html = DOM_FORMAT.replace(/__CLICKURL__/g, json.click_url);
    html = html.replace(/__IMAGEURL__/g, json.image_url);
    html = html.replace(/__TITLE__/g, json.title);
    html = html.replace(/__VERSION__/g, 'ES5');

    var ad = document.createElement('div');
    ad.innerHTML = html;

    display(json.id,ad);
  }

  function display(id,ad){
    var dom = document.getElementById(id);
    dom.appendChild(ad);
  }

  window.ES5 = window.ES5 = {
    init : function(id){
      create(URL,id);
    }
  };
})();