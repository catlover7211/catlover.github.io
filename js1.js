// 以下是可選的 JavaScript 程式碼，用於添加簡單的動畫效果

window.onload = function() {
    var image = document.querySelector("img");
    image.addEventListener("mouseover", function() {
      image.style.transform = "scale(1.1)";
    });
    image.addEventListener("mouseout", function() {
      image.style.transform = "scale(1)";
    });
  };
  