"use strict";

function createDialogs(selector) {
  if (!selector) {
    return console.error("Missing selector argument");
  }

  const buttonTemplate = document.createElement("button");
  buttonTemplate.classList.add("lightbox-button");
  buttonTemplate.setAttribute("aria-haspopup", "dialog");

  const dialogTemplate = document.createElement("dialog");
  dialogTemplate.classList.add("lightbox");
  dialogTemplate.innerHTML = `
    <form method="dialog">
      <button type="submit">
      <span aria-hidden>×</span>
      <span class="sr-only">Close dialog</span>
      </button>
      <span aria-hidden></span>
    </form>
  `;

  function createDialog(img) {
    const button = buttonTemplate.cloneNode();
    const dialog = dialogTemplate.cloneNode(true);
    const form = dialog.querySelector("form");
    const span = dialog.querySelector("form > span");

    span.before(img.cloneNode());
    span.textContent = img.getAttribute("alt");
    img.before(button);
    button.append(img);
    button.after(dialog);

    const showDialog = () => {
      img.style.viewTransitionName = "";
      dialog.style.setProperty("width", img.naturalWidth + "px");
      dialog.showModal();
    };

    button.addEventListener("click", () => {
      if (!document.startViewTransition) {
        showDialog();
        return;
      }
      img.style.viewTransitionName = "image";
      document.startViewTransition(() => showDialog());
    });

    dialog.addEventListener(
      "click",
      event => event.target === dialog && dialog.close()
    );
  }

  [...document.querySelectorAll(selector)].forEach(createDialog);
}

createDialogs(".tip-content img");
