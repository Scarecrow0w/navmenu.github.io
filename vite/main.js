import './style.css'

let submenu = document.querySelector('.submenu'),
discountMenu = document.querySelector('.discount-image'),
links = document.querySelectorAll('.link-tree'),
linksNest = document.querySelector('.links-nest'),
linkNest = document.querySelectorAll('.link-nest'),
nestedLinks = document.querySelector('.nested-links');

links.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        discountMenu.classList.remove('flex')
        discountMenu.classList.add('hidden')
        linksNest.classList.remove('flex')
        linksNest.classList.add('hidden')
        linksNest.classList.add('-translate-x-3')
        if (submenu.classList.contains('flex')) {
            setTimeout(() => {
                fadeIn(linksNest)
            }, 0);
        } else {
            setTimeout(() => {
                fadeIn(submenu)
                linksNest.classList.remove('hidden')
                linksNest.classList.add('flex')
            }, 0);
        }
        setTimeout(() => {
            linksNest.classList.remove('-translate-x-3')
        }, 150)
    })
})

linkNest.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        nestedLinks.classList.remove('flex')
        nestedLinks.classList.add('hidden')
        nestedLinks.classList.add('-translate-x-3')
        // nestedLinks.classList.add('-translate-x-3')
        setTimeout(() => {
            fadeIn(nestedLinks)
            setTimeout(() => {
                nestedLinks.classList.remove('-translate-x-3')                
            }, 150);
        }, 0)
    })

    // el.addEventListener('mouseleave', () => {
    //     nestedLinks.classList.remove('flex')
    //     nestedLinks.classList.add('hidden')
    //     nestedLinks.classList.add('-translate-x-3')
    // })
})


// FadeIn effect
function fadeIn(el) {
    let op = 0
    el.style.opacity = op
    el.classList.remove('hidden')
    el.classList.add('flex')
    
    let timer = setInterval(function () {
      if (op >= 1) {
        clearInterval(timer)
      }
      el.style.opacity = op
      op = op + 0.1
    }, 20);
  }