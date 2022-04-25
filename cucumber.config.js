const {Before, BeforeAll, After, AfeterAll, setDefaultTimeout, AfterAll} = require('@cucumber/cucumber');
const {chromium} = require('playwright');
const {expect} = require('@playwright/test');

global.expect = expect;
setDefaultTimeout(1000*1000);

BeforeAll(async function(){
  global.browser = await chromium.launch({
    slowMo: 500,
    headless: false,
    channel: "chrome"
  });
});

AfterAll(async function(){
  await global.browser.close();
});

Before(async function(){
  global.context = await global.browser.newContext();
  global.page = await global.context.newPage();
});

After(async function(){
  await global.page.close();
  await global.context.close();
})