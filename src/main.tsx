import ReactDOM from "react-dom/client";
import App from "./app";
import { getCurrentUserInfo } from "@skzm/web-common";
import nProgress from "nprogress";

nProgress.configure({ showSpinner: false });

async function render() {
  const userInfo = await getCurrentUserInfo();

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
  );
  root.render(<App userInfo={userInfo} />);

  module.hot?.accept("./app.tsx", () => {
    root.render(<App userInfo={userInfo} />);
  });
}

try {
  await render();
} catch {}
