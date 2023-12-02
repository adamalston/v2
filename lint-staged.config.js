module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --cache --fix --max-warnings 0',
    'prettier --cache --write',
  ],
  '*.{json,md,scss,yml}': 'prettier --cache --write',
};
