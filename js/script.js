const tabMenu = document.querySelectorAll(".accordion-list_item");
const tabContent = document.querySelectorAll(".accordion-list_content");
const tabTitle = document.querySelectorAll(".accordion-list_title");
const tabIcon = document.querySelectorAll(".accordion-list_icon");

function activeTab(index) {
  tabContent.forEach((content) => {
    content.classList.remove("active");
  });

  tabTitle.forEach((content) => {
    content.classList.remove("title-active");
  });

  tabIcon.forEach((content) => {
    content.classList.remove("icon-active");
  });

  tabContent[index].classList.add("active");
  tabTitle[index].classList.add("title-active");
  tabIcon[index].classList.add("icon-active");
}

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener("click", () => {
    activeTab(index);
  });
});
