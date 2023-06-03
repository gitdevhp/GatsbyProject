var TxtType = function (el, toRotate, period) {
  console.log("going to TxtType")
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  // play sound
  click();
  
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    console.log(this.txt);
    console.log(this.el);
    document.getElementById(this.el).innerHTML = this.txt;
  }

  var that = this;
  var delta = 50 - Math.random() * 20;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

function typeText(text, element = "para") {
  console.log("Element Typing: " + element);
  var period = document.getElementById(element).getAttribute("data-period");
  if (text) {
    new TxtType(element, JSON.parse(text), period);
  }
  return true;
}



  // CURSOR. DISABLED FOR NOW.
  // var css = document.createElement("style");
  //css.type = "text/css";
  // css.innerHTML = ".type > .wrap { border-right: 0.08em solid #fff}";
  // document.body.appendChild(css);