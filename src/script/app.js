import { allAppData, categoriesItemData } from "./allData.js";
// select Element To Dom
const appPracticalContainer = document.querySelector("#app-practical"),
  appBankContainer = document.querySelector("#app-bank"),
  appEntertainmentContainer = document.querySelector("#app-entertainment"),
  appSocialContainer = document.querySelector("#app-social"),
  appMusicianContainer = document.querySelector("#app-musician"),
  appOnlinePaymentContainer = document.querySelector("#app-online-payment"),
  appAntivirusContainer = document.querySelector("#app-antivirus"),
  appEditorsContainer = document.querySelector("#app-editors"),
  updateEditorsContainer = document.querySelector("#update-editors"),
  appEnglishContainer = document.querySelector("#app-english"),
  otherDropdown = document.querySelector("#other-dropDown"),
  otherMenu = document.querySelector("#other-menu"),
  languageBtn = document.querySelector("#btn-language"),
  languageMenu = document.querySelector("#language-menu"),
  editingAppContainer = document.querySelector("#editing-app"),
  appLowVolumContainer = document.querySelector("#low-volum-app"),
  appMobileToolsContainer = document.querySelector("#mobile-tool-app"),
  appsHottestOthersContainer = document.querySelector("#hottest-others-app"),
  bestSellerAppContainer = document.querySelector("#best-seller-app"),
  collapsContent = document.querySelector("#collaps-content"),
  collapsBtn = document.querySelector("#collaps-btn"),
  collapsBtnIcon = document.querySelector("#collaps-btn svg"),
  allCategoriesContainer = document.querySelector("#allCategories"),
  mobileMenuItems = document.querySelectorAll(".mobile-nav-list__link");

// setting slider apps
const swiperSliderApps = new Swiper(".app-slider", {
  slidesPerView: 2,
  spaceBetween: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },

  breakpoints: {
    300: {
      slidesPerView: 3.4,
    },
    480: {
      slidesPerView: 4.4,
    },
    640: {
      slidesPerView: 6.4,
    },
    1025: {
      slidesPerView: 7.4,
    },
    1200: {
      slidesPerView: 8.45,
    },
    1450: {
      slidesPerView: 10.35,
    },
  },
});

// setting Slider Ads
const swiperSliderAds = new Swiper(".ads-app", {
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  breakpoints: {
    350: {
      slidesPerView: 1.2,
    },
    650: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 2.3,
    },
    1200: {
      slidesPerView: 2.5,
    },
    1450: {
      slidesPerView: 3.2,
    },
  },
});

// generate All Apps
function appsTemplateGenerate(appsInformationArray, appsContainer) {
  appsInformationArray.map((appsInformation) => {
    appsContainer.insertAdjacentHTML(
      "beforeend",
      `
    <a href="appDetails.html?id=${appsInformation.id}" title="${appsInformation.title}" class="rounded-lg px-2 py-2 transition-shadow duration-150 hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)] swiper-slide">
    <div class="max-w-[120px] mx-auto">
      <img class="w-full h-full rounded-3xl object-cover" src="${appsInformation.img}" alt="${appsInformation.title}" loading="lazy">
    </div>
    <h4 class="whitespace-nowrap mt-2 overflow-hidden overflow-ellipsis px-1">${appsInformation.title}</h4>
    <p class="text-[#8a8a8a] text-xs whitespace-nowrap mt-1 overflow-hidden overflow-ellipsis px-1">${appsInformation.type}</p>
    </a>`
    );
  });
}

function filteredAllAppData(appCategories) {
  return allAppData.filter((appData) => appData.categories === appCategories);
}

