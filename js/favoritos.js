const labelFavear = document.querySelector("#label-favear")
const inputFavear = document.querySelector("#input-favear")
const estrella = document.querySelector(".estrella")


inputFavear.addEventListener("click", () => {
    labelFavear.innerHTML = `<i class="fa-solid fa-star"></i>`
})