const items = document.getElementsByClassName("item");
console.log(items);
const products = document.getElementsByClassName("product");
const industries = document.getElementsByClassName("industry");

for (let i = 0; i < items.length; i++) {
  const element = items[i];
  const container = document.getElementById("container");
  const hasImage = element.getAttribute("data-image");
  element.addEventListener("mouseover", () => {
    hasImage
      ? (container.style.backgroundImage = `url(${element.getAttribute(
          "data-image"
        )})`)
      : (container.style.background = `url(./images/gettyimages-1153448444.jpg)`);
  });
}

function seeIndustry() {
  for (let i = 0; i < products.length; i++) {
    document.getElementById("title").innerText = "FOR ALL MARKETS";
    document.getElementById("productsController").classList.remove("active");
    document.getElementById("industryController").classList.add("active");
    const product = products[i];
    const industry = industries[i];
    product.classList.add("hide");
    industry.classList.remove("hide");
  }
}
function seeProducts() {
  for (let i = 0; i < products.length; i++) {
    document.getElementById("title").innerText = "ASIA-BASED GLOBAL SOLUTIONS";
    document.getElementById("productsController").classList.add("active");
    document.getElementById("industryController").classList.remove("active");
    const product = products[i];
    const industry = industries[i];
    product.classList.remove("hide");
    industry.classList.add("hide");
  }
}

seeProducts();
