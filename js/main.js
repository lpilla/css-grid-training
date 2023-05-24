const items = document.getElementsByClassName("item");
console.log(items);
const products = document.getElementsByClassName("product");
const industries = document.getElementsByClassName("industry");
let activeSelection;

for (let i = 0; i < items.length; i++) {
  const element = items[i];

  const container = document.getElementById("container");
  let child;
  element.addEventListener("mouseover", () => {
    if (activeSelection === "products") {
      child = element.getElementsByClassName("product");
      const hasImage = child[0].getAttribute("data-image");
      hasImage
        ? (container.style.backgroundImage = `url(${hasImage})`)
        : (container.style.background = `url(./images/1.jpg)`);
    } else {
      child = element.getElementsByClassName("industry");
      const hasImage = child[0].getAttribute("data-image");
      hasImage
        ? (container.style.backgroundImage = `url(${hasImage})`)
        : (container.style.background = `url(./images/1.jpg)`);
    }
  });
}

function seeIndustry() {
  activeSelection = "industry";
  document.getElementById("title").innerText = "FOR ALL MARKETS";
  document.getElementById("productsController").classList.remove("active");
  document.getElementById("industryController").classList.add("active");
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const industry = industries[i];
    product.classList.add("hide");
    industry.classList.remove("hide");
  }
}
function seeProducts() {
  activeSelection = "products";
  document.getElementById("title").innerText = "ASIA-BASED GLOBAL SOLUTIONS";
  document.getElementById("productsController").classList.add("active");
  document.getElementById("industryController").classList.remove("active");
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const industry = industries[i];
    product.classList.remove("hide");
    industry.classList.add("hide");
  }
}
seeProducts();
