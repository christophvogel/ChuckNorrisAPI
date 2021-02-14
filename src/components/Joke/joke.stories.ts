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
    innerText: chuckJoke.value.joke,
  });
};

Chuck.loaders = [
  async () => ({
    chuckJoke: await getRandomJoke(),
  }),
];
