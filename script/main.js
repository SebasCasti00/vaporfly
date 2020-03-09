var rotationImage = document.querySelector('.rotation__image');
var rotationInput = document.querySelector('.rotation__input');
function handleRotationInput () {
    var index = rotationInput.value;
    rotationImage.setAttribute('src', './img/shoe_' + index + '.png');
}
handleRotationInput();
rotationInput.addEventListener('input', handleRotationInput);