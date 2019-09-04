module.exports = {
  presets: ["react-app"],
  plugins: [
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-export-default-from",
    ["relay", { schema: "data/schema.json" }]
  ],
  env: {
    production: {
      plugins: ["transform-remove-console"]
    }
  }
};
