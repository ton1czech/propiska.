document.querySelector('.year').innerHTML = new Date().getFullYear()

var tl = gsap.timeline({ defaults: { duration: 1 } })
tl.from('#logo', { scale: 10, x: 500, y: 400, duration: 2 }, '+=0.75')
  .from('#intxt1', { x: -300, opacity: 0 }, '-=1.2')
  .from('#intxt2', { x: -300, opacity: 0 }, '-=1')
  .from('#intxt3', { x: -300, opacity: 0 }, '-=0.8')
  .to('#pen', {
    duration: 1.7,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    ease: 'expo.out',
  })
  .from('#navbar', { y: 100, opacity: 0 })
  .from('#intxt5', { y: 50, opacity: 0 }, '-=0.3')

ScrollReveal({ opacity: 0, distance: '25%', delay: 750, origin: 'left' })

ScrollReveal().reveal('#abt1', { origin: 'top' })
ScrollReveal().reveal('#abt2')
ScrollReveal().reveal('#abt3')
ScrollReveal().reveal('#abt4')
ScrollReveal().reveal('#abt5')
ScrollReveal().reveal('#abt6')

ScrollReveal().reveal('#abt7', { origin: 'top' })
ScrollReveal().reveal('#abt8')

ScrollReveal().reveal('#buy1', { origin: 'top' })
ScrollReveal().reveal('#buy2', { origin: 'bottom' })

ScrollReveal().reveal('#ftr1', { origin: 'top' })
ScrollReveal().reveal('#ftr2', { origin: 'bottom' })
