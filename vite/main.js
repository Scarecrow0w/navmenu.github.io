import './style.css'

let submenu = document.querySelector('.submenu'),
discountMenu = document.querySelector('.discount-image'),
links = document.querySelectorAll('.link-tree'),
linksNest = document.querySelector('.links-nest'),
linkNest = document.querySelectorAll('.link-nest'),
nestedLinks = document.querySelector('.nested-links'),
productImg = document.querySelectorAll('.product-image'),
productDescription = document.querySelectorAll('.product-description'),
product = document.querySelectorAll('.product');

links.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        nestedLinks.classList.remove('flex')
        nestedLinks.classList.add('hidden')
        discountMenu.classList.remove('flex')
        discountMenu.classList.add('hidden')
        linksNest.classList.remove('flex')
        linksNest.classList.add('hidden')
        linksNest.classList.add('-translate-x-3')
        product.forEach((item => {
            item.classList.remove('flex')
            item.classList.add('hidden')
        }))
        productImg.forEach((item) => item.classList.add('-translate-x-10'))
        productDescription.forEach((item) => item.classList.add('-translate-x-16'))


        if (submenu.classList.contains('flex')) {
            setTimeout(() => {
                fadeIn(linksNest)
                // product.forEach((item) => fadeIn(item))
            }, 0);
        } else {
            setTimeout(() => {
                fadeIn(submenu)
                // product.forEach((item) => fadeIn(item))
                linksNest.classList.remove('hidden')
                linksNest.classList.add('flex')
            }, 0);
        }
        setTimeout(() => {
            linksNest.classList.remove('-translate-x-3')
            product.forEach((item) => fadeIn(item))
            setTimeout(() => {
                productImg.forEach((item) => item.classList.remove('-translate-x-10'))
                productDescription.forEach((item) => item.classList.remove('-translate-x-16'))
            }, 50);
        }, 150)
    })
})

linkNest.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        nestedLinks.classList.remove('flex')
        nestedLinks.classList.add('hidden')
        nestedLinks.classList.add('-translate-x-3')
        setTimeout(() => {
            fadeIn(nestedLinks)
            setTimeout(() => {
                nestedLinks.classList.remove('-translate-x-3')                
            }, 150);
        }, 0)
    })
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