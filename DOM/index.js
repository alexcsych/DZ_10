const clickBtn = document.querySelector("button");
const afterBtnImg = document.querySelector("img");
let i = 0;

clickBtn.onclick = function () {
  clickBtn.textContent = `Click ${i++}`;
  clickBtn.style.backgroundColor = `#${getRandomInt(255)}`;
  afterBtnImg.src =
    "https://natworld.info/wp-content/uploads/2016/12/%D0%B3%D0%BB%D0%B0%D0%B7%D0%B0-%D1%81%D0%BE%D0%B2%D1%8B.jpg";
  afterBtnImg.alt = "#";
  afterBtnImg.style.width = afterBtnImg.style.hight = "200px";
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

afterBtnImg.onmouseover = function () {
  afterBtnImg.src =
    "https://ichef.bbci.co.uk/news/640/cpsprodpb/13737/production/_100117697_gettyimages-621565860.jpg";
};

afterBtnImg.onmouseout = function () {
  afterBtnImg.src =
    "https://natworld.info/wp-content/uploads/2016/12/%D0%B3%D0%BB%D0%B0%D0%B7%D0%B0-%D1%81%D0%BE%D0%B2%D1%8B.jpg";
};
