/** @type {import('lint-staged').Configuration} */
export default {
  '*.{cjs,js,jsx,ts,tsx}': [
    'eslint --cache --fix --max-warnings 0',
    'prettier --cache --write',
  ],
  '*.scss': [
    'stylelint --cache --fix --max-warnings 0',
    'prettier --cache --write',
  ],
  '*.{html,json,md,yml}': 'prettier --cache --write',
};
