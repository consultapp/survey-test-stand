import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

declare global {
  interface Window {
    CONTEXT_DATA_CLASSNAME: string;
  }
}

const CONTEXT_DATA_CLASSNAME = window.CONTEXT_DATA_CLASSNAME;

console.log("CONTEXT_DATA_CLASSNAME", CONTEXT_DATA_CLASSNAME);

function initElmaReact() {
  const getNode = () =>
    [...document.querySelectorAll(`.surveyQuizRoot`)].pop() || null;
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

// if (import.meta.env.VITE_NODE_ENV === "vccode") {
//   createRoot(document.getElementById("surveyQuizRoot")!).render(
//     <StrictMode>
//       <App />
//     </StrictMode>
//   );
// } else
initElmaReact();
