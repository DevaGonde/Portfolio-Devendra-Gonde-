const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};

mobileNav.addEventListener("click", toggleNav);
function adjustIframeHeight(iframeId) {
  var iframe = document.getElementById(iframeId);
  function adjustHeight() {
      iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  }
  iframe.onload = adjustHeight;
  window.addEventListener('resize', adjustHeight);
}

window.addEventListener('DOMContentLoaded', function() {
  adjustIframeHeight('profile');
  adjustIframeHeight('skillset');
  adjustIframeHeight('services');
  adjustIframeHeight('java');
  adjustIframeHeight('projects');
  adjustIframeHeight('certificate');
  adjustIframeHeight('contact');
});
document.getElementById('year').textContent = new Date().getFullYear();
