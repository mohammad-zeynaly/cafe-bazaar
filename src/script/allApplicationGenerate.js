//Select Dom Element
const allAppsContainer = document.querySelector("#allApps");
const paginationContainer = document.querySelector("#pagination");
import allData from "./allData.js";
let currentPage = 1;
let paginatedApps = [];
let pageSize = 24;

const changePaginatedApps = (newPageNumber) => {
  currentPage = newPageNumber;
  shownAppsPage();
};

const pageNumbers = Array.from(
  Array(Math.ceil(allData.length / pageSize)).keys()
);

const shownAppsPage = () => {
  let endIndex = currentPage * pageSize;
  let startIndex = endIndex - pageSize;
  const allShownApps = allData.slice(startIndex, endIndex);
  paginatedApps = [];
  paginatedApps.push(...allShownApps);
  appsGenerator(paginatedApps);
  paginationGenerator()
};
shownAppsPage();

// All Pagination Generate
function paginationGenerator() {
    
    paginationContainer.innerHTML = ""

  pageNumbers.map((pageNum) => {
    let paginatedBtn = document.createElement("button");

    paginatedBtn.innerHTML = pageNum + 1;

    if(paginatedBtn.innerHTML == currentPage){
        paginatedBtn.className =
        "bg-[#0ea960] cursor-pointer py-1 px-4 rounded-md text-white ml-2 mb-4";
     
    }else{
        paginatedBtn.className =
        "bg-[#f5f5f5] cursor-pointer py-1 px-4 rounded-md ml-2 mb-4";
    }
    paginatedBtn.addEventListener("click", () =>
      changePaginatedApps(pageNum + 1)
    );
    paginationContainer.append(paginatedBtn);
  });

  console.log(pageNumbers);
}

paginationGenerator();

// All Apps Generate In Append To Dom
function appsGenerator(paginatedAppsArray) {
    console.log("paginatedAppsArray=> ",paginatedAppsArray)
  allAppsContainer.innerHTML = "";
  paginatedAppsArray.map((app) => {
    allAppsContainer.insertAdjacentHTML(
      "beforeend",
      `
            <a href="appDetails.html?id=${app.id}" title="${app.title}" class="flex sm:flex-col rounded-lg px-2 py-2 transition-shadow duration-150 hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
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
appsGenerator(paginatedApps);
