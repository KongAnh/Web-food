// show cart list
const miniCart = document.querySelector('.mini-cart')
const cartList = document.querySelector('.js-cart__list')
const navbar = document.querySelector('.header-navbar')

function showCartList() {
    cartList.classList.toggle('open')
}
miniCart.addEventListener('click', showCartList)

//Navbar fixed
window.onscroll = function() {scrollDown()};

function scrollDown() {
if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    navbar.classList.add('fixed')
} else {
    navbar.classList.remove('fixed')
}
}

// Slider
window.addEventListener("load", function() {
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-main__item");
    const nextBtn = document.querySelector(".slider-ctrl__next");
    const prevBtn = document.querySelector(".slider-ctrl__prev");
    const pageItems = document.querySelectorAll(".slider-page__item");

    const sliderItemHeight = sliderItems[0].offsetHeight;
    const sliderLength = sliderItems.length;

    let positionY = 0;
    let index = 0;

    nextBtn.addEventListener("click", function() {
        if(++index > 1){
            index = 1;    
            return;
        }
        positionY = positionY - sliderItemHeight;
        sliderMain.style = `transform: translateY(${positionY}px)`;
        [...pageItems].forEach(el => el.classList.remove("active"))
        pageItems[index].classList.add("active");
        nextBtn.classList.remove("active");
        prevBtn.classList.add("active");
    });
    
    prevBtn.addEventListener("click", function() {
        if(--index < 0){
            index = 0;    
            return;
        }
        positionY = positionY + sliderItemHeight;
        sliderMain.style = `transform: translateY(${positionY}px)`;
        [...pageItems].forEach(el => el.classList.remove("active"))
        pageItems[index].classList.add("active");
        prevBtn.classList.remove("active");
        nextBtn.classList.add("active");
    });

    [...pageItems].forEach((item) =>
        item.addEventListener("click", function(e) {
            [...pageItems].forEach(el => el.classList.remove("active"))
            e.target.classList.add("active");
            const pageIndex = parseInt(e.target.dataset.index);
            index = pageIndex;
            positionY = -1 * index * sliderItemHeight;
            sliderMain.style = `transform: translateY(${positionY}px)`;
        })

    )
});

//Tab product

const vegets = document.querySelector(".navbar-tab__link--vegets");
const meats = document.querySelector(".navbar-tab__link--meats");
const vegetsTab = document.querySelector(".tab-wrapper--vegets");
const meatsTab = document.querySelector(".tab-wrapper--meats");

vegets.addEventListener('click', function() {
    vegetsTab.classList.add("active");
    meatsTab.classList.remove("active");

    vegets.classList.add("active");
    meats.classList.remove("active");
});

meats.addEventListener('click', function() {
    meatsTab.classList.add("active");
    vegetsTab.classList.remove("active");

    meats.classList.add("active");
    vegets.classList.remove("active");
});


// Slider auto

var count = 1;
setInterval(function() {
    document.getElementById('radio' + count).checked = true;
    count++;
    if(count > 3) {
        count = 1;
    }
}, 5000);