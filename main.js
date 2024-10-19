import './assets/scss/all.scss';

// GSAP
const hoverUps = document.querySelectorAll(".hoverUp");

hoverUps.forEach(hoverUp => {
  hoverUp.addEventListener('mouseenter', () => {
      gsap.to(hoverUp, { y:-10 });
  });

  hoverUp.addEventListener('mouseleave', () => {
      gsap.to(hoverUp, { y:0 });
  });
});

// AOS
AOS.init();

//shpping Cart
let cartCount = 0;

document.querySelectorAll('.addShoppingCart').forEach(button => {
  button.addEventListener('click', function() {
    cartCount++;
    updateCartBadge();
  });
});

document.querySelectorAll('.addShoppingCart2').forEach(button => {
  button.addEventListener('click', function() {
    cartCount++;
    updateCartBadge();
  });
});

// 更新徽章數字
function updateCartBadge() {
  const cartBadge = document.getElementById('cartBadge');
  cartBadge.textContent = cartCount > 99 ? '99+' : cartCount;
}


// header隱藏
// 選取 header 和區塊
const header = document.getElementById('header');
const headerFade = document.getElementById('headerFade');

// 監聽滾動事件
window.addEventListener('scroll', () => {
    const headerFadeTop = headerFade.getBoundingClientRect().top;

    // 當滾動到 headerFade 的位置時，隱藏 header
    if (headerFadeTop <= 0) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
});

// Logo隱藏
// 選取 logo和區塊
const navbarBrand = document.getElementById('navbar-brand');
const navbarBrandFade = document.getElementById('navbar-brand-fade');

// 監聽滾動事件
window.addEventListener('scroll', () => {
    const navbarBrandFadeTop = navbarBrandFade.getBoundingClientRect().top;

    // 當滾動到 headerFade 的位置時，隱藏 header
    if (navbarBrandFadeTop <= 0) {
      navbarBrand.classList.add('mobile-hidden');
    } else {
      navbarBrand.classList.remove('mobile-hidden');
    }
});









//收藏按鈕-可可
document.getElementById('toggleRemove').addEventListener('click', function () {
  var targetButton = document.getElementById('targetRemove');
  var isPressed = targetButton.getAttribute('aria-pressed') === 'true';
  
  // 切換狀態
  targetButton.setAttribute('aria-pressed', !isPressed);
  
  // 根據狀態切換按鈕的外觀
  if (isPressed) {
    targetButton.classList.remove('active');
  } else {
    targetButton.classList.add('active');
  }
});

