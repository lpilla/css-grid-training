const items = document.getElementsByClassName("item");
console.log(items);
const products = document.getElementsByClassName("product");
const industries = document.getElementsByClassName("industry");

for (let i = 0; i < items.length; i++) {
  const element = items[i];
  const hasImage = element.getAttribute("data-image");
  element.addEventListener("mouseover", () => {
    console.log("fired");
    if (hasImage) {
      document.getElementById(
        "container"
      ).style.backgroundImage = `url(${element.getAttribute("data-image")})`;
    } else {
      document.getElementById(
        "container"
      ).style.backgroundImage = `url(./images/gettyimages-1153448444.jpg)`;
    }
  });
}

function seeIndustry() {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const industry = industries[i];
    product.classList.add("hide");
    industry.classList.remove("hide");
  }
}
function seeProducts() {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const industry = industries[i];
    product.classList.remove("hide");
    industry.classList.add("hide");
  }
}
