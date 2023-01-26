import { getConfig } from "./utils/getConfig.js";
import { compile } from "./commands/compile.js";
import { cwd } from "process";
let config = await getConfig();

let configObj = config.default;

let input = `${cwd()}/content`;
let out = `${cwd()}/html`;
let title = "setso defalut title";
let css = false;
let cssDir = `${cwd()}/css`;

if (configObj.input !== undefined) {
    input = `${cwd()}${config.default.input}`;
}

if (configObj.out !== undefined) {
    out = `${cwd()}${config.default.out}`;
}

if (configObj.title !== undefined) {
    title = configObj.title;
}

if (configObj.css) {
    css = true;
}

if (configObj.cssDir) {
    cssDir = `${cwd()}${config.default.cssDir}`;
}

await compile(input, out, title, css, cssDir);
