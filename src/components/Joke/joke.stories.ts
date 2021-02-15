import "./joke.css";
// import { createCard } from "./joke";
import { createElement } from "../utils/createElement";
import { getRandomJoke } from "../utils/api";

export default {
  title: "Components/Joke",
  parameters: { layout: "centered" },
};

export const Chuck = (args, { loaded: { chuckJoke } }) => {
  return createElement("p", {
    innerHTML: chuckJoke.value.joke,
    className: "joke",
    childs: [
      createElement("button", {
        className: "button",
        innerText: "New Joke",
        onclick: function refreshPage() {
          window.location.reload();
        },
      }),
    ],
  });
};

Chuck.loaders = [
  async () => ({
    chuckJoke: await getRandomJoke(),
  }),
];

function refreshPage() {
  window.location.reload();
}
// const refresh = return createElement("button", {
//   innerText: "refresh",
//   onClick: window.location.reload(),
// });
