function redirect() {
 window.location.href = 'https://www.iheart.com/';
}
window.addEventListener('DOMContentLoaded', () => {
  const url = window.location.href;

    if (url.includes('iheart.com/') == false) {
 redirect();
}
  });
