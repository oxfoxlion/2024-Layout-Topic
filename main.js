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

// 當按下「Add Item」按鈕時，增加購物車數量
// document.getElementById('addCartOriginal').addEventListener('click', function() {
//   cartCount++;
//   updateCartBadge();
// });

// document.getElementById('addCartCocoa').addEventListener('click', function() {
//   cartCount++;
//   updateCartBadge();
// });

// document.getElementById('addCartTea').addEventListener('click', function() {
//   cartCount++;
//   updateCartBadge();
// });

// document.getElementById('addCartMiniMix').addEventListener('click', function() {
//   cartCount++;
//   updateCartBadge();
// });

document.querySelectorAll('.addShoppingCart').forEach(button => {
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
