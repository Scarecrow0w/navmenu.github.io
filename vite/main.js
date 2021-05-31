import './style.css'

let submenu = document.querySelector('.submenu'),
nav = document.querySelector('nav'),
header = document.querySelector('header'),
catalogLink = document.querySelector('.catalog-link'),
megamenu = document.querySelector('.megamenu'),
mouseenterMegamenu = false,
discountMenu = document.querySelector('.discount-image'),
links = document.querySelectorAll('.link-tree'),
linksNest = document.querySelector('.links-nest'),
linkNest = document.querySelectorAll('.link-nest'),
nestedLinks = document.querySelector('.nested-links'),
productImg = document.querySelectorAll('.product-image'),
productDescription = document.querySelectorAll('.product-description'),
products = document.querySelector('.products');

catalogLink.addEventListener('mouseenter', () => {
    header.classList.add('fixed')
    discountMenu.classList.remove('slideUp')
    // discountMenu.classList.remove('slideup')
    // discountMenu.style.transform = 'translateY(0)'
    show(megamenu)
    hide(submenu)
    discountMenu.style.display = 'flex'
    megamenu.classList.add('megamenu-slide')
    // hide(submenu)
    // show(discountMenu)
    // discountMenu.style.opacity = 1
    
})

megamenu.onmouseenter = () => mouseenterMegamenu = true 
megamenu.onmouseleave = () => mouseenterMegamenu = false 

nav.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!mouseenterMegamenu) {
            hide(megamenu)
            header.classList.remove('fixed')
        }
    }, 100);
})

links.forEach((el) => {
    el.addEventListener('mouseenter', () => {
       
        
//         submenu.classList.remove('fadeIn')
//         linksNest.classList.remove('fadeIn')
//         hide(nestedLinks)
//         // fadeOut(discountMenu)

//         setTimeout(() => {
//             hide(linksNest)
//             linksNest.classList.add('slideRight-12')
//             hide(products)
//             productImg.forEach((item) => item.classList.add('-translate-x-10'))
//             productDescription.forEach((item) => item.classList.add('-translate-x-16'))


        if (submenu.classList.contains('flex')) {
            // show(linksNest)
            // linksNest.classList.add('fadeIn')
        } else {
            discountMenu.classList.add('slideUp')
            linksNest.classList.remove('slideRight-12')
            hide(nestedLinks)
            setTimeout(() => {
                hide(discountMenu)
                show(submenu)
                linksNest.classList.add('slideRight-12')
            }, 300);

            // show(submenu)
            // submenu.classList.add('fadeIn')
            // show(linksNest)
        }

        
//             setTimeout(() => {
//                 linksNest.classList.remove('slideRight-12')
//                 fadeIn(products)
//                 setTimeout(() => {
//                     productImg.forEach((item) => item.classList.remove('-translate-x-10'))
//                     productDescription.forEach((item) => item.classList.remove('-translate-x-16'))
//                 }, 50);
//             }, 200)
//         }, 200)
    })
})

linkNest.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        hide(nestedLinks)
        nestedLinks.classList.remove('slideRight-12')

        setTimeout(() => {
            show(nestedLinks)
            nestedLinks.classList.add('slideRight-12')
        }, 100);
//         // nestedLinks.classList.remove('fadeIn')
//         // nestedLinks.classList.remove('slideRight-12')
//         // nestedLinks.style.opacity = 0
//         hide(nestedLinks)
//         // setTimeout(() => {
//             show(nestedLinks)
//             nestedLinks.classList.add('slideRight-12')
//             nestedLinks.classList.add('fadeIn')
//         // }, 1000)
        
//         setTimeout(() => {
//             nestedLinks.classList.remove('-translate-x-3')                
//         }, 200)
    })
})


// // FadeIn effect
// function fadeIn(el) {
//     let op = 0
//     el.style.opacity = op
//     el.classList.remove('hidden')
//     el.classList.add('flex')
    
//     let timer = setInterval(function () {
//       if (op >= 1) clearInterval(timer)      
//       el.style.opacity = op
//       op = op + 0.1
//     }, 20);
//   }

// // FadeOut effect
// function fadeOut(el) {
//     let op = 10;

//     let st = setInterval(function(){
//         op--;
//         el.style.opacity = op / 10 

//         if (op <= 0) {
//             clearInterval(st)
//             setTimeout(() => {
//                 el.classList.remove('flex')
//                 el.classList.add('hidden')  
//             }, 100)
//         }  
//     }, 10)
// }

// show element (flex)
function show(el) {
    el.style.display = 'flex'
}

// hide element
function hide(el) {
    el.style.display = 'none'
}