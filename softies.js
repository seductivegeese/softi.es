(function() {

  var blinkGoose = function() {
    var goose = document.getElementById("goose");
    var open = ""+goose.innerHTML;
    var closed = open.replace("o", "-");
    setInterval(function() {
      goose.innerHTML = open;
    }, 5000);
    setInterval(function() {
      goose.innerHTML = closed;
    }, 4800);
  };
  
  //Many thanks to http://codepen.io/simsketch/pen/pJbYKx <3
  var bubble = function() {
    var icons = ['laptop', 'battery-3', 'chrome', 'y-combinator', 'beer', 'cloud', 'desktop','power-off', 'tv', 'file'];
    var i = 0;
    var inter = null;
    var c = document.getElementById('bubbles');
    var generateBubble = function() {
      if(i < 30){
        var el = document.createElement('div');
        el.className = 'fa fa-'+_.sample(icons);
        el.setAttribute('style', 'left:'+_.random(4, c.offsetWidth-(el.offsetWidth+4) )+'px;');
        c.appendChild(el);
        i++;
      } else {
        clearInterval(inter);
      }
    };
    generateBubble();
    inter = setInterval(generateBubble, 1500);
  };
 

  window.addEventListener("load", function() {
    bubble();
    blinkGoose();
  });
})();
