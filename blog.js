// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
document.querySelector(".article__header").textContent = "Welcome to the extremely confusing blog";

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// querySelectorAll returns collection of elements in an array and can only be accessed by index 
const headerEl = document.querySelectorAll(".article__header")
for (const element of headerEl) {
  element.classList.add("important")
}

// Obtain a reference the element with a class of dashed and remove it.
document.querySelector(".dashed").classList.remove("dashed")

// Obtain a reference the element with a class of article__footer and add the class of goldenrod it.
document.querySelector(".article__footer").classList.add("goldenrod")