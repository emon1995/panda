const h1 = document.getElementsByTagName("h1");
// console.log(h1);

for (const element of h1) {
  element.style.color = "lightblue";
}

// buy now
// const buyNow = document.getElementsByClassName("shoes-btn");
// for (const buy of buyNow) {
//   buy.addEventListener("click", function (event) {
//     const shoesItems = document.getElementById("shoes-items");
//     shoesItems.removeChild(event.target);
//   });
// }

// subscribe
const subscribeButton = document.getElementById("sub-btn");
subscribeButton.addEventListener("click", function () {
  document.getElementById("input").addEventListener("keyup", function (event) {
    console.log(event.target.value);
    if (event.target.value === "email") {
      subscribeButton.removeAttribute("disabled");
      console.log("done");
    } else {
      subscribeButton.setAttribute("disabled", true);
      console.log("false");
    }
  });
});
