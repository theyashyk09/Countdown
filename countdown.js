let text = document.getElementById("number");
let result = document.getElementById("countDown");

let button = document.getElementById("btn");
let reset = document.getElementById("reset");

let count = 0;

button.addEventListener("click", () => {
  let realVal = text.value;
  count = realVal;
  result.textContent = count;
  result.style.display = "block";
  text.style.display = "none";
  reset.style.display = "block";
  button.style.display = "none";
  reset.addEventListener("click", () => {
    window.location.reload();
  });
  setInterval(() => {
    if (count > 0) {
      count--;
      result.textContent = count;

      if (count == 0) {
        result.textContent = "Time up";
      }
    } else if (count < 0) {
      result.textContent = "Enter Valid Number";
    }
  }, 1000);
});
