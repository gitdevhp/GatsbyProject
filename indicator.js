function resize(size) {
    let image = document.getElementById("indicatorImage");
    image.style.width = size + "vh";
    image.style.height = size + "vh";
}

function opacity(opacity) {
    let image = document.getElementById("indicatorImage");
    image.style.display = 'block';
    image.style.opacity = opacity;
}
function hue(hue) {
    let image = document.getElementById("indicatorImage");
    image.style.filter = `hue-rotate(${hue}deg)`;
}

function updateIndicator(toValue) {
    document.getElementById("indicator").style.display = 'block';
    document.getElementById("indicatorImage").style.display = 'block';
    opacity((toValue * 0.006 + 0.2).toString())
    hue((toValue * 0.5 - 15))
    if (toValue > 50) {
        resize((toValue * 0.15 + 10).toString())
    } else {
        resize('15')
    }
    console.log('Updated happiness indicator to value ' + toValue)
}

  //  document.getElementById('indicatorImage').style.display = 'none';
  //  console.log('Hid indicator image from the DOM.')