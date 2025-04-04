export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",

    "\\.(jpg|jpeg|png|gif|webp)$": "<rootDir>/__mocks__/fileMock.js",

    "\\.svg(?:\\?react)?$": "<rootDir>/__mocks__/svgMock.tsx",

    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.app.json",
      },
    ],
  },

  transformIgnorePatterns: ["/node_modules/"],

  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",

  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/main.tsx",
    "!src/vite-env.d.ts",
    "!src/**/stories/*",
  ],
};
