import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	js.configs.recommended,
	...compat.config({
		extends: ["next/core-web-vitals", "prettier"],
		plugins: ["react", "react-hooks"],
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			semi: ["error"],
			"react/jsx-uses-react": "error",
			"react/jsx-uses-vars": "error",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
		},
	}),
	{
		files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
	},
	{
		ignores: [".next/*", "node_modules/*"],
	},
];

export default eslintConfig;
