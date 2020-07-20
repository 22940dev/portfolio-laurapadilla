function makeMarquee() {
  const title = 'Available for freelance ✻ Hire Me ✻ '

  // an array is a list of things
  const marqueeText = new Array(100).fill(title).join('  ')

  // 1. we want to grab out marquee span form the html
  // 2. we want to set our repeating title as the content

  const marquee = document.querySelector('.marquee span')
  marquee.innerHTML = marqueeText
}

makeMarquee()
