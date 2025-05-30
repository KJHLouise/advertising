window.addEventListener("load", () => {
  // img-slide
  const slideList = new Swiper(".slide-list", {
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 로딩 창
  setTimeout(function () {
    document.documentElement.style.overflow = "auto"; // 스크롤 활성화
    document.querySelector(".loading").style.opacity = "0"; // 페이드아웃 효과

    setTimeout(function () {
      document.querySelector(".loading").style.display = "none"; // 완전히 숨김
    }, 500); // 페이드아웃 후 완전히 숨김
  }, 300); // 0.3초 후 로딩 제거

  // toggle
  const toggleWrap = document.querySelector("#toggle-wrap");
  const toggleBody = document.querySelector(".toggle-body");
  let isToggle = false;
  const lightIcons = document.querySelectorAll(".toggle-body .light-mode");
  const darkIcons = document.querySelectorAll(".toggle-body .dark-mode");

  function updateTheme() {
    if (isToggle) {
      toggleWrap.classList.add("on");
      toggleBody.classList.add("on");
      document.documentElement.setAttribute("color-theme", "dark");

      darkIcons.forEach((icon) => (icon.style.display = "block"));
      lightIcons.forEach((icon) => (icon.style.display = "none"));

      // ✅ 현재 테마를 localStorage에 저장
      localStorage.setItem("theme", "dark");
    } else {
      toggleWrap.classList.remove("on");
      toggleBody.classList.remove("on");
      document.documentElement.setAttribute("color-theme", "light");

      darkIcons.forEach((icon) => (icon.style.display = "none"));
      lightIcons.forEach((icon) => (icon.style.display = "block"));

      // ✅ 현재 테마를 localStorage에 저장
      localStorage.setItem("theme", "light");
    }
  }

  // ✅ 로컬 저장소에서 'theme' 값을 가져와 초기 상태 설정
  const savedTheme = localStorage.getItem("theme");
  isToggle = savedTheme === "dark"; // 'dark'이면 true, 'light' 또는 없으면 false
  updateTheme();

  // 클릭 이벤트 리스너 추가
  toggleWrap.addEventListener("click", () => {
    isToggle = !isToggle;
    updateTheme();
  });
});
