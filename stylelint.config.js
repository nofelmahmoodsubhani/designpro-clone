/** @type {import("stylelint").Config} */
module.exports = {
    extends: [
      "stylelint-config-standard",
      "stylelint-no-unsupported-browser-features",
      "stylelint-config-tailwindcss",
    ],
    plugins: ["stylelint-declaration-strict-value"],
    rules: {
      "color-named": "never",
      "color-no-hex": true, // ❌ No raw hex
      "scale-unlimited/declaration-strict-value": [
        ["/color/", "z-index", "font-size", "box-shadow"],
        {
          ignoreKeywords: ["inherit", "currentColor", "transparent", "none"],
        },
      ],
    },
  };
  