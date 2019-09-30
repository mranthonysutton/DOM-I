const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Navigation Items
let navigationItem = document.querySelectorAll("a");
navigationItem.forEach((item, index) => {
  item.textContent = siteContent["nav"][`nav-item-${index}`];
});

// CTA
const ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

const ctaImg = document.querySelector("#cta-img");
ctaImg.src = "img/header-img.png";

// Main Content
// Top Content
const topContentFeaturesH4 = document.querySelectorAll(
  ".top-content .text-content h4"
);
const topContentFeaturesP = document.querySelectorAll(
  ".top-content .text-content p"
);

topContentFeaturesH4[0].textContent =
  siteContent["main-content"]["features-h4"];
topContentFeaturesH4[1].textContent = siteContent["main-content"]["about-h4"];

topContentFeaturesP[0].textContent =
  siteContent["main-content"]["features-content"];
topContentFeaturesP[1].textContent =
  siteContent["main-content"]["about-content"];

// IMG
const featureIMG = document.querySelector("#middle-img");
featureIMG.src = "img/mid-page-accent.jpg";

// Lower Content
const bottomContentFeaturesH4 = document.querySelectorAll(
  ".bottom-content .text-content h4"
);
const bottomContentFeaturesP = document.querySelectorAll(
  ".bottom-content .text-content p"
);

bottomContentFeaturesH4[0].textContent =
  siteContent["main-content"]["services-h4"];
bottomContentFeaturesH4[1].textContent =
  siteContent["main-content"]["product-h4"];
bottomContentFeaturesH4[2].textContent =
  siteContent["main-content"]["vision-h4"];

bottomContentFeaturesP[0].textContent =
  siteContent["main-content"]["services-content"];
bottomContentFeaturesP[1].textContent =
  siteContent["main-content"]["product-content"];
bottomContentFeaturesP[2].textContent =
  siteContent["main-content"]["vision-content"];

// Contact Section
const contactH4 = document.querySelector(".contact h4");
const contactParagraphs = document.querySelectorAll(".contact p");

contactH4.textContent = siteContent["contact"]["contact-h4"];
contactParagraphs[0].textContent = siteContent["contact"]["address"];
contactParagraphs[1].textContent = siteContent["contact"]["phone"];
contactParagraphs[2].textContent = siteContent["contact"]["email"];

// Footer Section
const footerParagraph = document.querySelector("footer p");
footerParagraph.textContent = siteContent["footer"]["copyright"];
