//Select Element Dom
const collapsContent = document.querySelector("#collaps-content"),
collapsBtn = document.querySelector("#collaps-btn"),
collapsBtnIcon = document.querySelector("#collaps-btn svg"),
appDetailsImage = document.querySelector("#appImage"),
appDetailsName = document.querySelector("#appName"),
appDetailsCategories = document.querySelector("#appCategories"),
appDetailsBoxCategories = document.querySelector("#categories"),
appDetailsBoxVolume = document.querySelector("#volume")
import {allAppData} from "./allData.js"

//Get Location Browser
const locationParams = new URLSearchParams(location.search)
const mainApplicationId = locationParams.get("id")


// Select Data Main Application 
const mainApplicationObject = allAppData.find(app => {
    return app.id === +mainApplicationId
})


function appDetailsGenerate () {
    appDetailsImage.src = mainApplicationObject.img;
    appDetailsName.innerHTML = mainApplicationObject.title;
    appDetailsCategories.innerHTML = mainApplicationObject.type;
    appDetailsBoxCategories.innerHTML = mainApplicationObject.type;
    appDetailsBoxVolume.innerHTML = mainApplicationObject.appVolume + "مگابایت";
}

appDetailsGenerate()
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
collapsBtn.addEventListener("click", showCollapsContent);
  