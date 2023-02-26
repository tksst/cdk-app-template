const { preset } = require("@tksst/eslint-config");

const x = preset.typeScript({ jsIsCjs: true });

x.push({
    rules: {
        "no-new": "off",
    },
});

module.exports = x;
