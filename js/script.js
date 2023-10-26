const tabMenu = document.querySelectorAll(".accordion-list_item");
const tabContent = document.querySelectorAll(".accordion-list_content");

function activeTab(index) {
  tabContent.forEach((content) => {
    content.classList.remove("active");
  });
  tabContent[index].classList.add("active");
}

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener("click", () => {
    activeTab(index);
  });
});
