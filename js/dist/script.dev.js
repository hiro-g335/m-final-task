"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

// ドロワーメニュー
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  jQuery("#js-drawer-content").toggleClass("is-checked");
}); // aboutのスライダー

var aboutSwiper = new Swiper(".about__swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto",
  // 一度に表示する枚数
  spaceBetween: 10,
  speed: 3000,
  // ループの時間
  allowTouchMove: false,
  // スワイプ無効
  autoplay: {
    delay: 0,
    // 途切れなくループ
    disableOnInteraction: false
  },
  breakpoints: {
    900: {
      spaceBetween: 20
    }
  }
}); // modal1

jQuery(".js-modal1-open").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-prizes-modal1")[0].showModal();
});
jQuery(".js-modal1-close").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-prizes-modal1")[0].close();
}); // modal2

jQuery(".js-modal2-open").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-prizes-modal2")[0].showModal();
});
jQuery(".js-modal2-close").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-prizes-modal2")[0].close();
}); // modal3

jQuery(".js-modal3-open").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-prizes-modal3")[0].showModal();
});
jQuery(".js-modal3-close").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-prizes-modal3")[0].close();
}); // modal4

jQuery(".js-modal4-open").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-prizes-modal4")[0].showModal();
});
jQuery(".js-modal4-close").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-prizes-modal4")[0].close();
}); // modal5

jQuery(".js-modal5-open").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-prizes-modal5")[0].showModal();
});
jQuery(".js-modal5-close").on("click", function (e) {
  e.preventDefault();
  jQuery("#js-prizes-modal5")[0].close();
}); // spotsのスライダー

var spotsSwiper = new Swiper(".spots__swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 1.52,
  // 一度に表示する枚数
  spaceBetween: 16,
  centeredSlides: true,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 16,
      centeredSlides: true
    },
    900: {
      slidesPerView: 'auto',
      spaceBetween: 32,
      centeredSlides: false
    } // 1200: {
    //   slidesPerView: 'auto',
    //   spaceBetween: 32,
    //   centeredSlides: false,
    // },

  }
}); // アコーディオン
// jQuery(".js-accordion").on("click", function (e) {
//   jQuery(this).toggleClass("is-open");
//   jQuery(this).next().slideToggle();
//   return false;
// })

jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault();

  if (jQuery(this).parent().hasClass("is-open")) {
    jQuery(this).parent().removeClass("is-open");
    jQuery(this).next().slideUp();
  } else {
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }
}); // フォームバリデーション
// =============================

var form = jQuery("#js-form");
var inputElements = form.find(".js-form-input");
form.on("submit", function (e) {
  e.preventDefault();
  inputElements.removeClass("is-error");
  var isValid = form[0].checkValidity();

  if (isValid) {
    alert("送信完了");
    form[0].reset();
  }
});
inputElements.on("invalid", function () {
  jQuery(this).addClass("is-error");
});
inputElements.on("input", function () {
  if (this.checkValidity()) {
    jQuery(this).removeClass("is-error");
  }
}); // トップへ戻るボタン
//=============================

var pagetop = jQuery("#js-pagetop-button");
jQuery(window).on("scroll", function () {
  if (jQuery(window).scrollTop() > 300) {
    pagetop.fadeIn();
  } else {
    pagetop.fadeOut();
  }
});
pagetop.on("click", function () {
  var speed = 500;
  jQuery("body, html").animate({
    scrollTop: 0
  }, speed, "swing");
}); // スムーススクロール
//=============================

jQuery('a[href^="#"]').on("click", function () {
  var header = jQuery("#js-header");
  var headerHeight = header.innerHeight();
  var speed = 500;
  var id = jQuery(this).attr("href");
  var target = jQuery("#" == id ? "html" : id);
  var position = jQuery(target).offset().top - headerHeight;

  if ("fixed" !== header.css("position")) {
    position = (_readOnlyError("position"), jQuery(target).offset().top);
  }

  if (0 > position) {
    position = (_readOnlyError("position"), 0);
  }

  jQuery("html, body").animate({
    scrollTop: position
  }, speed, "swing");
});