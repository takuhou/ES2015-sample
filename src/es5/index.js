(function(){

  var url = 'http://ad-tech-study.com/display/q7';
  var format = '<li><a href=__CLICKURL__><div class=\"date\"><span class=\"day\"><img src=\"__IMAGEURL__\" alt=\"__TITLE__\" width=\"43\"></span></div><div class=\"txt\">[広告]__TITLE__</div></a></li>';

  function getAd(url,id) {
    var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;
    xhr.onreadystatechange = function (){
      switch(xhr.readyState){
      case 4:
        if(200 === xhr.status) {
          var adJson = JSON.parse(xhr.responseText);
          adJson.id = id;
          createAd(adJson);
        } else {
          console.log('no ad');
        }
      break;
      }
    };
    xhr.open('GET', url);
    xhr.send();
  }

  function createAd(json){
    var dom = document.getElementById(json.id);

    var html = format.replace(/__CLICKURL__/g, json.click_url);
    html = html.replace(/__IMAGEURL__/g, json.image_url);
    html = html.replace(/__TITLE__/g, json.title);

    var ad = document.createElement('div');
    ad.innerHTML = html;

    dom.appendChild(ad);
  }

  window.ES5 = window.ES5 = {
    init : function(id){
      getAd(url,id);
    }
  };
})();