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

    span.textContent = img.getAttribute("alt");
    img.before(button);
    button.append(img);
    button.after(dialog);


    img.style.viewTransitionName = "image";

    const toggleDialog = () => {
      if (dialog.open) {
        button.append(img);
        dialog.close();
      } else {
        span.before(img);
        span.style.setProperty("max-width", img.naturalWidth + "px");
        dialog.showModal();
      }
    };

    button.addEventListener("click", (e) => {
      if (!document.startViewTransition) {
        toggleDialog();
        return;
      }

      document.startViewTransition(() => toggleDialog());
    });

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        if (!document.startViewTransition) {
          toggleDialog();
          return;
        }
        document.startViewTransition(() => toggleDialog());
      }
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!document.startViewTransition) {
        toggleDialog();
        return;
      }
      document.startViewTransition(() => toggleDialog());
    });
  }

  [...document.querySelectorAll(selector)].forEach(createDialog);
}

createDialogs(".tip-content img");
