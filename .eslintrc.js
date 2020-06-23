
module.exports = {
  extends: ['react-app', './node_modules/gts/'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'node/no-extraneous-import': "off",
    "no-restricted-imports": [
      "error",
      {
        "paths": [
          {
            "name": "styled-components",
            "message": "Please import from styled-components/macro."
          },
          {
            "name": '@testing-library/react',
            "message": "Please import from 'providers/TestingProvider/helpers/testing-library-utils', which comes decorated with <TestingProvider/>."
          }
        ],
        "patterns": [
          "!styled-components/macro"
        ]
      }
    ]
  },
};
