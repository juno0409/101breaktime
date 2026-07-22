const header = document.querySelector(".header");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

const heroVideo = document.querySelector(".hero-video");
const soundButton = document.querySelector(".sound-button");


// 스크롤하면 헤더 배경 표시
window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// 모바일 메뉴 열기 및 닫기
menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");

  const menuIsOpen = navigation.classList.contains("open");

  menuButton.setAttribute(
    "aria-label",
    menuIsOpen ? "메뉴 닫기" : "메뉴 열기"
  );
});


// 모바일 메뉴를 누르면 자동으로 닫기
document.querySelectorAll(".navigation a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
  });
});


// 영상 소리 켜기 및 끄기
soundButton.addEventListener("click", () => {
  heroVideo.muted = !heroVideo.muted;

  if (heroVideo.muted) {
    soundButton.textContent = "SOUND OFF";
  } else {
    soundButton.textContent = "SOUND ON";
  }
});


// 스크롤 등장 애니메이션
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});