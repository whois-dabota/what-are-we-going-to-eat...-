const foodList = document.querySelectorAll("#food li");
const randomizeBtn = document.querySelector("#randomize-btn");
const result = document.querySelector("#result");

let previousIndex = -1;

randomizeBtn.addEventListener("click", function () {

    if (foodList.length === 0) {
        result.textContent = "No food options available!";
        return;
    }

    let randomIndex;

    // Avoid picking the same food twice in a row
    do {
        randomIndex = Math.floor(Math.random() * foodList.length);
    } while (foodList.length > 1 && randomIndex === previousIndex);

    previousIndex = randomIndex;

    const selectedFood = foodList[randomIndex].textContent;

    result.textContent = "Today, you're having: " + selectedFood + "!";
});
