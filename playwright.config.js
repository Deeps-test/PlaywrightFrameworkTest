const { defineConfig, devices } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  
  timeout : 30 *1000,
  expect:{
    timeout : 5000,
  },
  reporter: 'html',
   use: {
    headless :false,
   trace: 'on-first-retry',
  },
  projects: [
   {
      name: 'chromium',
     
      use: { ...devices['Desktop Chrome'] },
    },/* {
      name: 'firefox',
      
      use: { ...devices['Desktop Firefox'] },
    },
   {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },  */
  ],
});

