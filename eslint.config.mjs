// @ts-check

import { readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import eslint from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import tseslint from 'typescript-eslint';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const baseDir = join(_dirname, 'src');
const internalDirectories = readdirSync(baseDir, {
  withFileTypes: true,
}).flatMap((dirent) => (dirent.isDirectory() ? dirent.name : []));

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  perfectionist.configs['recommended-natural'],
  { ignores: ['build', 'coverage', 'deprecated'] },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: _dirname,
      },
    },
    rules: {
      eqeqeq: 'error',
      '@typescript-eslint/no-unnecessary-condition': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: {
            value: {
              react: ['^react$', '^react-.+'],
            },
          },
          groups: [
            'react',
            'type',
            'builtin',
            'external',
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          internalPattern: [`^(${internalDirectories.join('|')})(/|$)`],
          sortSideEffects: true,
        },
      ],
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-jsx-props': 'off',
      'perfectionist/sort-modules': 'off',
      'perfectionist/sort-objects': 'off',
    },
  },
  {
    files: ['**/*.mjs'],
    extends: [tseslint.configs.disableTypeChecked],
  },
);
