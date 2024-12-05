import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const getNode = () =>
  [...document.querySelectorAll(`.surveyQuizRoot`)].pop() || null;

function initElmaReact() {
  let cnt = 0;
  function tryInit() {
    const node = getNode();
    console.log("node", node);
    if (node) {
      createRoot(node).render(
        <StrictMode>
          <App />
        </StrictMode>
      );
      return;
    }
    if (cnt++ > 20) return;

    window.setTimeout(tryInit, 100);
  }
  tryInit();
}

initElmaReact();
