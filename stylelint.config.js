module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  ignoreFiles: ['**/node_modules/**', 'src/assets/styles/style.scss'],
  rules: {
    'order/order': ['custom-properties', 'declarations'],
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
