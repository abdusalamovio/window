import calcScroll from "./calcScroll";

const images = () => {
  const imgPopup = document.createElement("div");
  const workSection = document.querySelector(".works");
  const bigImg = document.createElement("img");
  const scroll = calcScroll();

  imgPopup.classList.add("popup");

  imgPopup.style.display = "none";
  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";

  bigImg.style.maxWidth = "75vw";
  bigImg.style.maxHeight = "75vh";

  workSection.appendChild(imgPopup);
  imgPopup.appendChild(bigImg);

  workSection.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;

    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex";
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = `${scroll}px`;

      const path = target.parentNode.getAttribute("href");
      bigImg.setAttribute("src", path);
    }
    if (target && target.matches("div.popup")) {
      imgPopup.style.display = "none";
      document.body.style.overflow = "auto";
      document.body.style.marginRight = `0px`;
    }
  });
};
export default images;
