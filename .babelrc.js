const {BABEL_ENV} = process.env;
const modules =
  BABEL_ENV === 'es' || BABEL_ENV === 'modules' ? false : 'commonjs';

module.exports = {
  presets: [
    ['@babel/preset-env', {modules}],
    '@babel/react',
    '@babel/preset-flow',
  ],
  plugins: [
    './babel/cup.js',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-logical-assignment-operators',
    ['@babel/plugin-proposal-optional-chaining', {loose: false}],
    ['@babel/plugin-proposal-pipeline-operator', {proposal: 'minimal'}],
    ['@babel/plugin-proposal-nullish-coalescing-operator', {loose: false}],
    '@babel/plugin-proposal-do-expressions',
    '@babel/plugin-proposal-class-properties',
  ],
  env: {
    test: {
      plugins: [['./babel/cup.js']],
    },
  },
};
