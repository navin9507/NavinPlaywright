import { test, expect } from '@playwright/test';
import data from "../testData/addEmployee.json"
test('add employee', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(process.env.ORG_USERNAME);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.ORG_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(data.firstName); 
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(data.lastName);
  await page.locator('.oxd-switch-input').click();
  await page.locator('.oxd-switch-input').click();
  await page.getByRole('button', { name: 'Save' }).click();
});