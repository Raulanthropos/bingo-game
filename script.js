const container = document.getElementById("container");
// const box = document.createElement("button");
// container.appendChild(box);

/* The above code would create one element and apppend it to the container div, but I did not understand the solution to do it programmatically for 76 boxes. It was easier with emmet on HTML, this is something I'll inquire during the debrief. */

window.onload = function () {
  const leggoVar = document.querySelector("#leggo");
  const randomizeNumber = function () {
    let arrayOfBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76];
    const randomizer = Math.ceil(Math.random() * 76);
    for (let i=0; i < arrayOfBoxes.length; i++) {
        if (randomizer === arrayOfBoxes[i]) {
            // arrayOfBoxes[i].classList.add("bkgrcolor");
            //It doesn't work
            console.log(arrayOfBoxes[i], i);
        }
    }
    console.log(randomizer);
  };

  leggoVar.addEventListener("click", randomizeNumber);
};
