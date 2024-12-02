export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Sets the maximum length for commit messages. It accounts for a 3-digit PR
    // number (e.g., #123), and formatting (space and parentheses) in squash
    // merges. Calculation: 72 (GitHub's limit) - 7 (3 digits for PR number +
    // space + parentheses + hash symbol) = 65.
    'header-max-length': [2, 'always', 65],
  },
};
