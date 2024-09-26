import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser } from '@playwright/test';

let page:Page
let browser:Browser

         Given('providing valid url', async function () {
           console.log("Given")
           browser = await chromium.launch({headless: false})
           page = await browser.newPage()
           await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         });

   

         When('provide valid username and password', async function () {
            await page.locator('input[placeholder="Username"]').fill('Admin')
            await page.locator('input[placeholder="Password"]').fill('admin123')
         });

   

         Then('click on login button', async function () {
            await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()
            await page.waitForTimeout(2000)
           
         });

