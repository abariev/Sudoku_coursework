export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react-jsx',
          esModuleInterop: true,
          verbatimModuleSyntax: false,
          allowJs: true,
          types: ['jest', 'node', 'vite/client']
        }
      }
    ]
  },
  transformIgnorePatterns: ['node_modules/(?!(@sudoku-app/ui-library)/)']
}