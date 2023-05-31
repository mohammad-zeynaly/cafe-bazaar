import { categoriesItemData } from "../data/allData.js";
const allCategoriesContainer = document.querySelector("#allCategories");

function categoriesTemplateGenerate() {
  allCategoriesContainer.innerHTML = "";

  categoriesItemData.map((category) => {
    allCategoriesContainer.insertAdjacentHTML(
      "beforeend",
      `
    <a href="CategoriesDetails.html?title=${category.title}" title="${category.title}" class="categories-item h-14 flex justify-between items-center sm:bg-[#f9fafd] sm:rounded-lg sm:border sm:border-[#f0f0f0] transition-all duration-150 hover:bg-white hover:shadow-mainShadow">  
      <div class="categories-icon flex items-center mr-3">
        ${category.icon}
        <span class="mr-1">${category.title}</span>
      </div>
      <div class="flex ml-4">
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 7L9 12L14 17" stroke="#2a2a2a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
      </div>
    </a>
      `
    );
  });
}
categoriesTemplateGenerate();
