function changeBgColor(getColor) {
    let background = document.querySelector('.bg');
    let selectColor = getColor.value;
    let backgroundText = getColor.options[getColor.selectedIndex].text;
    background.style.backgroundColor = selectColor;
    background.innerHTML = backgroundText;
}