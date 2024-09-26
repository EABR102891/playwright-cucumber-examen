import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser } from '@playwright/test';

let page:Page
let browser:Browser

         Given('search form', async function () {
            browser = await chromium.launch({headless: false})
            page = await browser.newPage()
            await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            await page.locator('input[placeholder="Username"]').fill('Admin')
            await page.locator('input[placeholder="Password"]').fill('admin123')
            await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()
            await page.waitForTimeout(2000)
            await page.locator("//a[@href='/web/index.php/admin/viewAdminModule']").click()
            await page.waitForTimeout(2000)
         });

   

         When('provide valid data user', async function () {
            await page.getByRole('textbox').nth(1).click()
            await page.getByRole('textbox').nth(1).fill('Borda')
            await page.waitForTimeout(2000)
         });

   

         Then('click on search button', async function () {
            await page.locator('//button[@type="submit"]').click()
            await page.pause()
           
         });