function allAppsGenerate() {
  //generate Apps Practicals
  appsTemplateGenerate(
    filteredAllAppData("applications"),
    appPracticalContainer
  );

  //generate Apps Practicals
  appsTemplateGenerate(filteredAllAppData("bankApps"), appBankContainer);

  //generate Apps Entertainment
  appsTemplateGenerate(
    filteredAllAppData("entertainmentApps"),
    appEntertainmentContainer
  );

  //generate Apps Social
  appsTemplateGenerate(filteredAllAppData("socialApps"), appSocialContainer);

  //generate Apps Musician
  appsTemplateGenerate(
    filteredAllAppData("musicianApps"),
    appMusicianContainer
  );

  //generate Apps Online Payment
  appsTemplateGenerate(
    filteredAllAppData("paymentApps"),
    appOnlinePaymentContainer
  );

  //generate Apps Antivirus
  appsTemplateGenerate(
    filteredAllAppData("antivirusApps"),
    appAntivirusContainer
  );

  //generate Apps Editors
  appsTemplateGenerate(filteredAllAppData("EditorsApps"), appEditorsContainer);

  //generate Update Editors Apps
  appsTemplateGenerate(
    filteredAllAppData("EditorsUpdateApps"),
    updateEditorsContainer
  );

  //generate English Apps
  appsTemplateGenerate(filteredAllAppData("languageApps"), appEnglishContainer);

  //generate Photo Editing
  appsTemplateGenerate(
    filteredAllAppData("photoEditingApps"),
    editingAppContainer
  );

  //Generate Low Volum Apss
  appsTemplateGenerate(
    filteredAllAppData("lowAppsVolume"),
    appLowVolumContainer
  );

  //Generate Low Volum Apss
  appsTemplateGenerate(
    filteredAllAppData("toolsApps"),
    appMobileToolsContainer
  );

  //Generate Hottest Others Apss
  appsTemplateGenerate(
    filteredAllAppData("hottestApps"),
    appsHottestOthersContainer
  );

  //Generate best Seller Apss
  appsTemplateGenerate(
    filteredAllAppData("bestSellerApps"),
    bestSellerAppContainer
  );
}
allAppsGenerate();

// show other menu
function showOtherMenu() {
  otherMenu.classList.toggle("opacity-100");
  document.body.addEventListener("click", (event) => {
    if (
      event.target.id === "other-menu" ||
      event.target.id === "other-dropDown"
    ) {
      console.log("روی المنت سایر منو ها کلیک شد :))");
    } else {
      otherMenu.classList.remove("opacity-100");
    }
  });
}

// show Language Menu
function showLanguageMenu() {
  languageMenu.classList.toggle("opacity-100");

  document.body.addEventListener("click", (event) => {
    if (
      event.target.id === "icon-language" ||
      event.target.id === "btn-language" ||
      event.target.id === "theme-language"
    ) {
      console.log("روی المنت عوض کردن زبان کلیک شد :))");
    } else {
      languageMenu.classList.remove("opacity-100");
    }
  });
}
// Show Collaps
function showCollapsContent() {
  collapsContent.classList.toggle("max-h-full");

  if (collapsContent.classList.contains("max-h-full")) {
    collapsBtn.classList.remove(
      "bg-[linear-gradient(180deg,#f9fafd00_70%,_#ffffffb3_90%)]"
    );
    collapsBtn.classList.remove("h-full");
    collapsBtnIcon.classList.add("rotate-90");
  } else {
    collapsBtn.classList.add(
      "bg-[linear-gradient(180deg,#f9fafd00_70%,_#ffffffb3_90%)]"
    );
    collapsBtn.classList.add("h-full");
    collapsBtnIcon.classList.remove("rotate-90");
  }
}

function categoriesTemplateGenerate() {
  allCategoriesContainer.innerHTML = "";

  categoriesItemData.map((category) => {
    allCategoriesContainer.insertAdjacentHTML(
      "beforeend",
      `
  <a href="categoriesApp.html?title=${category.title}" title="${category.title}" class="categories-item h-14 flex justify-between items-center sm:bg-[#f9fafd] sm:rounded-lg sm:border sm:border-[#f0f0f0] transition-all duration-150 hover:bg-white hover:shadow-[0_4px_24px_rgba(0,0,0,0.1)]">  
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


function mobileMenuItemActiveHandler (menuItem) {
  for(let menuItem of mobileMenuItems){
    menuItem.classList.remove("active--link")
  }

  menuItem.classList.add("active--link")
}

// Set Events
otherDropdown.addEventListener("click", showOtherMenu);
languageBtn.addEventListener("click", showLanguageMenu);
collapsBtn.addEventListener("click", showCollapsContent);
mobileMenuItems.forEach(menuItem => menuItem.addEventListener("click",() => mobileMenuItemActiveHandler(menuItem)))
