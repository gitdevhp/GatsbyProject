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

function updateIndicator(toValue) {
    opacity((toValue * 0.006 + 0.2).toString())
    if (toValue > 50) {
        resize((toValue * 0.1 + 10).toString())
    } else {
        resize('15')
    }
    console.log('Updated happiness indicator to value ' + toValue)
}
