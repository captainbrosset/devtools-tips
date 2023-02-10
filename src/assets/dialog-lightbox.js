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

    // @todo these should be dynamically added/removed on click but that results in artifacts
    // we need to dynamically add these to support animating multiple images on one page.
    // we probably also need to remove this from all other images.
    dialog.classList.add("lightbox--transition");
    button.classList.add("lightbox--transition");
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

    const callToggleDialog = () => {
      const motionAllowed = window.matchMedia(
        "(prefers-reduced-motion: no-preference)"
      ).matches;

      if (document.startViewTransition && motionAllowed) {
        document.startViewTransition(() => toggleDialog());
        return;
      }

      toggleDialog();
    };

    [
      { el: button, ev: "click" },
      { el: dialog, ev: "cancel" },
      { el: dialog, ev: "click", condition: (e) => e.target === dialog },
      { el: form, ev: "submit" },
    ].forEach(({ el, ev, condition = () => true }) => {
      el.addEventListener(ev, (e) => {
        if (condition(e)) {
          e.preventDefault();
          callToggleDialog();
        }
      });
    });
  }

  [...document.querySelectorAll(selector)].forEach(createDialog);
}

createDialogs(".tip-content img");
