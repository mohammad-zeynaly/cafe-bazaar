//Select Dom Element
const allAppsContainer = document.querySelector("#categoriesApp");
import { allAppData } from "./allData.js";

//Get Params Search Bar Browser
const locationParams = new URLSearchParams(location.search);
let mainApplicationsTitle = locationParams.get("title")

const applicationsCategoriesArray = allAppData.filter(app => {
  return app.type === mainApplicationsTitle
})

console.log([...new Set(applicationsCategoriesArray)])

// All Apps Generate In Append To Dom
function appsCategoriesGenerator() {
  // if()
  allAppsContainer.innerHTML = "";
  applicationsCategoriesArray.map((app) => {


    allAppsContainer.insertAdjacentHTML(
      "beforeend",
      `
            <a href="appDetails.html?id=${app.id}" title="${app.title}" class="flex sm:flex-col rounded-lg px-2 py-2 transition-shadow duration-150 hover:shadow-mainShadow">
              <div class="w-24 h-24">
                <img class="w-full h-full rounded-3xl object-cover" src=${app.img} alt="${app.title}" loading="lazy">
              </div>
              <div class="flex flex-col mr-3">
    
                <h4 class="sm:whitespace-nowrap mt-2 overflow-hidden overflow-ellipsis px-1">${app.title}</h4>
                <p class="text-[#8a8a8a] text-xs whitespace-nowrap overflow-hidden overflow-ellipsis px-1 mt-2">${app.type}</p>
              </div>
            </a>`
    );
  });
  
}
appsCategoriesGenerator();
