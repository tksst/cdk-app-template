const { preset } = require("@tksst/eslint-config");

const x = preset.typeScript({ jsIsCjs: true });

x.push({
    rules: {
        "no-new": "off",
    },
});

x.push({
    ignores: ["cdk.out/**"],
});

module.exports = x;
