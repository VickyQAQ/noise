function myFunction(element) {
  // Generate random position
  var maxX = window.innerWidth - element.offsetWidth;
  var maxY = window.innerHeight - element.offsetHeight;

  var newX = Math.floor(Math.random() * maxX);
  var newY = Math.floor(Math.random() * maxY);

  element.style.left = newX + 'px';
  element.style.top = newY + 'px';

  var rotateIndex = Math.floor(Math.random() * 360);
  element.style.transform = 'rotate('+ rotateIndex +'deg)'
}