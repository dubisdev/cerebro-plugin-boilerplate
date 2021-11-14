import cssModulesPlugin from "esbuild-css-modules-plugin";

export default {
	logLevel: "info",
	entryPoints: ["src/index.js"],
	bundle: true,
	minify: true,
	format: "cjs",
	target: "es2016",
	loader: { ".js": "jsx", ".png": "dataurl", ".svg": "text" },
	outfile: "dist/index.js",
	plugins: [cssModulesPlugin()],
};
