import cssModulesPlugin from "esbuild-css-modules-plugin";

export default {
  logLevel: "info",
  entryPoints: ["src/index.js"],
  bundle: true,
  loader: { ".js": "jsx", ".png": "dataurl", ".svg": "text" },
  outfile: "dist/index.js",
  plugins: [cssModulesPlugin()],
};
