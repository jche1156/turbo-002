import { Header } from "@repo/ui/header";
import "./style.css";
import { Counter } from "@repo/ui/counter";
import { setupCounter } from "@repo/ui/setup-counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    ${Header({ title: "Hello Vite" })}
    <div class="card">
      ${Counter()}
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
