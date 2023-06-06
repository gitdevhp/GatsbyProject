function resize(size) {
    let image = document.getElementById("indicatorImage");
    image.style.width = size + "vh";
    image.style.width = size + "vh";
}

function opacity(opacity) {
    let image = document.getElementById("indicatorImage");
    image.style.display = 'block';
    image.style.opacity = opacity;
}

function updateIndicator(toValue) {
    opacity((toValue * 0.007 + 0.3).toString())
    if (toValue > 0.5) {
        resize((toValue * 0.2 + 5).toString())
    } else {
        resize('15')
    }
    console.log('Updated happiness indicator to value ' + toValue)
}
