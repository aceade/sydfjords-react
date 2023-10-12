export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest" 
    // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        '\\./(gif|ttf|eot|svg|png)$': '<rootDir>/src/test/__ mocks __/fileMock.js',
        "\\.(css|less)$": "<rootDir>/src/test/__mocks__/cssMock.js"
    },
    setupFiles: [
        "<rootDir>/src/test/__mocks__/setup.js"
    ],
    collectCoverage: true,
    coverageReporters: [
        "json-summary",
        "text",
        "lcov"
    ]
}