
let xs = [];
// x is 0 to 500 px across
for (var i = 0; i < 1500; i++) {
  xs.push(i)
}
let t = 0;
// when we animate, we loop over the animation
function animate() {
  let height = window.innerWidth > 800 ? 40 : 45;
  let points = xs.map(x => {
    let y = height + 4 * Math.sin((x-t)/ 8)
    return[x, y]
  })
  
  // take every x, turn it into an HTML attribute
  let path = "M" + points.map(p => {
    return p[0] + ',' + p[1]
  }).join(' L')
  if (window.innerWidth > 800) {
    document.querySelector('path').setAttribute('d', path);
  } else { document.querySelector('#mobile path').setAttribute('d', path) }
  
  // the time moves it around the page
  t++;
  requestAnimationFrame(animate)
}

animate();
