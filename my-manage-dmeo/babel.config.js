module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 按需引入elm
    ["@babel/preset-env", { "modules": false }],
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
