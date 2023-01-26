window.onload = () => {
  document.body.addEventListener(
    "touchstart",
    function (e) {
      if (e.touches.length > 1 || e.targetTouches.length > 1) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    },
    { passive: false }
  );
};

$(document).ready(function () {
  var $set_var = false;

  $(document).on("click", ".gnb > a", function (e) {
    e.preventDefault();

    let idx = $(this).index();

    $(".container").hide();
    $(".menu_container").hide();
    $(".footer").hide();

    $(".menu_container")
      .eq(idx)
      .show()
      .addClass("animate__animated animate__fadeInLeft");

    $(".footer").show();
    $(".gnb a").removeClass("gnb_effect");
    $(".gnb a > span").remove();
    $(this).addClass("gnb_effect");
    document.querySelector(".main_visual4").innerHTML = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $(document).on("mouseenter", ".gnb > a", function () {
    $(".gnb > a").removeClass("gnb_effect");
    $(this).addClass("gnb_effect");
    $(".gnb_sub")
      .show()
      .addClass("animate__animated animate__fadeIn")
      .removeClass("animate__animated animate__fadeOutUp");
    if ($(this).index() == 0) {
      $(".gnb_sub").html("");
      $(".gnb_sub").html('<div class="sub_menu_on"><a>COMPANY</a><a>CI</a>');
    } else if ($(this).index() == 1) {
      $(".gnb_sub").html("");
      $(".gnb_sub").html(
        '<div class="sub_menu_on"><a>오스티</a><a>해비타</a><a>카페틴</a><a>서울시즌</a><a>Products</a></div>'
      );
      if ("url:contains('eng.html')") {
        $(".gnb_sub").html(
          '<div class="sub_menu_on"><a>Osti</a><a>Havita</a><a>Caffetin</a><a>SeoulSeason</a><a>Products</a></div>'
        );
      }
    } else if ($(this).index() == 2) {
      $(".gnb_sub").html("");
      $(".gnb_sub").hide();
      // 빈메뉴
    } else if ($(this).index() == 3) {
      $(".gnb_sub").html("");
      $(".gnb_sub").hide();
      // 빈메뉴
    } else if ($(this).index() == 4) {
      $(".gnb_sub").html("");
      $(".gnb_sub").hide();
      // 빈메뉴
    }
  });

  var sub_link;

  function bounce(x) {
    if (x.hasClass("animate__animated animate__bounce")) {
      x.removeClass("animate__animated animate__bounce");
    } else {
      x.addClass("animate__animated animate__bounce");
    }
  }
  function trig(x) {
    $(".gnb > a").eq(x).trigger("click");
  }
  function wst(i) {
    var x_top = i.offset().top - 60;
    window.scrollTo({ top: x_top, behavior: "smooth" });
  }

  $(document).on("click", ".sub_menu_on > a", function (e) {
    e.preventDefault();
    const sub_leng = $(".sub_menu_on > a").length;
    const sub_menu = $(this).index();

    if (sub_leng == 2 && sub_menu == 0) {
      trig(0);
    } else if (sub_leng == 2 && sub_menu == 1) {
      trig(0);
      var sub_link = $(".company_visual4 h1");
      wst(sub_link);
      bounce(sub_link);
    } else if (sub_leng === 5 && sub_menu == 0) {
      trig(1);
      let sub_link = $(".brands_txt").eq(0);
      wst(sub_link);
      bounce(sub_link);
    } else if (sub_leng === 5 && sub_menu == 1) {
      trig(1);
      let sub_link = $(".brands_txt").eq(1);
      wst(sub_link);
      bounce(sub_link);
    } else if (sub_leng === 5 && sub_menu == 2) {
      trig(1);
      let sub_link = $(".brands_txt").eq(2);
      wst(sub_link);
      bounce(sub_link);
    } else if (sub_leng === 5 && sub_menu == 3) {
      trig(1);
      let sub_link = $(".brands_txt").eq(3);
      wst(sub_link);
      bounce(sub_link);
    } else if (sub_leng === 5 && sub_menu == 4) {
      trig(1);
      let sub_link = $(".visual3_block");
      wst(sub_link);
      bounce(sub_link);
    }
  });

  $(document).on("mouseleave", ".gnb_sub", function () {
    $(this).removeClass("animate__animated animate__fadeIn").hide();
    $(".gnb > a").removeClass("gnb_effect");
  });

  document.querySelector(".header_logo").addEventListener("click", function () {
    document.querySelectorAll(".menu_container").forEach((x) => {
      x.style.display = "none";
    });
    $(".gnb > a").removeClass("gnb_effect");
    document.querySelector(".container").style.display = "block";
    $(".container").addClass("animate__animated animate__fadeInLeft");
    document.querySelector(".main_visual4").innerHTML = `<iframe
        src="https://www.youtube.com/embed/L9JyAWsq5Ss"
        title="💖일상이 홀리데이가 되는 오스티 로맨스 뱅쇼🍹"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $(document).on("mouseenter", ".top", function () {
    $(this).addClass("top_hover");
  });
  $(document).on("mouseleave", ".top", function () {
    $(this).removeClass("top_hover");
  });

  $(document).on("mouseenter", ".container img", function () {
    $(this).addClass("img_hover_effect");
  });
  $(document).on("mouseleave", ".container img", function () {
    $(this).removeClass("img_hover_effect");
  });
  $(document).on("mouseenter", ".visual3_img img", function () {
    $(".visual3_txt h2").addClass("ripple");
    $(".visual3_txt h2").addClass("animate__animated animate__flash");
  });
  $(document).on("mouseleave", ".visual3_img img", function () {
    $(".visual3_txt h2").removeClass("ripple");
    $(".visual3_txt h2").removeClass("animate__animated animate__flash");
  });

  $(window).scroll(function () {
    var height = $(document).scrollTop();

    if (height >= 1500 && height <= 2500 && $set_var == false) {
      $set_var = true;
      $(".visual3_txt h2").addClass("animate__animated animate__flash");
    } else {
      $(".visual3_txt h2").removeClass("animate__animated animate__flash");
    }
  });
  $(document).on(
    "click",
    ".quick_menu ion-icon:nth-of-type(1)",
    function () {}
  );
  $(document).on("click", ".quick_menu ion-icon:nth-of-type(2)", function () {
    $(".pop_lang").show().css("display", "flex");
    $(".pop_lang_box").addClass("animate__animated animate__fadeInUp");
  });
  $(document).on("click", ".close_btn", function () {
    $(this).parent().parent().parent().hide();
  });
  $(".visual3_txt a").on("click", (e) => {
    e.preventDefault();
    $(".gnb a").eq(2).trigger("click");
  });

  // 스크롤
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".top").show();
      $(".top").removeClass("animate__animated animate__bounce");
      $(".top").addClass("animate__animated animate__bounce");
    } else {
      $(".top").hide();
    }
  });
  var beforePosition = document.documentElement.scrollTop;

  document.addEventListener("scroll", function () {
    var afterPosition = document.documentElement.scrollTop;

    if (afterPosition > 50) {
      if (beforePosition < afterPosition) {
        document.querySelector(".header").classList.remove("floating");
        document.querySelector(".gnb_sub").classList.remove("gnb_floating");
      } else {
        document.querySelector(".header").classList.add("floating");
        document.querySelector(".gnb_sub").classList.add("gnb_floating");
      }
    } else {
      document.querySelector(".header").classList.remove("floating");
      document.querySelector(".gnb_sub").classList.remove("gnb_floating");
      document.querySelector(".gnb_sub").style.display = "none";
    }
    beforePosition = afterPosition;
  });

  $(document).on("click", ".top", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const reviews = $(".visual6_reviews").html();
  if ($(window).width() >= 750) {
    $(".siwper").hide();
    $(".swiper-wrapper").html("");
  } else {
    $(".siwper").show();
    $(".siwper").html(
      $(".siwper").html() + `<div class="swiper-scrollbar"></div>`
    );
    $(".swiper-wrapper").html(reviews);
    $(".swiper-wrapper")
      .children()
      .show()
      .addClass("swiper-slide")
      .removeClass("reviews");
    initSwiper();
  }

  $(window).resize(function () {
    if ($(window).width() <= 750) {
      // window.location.reload();
      initSwiper();
      $("");
    }
  });

  function initSwiper() {
    mySwiper = new Swiper(".swiper", {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 15,
      loopAdditionalSlides: 1,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }

  $(".visual3_txt a").on("click", (e) => {
    e.preventDefault();
    $(".gnb a").eq(2).trigger("click");
  });

  $(".visual5_txt a").on("click", (e) => {
    e.preventDefault();
    $(".gnb a").eq(3).trigger("click");
  });

  $("#news_more").on("click", (e) => {
    e.preventDefault();
    $(".gnb a").eq(3).trigger("click");
  });

  $("#news1, #news6").on("click", (e) => {
    e.preventDefault();
    window.open(
      "http://www.bizwnews.com/news/articleView.html?idxno=44511",
      "_blank"
    );
  });

  $("#news2, #news7").on("click", (e) => {
    e.preventDefault();
    window.open("https://www.news1.kr/articles/?4835459", "_blank");
  });

  $("#news3, #news8").on("click", (e) => {
    e.preventDefault();
    window.open("https://mdtoday.co.kr/news/view/1065606204012726", "_blank");
  });

  $("#news4, #news9").on("click", (e) => {
    e.preventDefault();
    window.open("https://mdtoday.co.kr/news/view/1065608489547182", "_blank");
  });

  $("#news5, #news10").on("click", (e) => {
    e.preventDefault();
    window.open("https://www.fetv.co.kr/news/article.html?no=120443", "_blank");
  });

  $("#brand1").on("click", (e) => {
    e.preventDefault();
    $(".gnb a").eq(1).trigger("mouseover");
    $(".gnb_sub .sub_menu_on a").eq(0).trigger("click");
  });

  $("#brand2").on("click", (e) => {
    e.preventDefault();
    $(".gnb a").eq(1).trigger("mouseover");
    $(".gnb_sub .sub_menu_on a").eq(1).trigger("click");
  });

  $("#brand3").on("click", (e) => {
    e.preventDefault();
    $(".gnb a").eq(1).trigger("mouseover");
    $(".gnb_sub .sub_menu_on a").eq(2).trigger("click");
  });

  $("#lang").on("change", function () {
    if ($(this).val() == "ko") {
      location.href = "http://ncnature.co.kr/index.html";
    } else if ($(this).val() == "en") {
      location.href = "http://ncnature.co.kr/eng/eng.html";
    }
  });

  const cert_img1 = `
    <img src='./media/인증서1.jpg' alt='img'/>
    <img src='./media/인증서2.jpg' alt='img'/>
    <img src='./media/인증서3.jpg' alt='img'/>
    <img src='./media/인증서4.jpg' alt='img'/>
    <img src='./media/인증서5.jpg' alt='img'/>
    <img src='./media/인증서6.jpg' alt='img'/>
    <img src='./media/인증서7.jpg' alt='img'/>
    <img src='./media/인증서8.jpg' alt='img'/>
    <img src='./media/인증서9.jpg' alt='img'/>
    <img src='./media/인증서10.jpg' alt='img'/>
    <img src='./media/인증서11.jpg' alt='img'/>
    `;
  const cert_img2 = `
    <img src='./media/특허증1.jpg' alt='img'/>
    <img src='./media/특허증2.jpg' alt='img'/>
    <img src='./media/특허증3.jpg' alt='img'/>
    <img src='./media/특허증4.jpg' alt='img'/>
    <img src='./media/특허증5.jpg' alt='img'/>
    <img src='./media/특허증6.jpg' alt='img'/>
    <img src='./media/특허증7.jpg' alt='img'/>
    <img src='./media/특허증8.jpg' alt='img'/>
    `;

  $(document).on("click", ".certification p", function () {
    $(".certification_imgs").html("");
    $(".certification p").removeClass("on");
    if (!$(this).hasClass("on")) {
      $(this).addClass("on");
    }
    if ($(this).index() == 0) {
      $(".certification_imgs").html(cert_img1);
    } else {
      $(".certification_imgs").html(cert_img2);
    }
  });
  $(".certification p").eq(0).trigger("click");

  $(document).on("click", "a", function () {
    if ($(".header").hasClass("floating")) {
      $(".header").removeClass("floating");
    }
    if ($(".gnb_sub").css("display", "flex")) {
      $(".gnb_sub").css("display", "none");
    }
  });

  // jquery end
});
