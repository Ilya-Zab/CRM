import { el, mount } from "redom";

const root = document.getElementById('app');

// createHeader(root);

function createHeader(root) {
  const header = el("header", {
    classList: "header d-flex",
  },

    el('div', {
      classList: "logo-skb header__logo"
    },

      el('img', {
        src: "./img/logo.svg",
        alt: "Logo skb"
      })
    ),

    el('div.input-group',

      el('input', {
        type: "search",
        classList: "form-control header__search",
        ariaLabel: "Search Name",
        ariaDescribedby: "Input name",
        placeholder: "Введите запрос",
      })
    )
  );

  mount(root, header);
}
