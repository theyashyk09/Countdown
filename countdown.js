let count = 0;

let text = document.getElementById("number");

let val = document.getElementById("countDown");

let button = document.getElementById("btn");

let pause = document.getElementById("pause");
let reset = document.getElementById("reset");

button.addEventListener("click", () => {
  let inp = text.value;
  count = inp;

  val.style.display = "block";
  val.textContent = count;
  button.style.display = "none";

  setInterval(() => {
    if (count > 0) {
      count--;
      val.textContent = count;
      reset.style.display = "block";
      text.value = "";

      reset.addEventListener("click", () => {
        window.location.reload();
      });

      if (count == 0) {
        val.textContent = "TIME UP";
        val.style.fontSize = "35px";
      }
    } else if (count < 0) {
      val.textContent = "Enter Valid Number";
      text.value = "";
      val.style.fontSize = "40px";
      reset.style.display = "block";
      reset.addEventListener("click", () => {
        window.location.reload();
      });
    }
  }, 1000);
});
