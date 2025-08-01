module.exports = {
    extends: [
      "stylelint-config-standard",
      "stylelint-config-tailwindcss",
      "stylelint-no-unsupported-browser-features",
      "stylelint-order",
    ],
    plugins: ["stylelint-tailwindcss","stylelint-declaration-strict-value"],
    rules: {
      "at-rule-no-unknown": [
        true,
        {
          ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "layer", "screen"],
        },
      ],
      "scale-unlimited/declaration-strict-value": [
        ["/color/", "font-size"],
        {
          ignoreValues: ["inherit", "currentColor", "transparent", "0"],
        },
      ],
      "color-no-hex": null,
      "custom-property-empty-line-before": null,
      "color-function-alias-notation": null,
      "rule-empty-line-before": null,
      "declaration-block-no-redundant-longhand-properties": null,
    },
  };
  