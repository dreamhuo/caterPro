module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential', // vue的标准，比如 v-for 没有写 key 的话会报错
    '@vue/standard' // 基于 standard 的标准
  ],
  // 可以根据自己的需求定制化自己的规则
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'indent': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
