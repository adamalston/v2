module.exports = {
  '*.{cjs,js,jsx,ts,tsx}': [
    'eslint --cache --fix --max-warnings 0',
    'prettier --cache --write',
  ],
  '*.scss': [
    'stylelint --cache --fix --max-warnings 0',
    'prettier --cache --write',
  ],
  '*.{json,md}': 'prettier --cache --write',
};
