import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Page, Browser } from '@playwright/test';

let page:Page
let browser:Browser

Given('register form', async function () {
    browser = await chromium.launch({headless: false})
    page = await browser.newPage()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator('input[placeholder="Username"]').fill('Admin')
    await page.locator('input[placeholder="Password"]').fill('admin123')
    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click()
    await page.waitForTimeout(2000)
    await page.locator("//a[@href='/web/index.php/admin/viewAdminModule']").click()
    await page.waitForTimeout(2000)
    await page.locator('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
    await page.waitForTimeout(2000)
  });



  When('enter valid data user', async function () {
    await page.locator('//div[@class="oxd-select-text-input"]').first().click()
    await page.getByRole('option', { name: 'Admin' }).click();
    await page.waitForTimeout(2000)
    await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click()
    await page.getByRole('option', { name: 'Enabled' }).click();
    await page.waitForTimeout(2000)
    await page.getByPlaceholder('Type for hints...').click()
    await page.getByPlaceholder('Type for hints...').fill('j');
    await page.getByText('James Butler').click();
    await page.waitForTimeout(2000)
    await page.getByRole('textbox').nth(2).fill('Borda')
    await page.getByRole('textbox').nth(3).fill('eabr@2024')
    await page.getByRole('textbox').nth(4).fill('eabr@2024')
  });



  Then('click on save button', async function () {
    await page.locator('//button[@type="submit"]').click()
    await page.waitForTimeout(2000)
    
  });