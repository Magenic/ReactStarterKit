module.exports = {
  hooks: {
    'pre-commit': 'lint-staged --verbose --config ./packages/lint-staged-bootstrap/lint-staged.config.js',
    'commit-msg': 'commitlint --config ./packages/commit-bootstrap/lib/commit-lint-config/index.js -E HUSKY_GIT_PARAMS'
  },
};
