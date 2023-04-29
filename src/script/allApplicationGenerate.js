//Select Dom Element
const allAppsContainer = document.querySelector("#allApps");

import allData from "./allData.js";

function appsGenerator() {
  allData.map((app) => {
    allAppsContainer.insertAdjacentHTML(
      "beforeend",
      `
            <a href="appDetails.html?id=${app.id}" title="${app.title}" class="flex sm:flex-col rounded-lg px-2 py-2 transition-shadow duration-150 hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
              <div class="w-24 h-24">
                <img class="w-full h-full rounded-3xl object-cover" src=${app.img} alt="${app.title}" loading="lazy">
              </div>
              <div class="flex flex-col">
    
                <h4 class="whitespace-nowrap mt-2 overflow-hidden overflow-ellipsis px-1">${app.title}</h4>
                <p class="text-[#8a8a8a] text-xs whitespace-nowrap overflow-hidden overflow-ellipsis px-1 mt-2">${app.type}</p>
              </div>
            </a>`
    );
  });
}
appsGenerator();
