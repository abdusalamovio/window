const images = () => {
  const imgPopup = document.createElement("div");
  const workSection = document.querySelector(".works");
  const bigImg = document.createElement("img");

  imgPopup.classList.add("popup");

  imgPopup.style.display = "none";
  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";

  workSection.appendChild(imgPopup);
  imgPopup.appendChild(bigImg);

  workSection.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;

    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex";
      const path = target.parentNode.getAttribute("href");
      bigImg.setAttribute("src", path);
    }
    if (target && target.matches("div.popup")) {
      imgPopup.style.display = "none";
    }
  });
};
export default images;
