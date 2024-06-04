// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,

  timeout: 50 * 1000,
  expect: {
    timeout: 5000
  },

  reporter: 'html',
  
  use: {
    trace: 'on-first-retry',
    headless : false
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});