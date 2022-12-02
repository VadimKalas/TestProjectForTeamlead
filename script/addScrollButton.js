export default function addScrollButton() {
  const buttons = document.querySelectorAll(".button-order");

  const destination = document.querySelector(".section__order");
  const destinationHeight = destination.offsetTop;

  console.log(destinationHeight);

  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", function (e) {
      e.preventDefault();
      console.log(e);
      window.scrollTo(0, destinationHeight);
    });
  }
}
