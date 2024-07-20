import { register } from "node:module";
import { pathToFileURL } from "node:url";
register("commonjs-extension-resolution-loader", pathToFileURL("./"));
