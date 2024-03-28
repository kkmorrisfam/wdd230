//banner for home page

const weatherBanner = document.querySelector("#weather-banner");
const bannerBtn = document.querySelector("#banner-btn");

bannerBtn.addEventListener("click", () => {
    weatherBanner.classList.add("hide");
    console.log("inside event click");
});
