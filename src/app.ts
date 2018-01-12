import "./stylesheets/main.css";

// Small helpers you might want to keep
import "./helpers/context_menu.ts";
import "./helpers/external_links.ts";

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

import { remote } from "electron";
import * as jetpack from "fs-jetpack";
import { greet } from "./hello_world/hello_world";

// "require" works around webpack alias not being visible by ts
const env = require("env");

const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// files from disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read("package.json", "json");

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};

query("#app").style.display = "block";
query("#greet").innerHTML = greet();
query("#os").innerHTML = osMap[process.platform];
query("#author").innerHTML = manifest.author;
query("#env").innerHTML = env.name;
query("#electron-version").innerHTML =
  process.versions.electron;

/** Centralize cast (see https://github.com/Microsoft/TypeScript/issues/3263) */
function query(selector): HTMLElement {
  return document.querySelector(selector)
}