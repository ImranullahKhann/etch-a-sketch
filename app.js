const container = document.querySelector(".container");

const btn = document.querySelector("button");
let height = 0;
let width = 0;
btn.addEventListener("click", () => {
  // if there are already squares remove them
  if (height !== 0 && width !== 0)
  {
    squares = document.querySelectorAll(".square");
    for (i = 0; i < height*width; i++)
    {
      squares.forEach((sqr) => {
        sqr.remove();
      });
    }
  }
  height = +prompt("Height: ");
  width = +prompt("Width: ");
  if (width > 100)
    width = 100;
  if (height > 100)
    height = 100;
  // making squares and appending them to container
  for (i = 0; i < height*width; i++)
  {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
  // if there are any squares
  if (height !== 0 && width !== 0)
  {
    squares = document.querySelectorAll(".square");
    // making squares black when mouses goes over them and
    //Giving the squares the right height and width
    squares.forEach((sqr) => {
      sqr.style.cssText = `min-height: ${100 / height}%; min-width: ${100 / width}%;`
      sqr.addEventListener("mouseover", () => {
        sqr.style.backgroundColor = "black";
      });
  });
  }
})






