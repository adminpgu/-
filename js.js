let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage() {
  if (currentPage < pages.length - 1) {
    pages[currentPage].style.display = "none";
    currentPage++;
    pages[currentPage].style.display = "block";
  }
}

function restartBook() {
  pages[currentPage].style.display = "none";
  currentPage = 0;
  pages[currentPage].style.display = "block";
}

window.onload = () => {
  pages.forEach((page, index) => {
    if (index !== 0) page.style.display = "none";
  });
};