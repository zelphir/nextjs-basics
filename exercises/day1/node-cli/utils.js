const eslintIgnore = `.next/*
out/*
exercises/*
*.json`;

const eslintRc = `module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
  },
};`;

const prettierRc = `module.exports = {
  singleQuote: true,
  printWidth: 100,
};`;

const prettierIgnore = `.next
out`;

const files = {
  '.env.sample': '# TODO',
  '.eslintignore': eslintIgnore,
  '.eslintrc.js': eslintRc,
  '.prettierc.js': prettierRc,
  '.prettierignore': prettierIgnore,
};

const index = `import React from 'react';

export default function Home() {
  return <div>Hello World!</div>;
}`;

module.exports = {
  files,
  index,
};
