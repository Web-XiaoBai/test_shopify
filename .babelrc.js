module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: ['ie >= 9']
        },
        modules: false,
        loose: true
      }
    ],
    '@babel/preset-react'
  ]
}