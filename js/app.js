const image = document.querySelector(".cat-image");
const button = document.getElementById("cat-button");
const main = document.querySelector(".main");

class Fetch {
  constructor(url, image) {
    this.image = image;
    this.url = fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        image.src = data.file;
        // image.classList.add("add-border");
      })
      .catch((err) => {
        console.log(`Oops, there is an error: ${err}`);
      });
  }
}

class UI {
  constructor() {}

  fethDataOnButtonClick(button) {
    const spinner = document.getElementById("spinner");

    button.addEventListener("click", function () {
      image.classList.remove("image-loaded");
      spinner.classList.add("show-spinner");
      setTimeout(() => {
        spinner.classList.remove("show-spinner");
        image.classList.add("image-loaded");
      }, 2000);
      const request = new Fetch("https://aws.random.cat/meow", image);
    });
  }
}

const ui = new UI();
ui.fethDataOnButtonClick(button);
