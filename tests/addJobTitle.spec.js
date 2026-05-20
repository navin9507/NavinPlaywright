import { test, expect } from '@playwright/test';
import data from "../testData/addJpbTitle.json"
test('add job title', async ({ page }) => {
    await page.goto("/web/index.php/auth/login");
    await page.locator("//input[@name='username']").fill('Admin');
    await page.locator("//input[@name='password']").fill('admin123');
    await page.locator("//button[@type='submit']").click();
    await page.locator("//span[text()='Admin']").click();
    await page.locator("//span[text()='Job ']").click();
    await page.locator("//a[text()='Job Titles']").click();
    await page.locator("//button[text()=' Add ']").click();
    let randomData = Math.random().toString(36).substring(2, 8);
    await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill(data.jobTitle +randomData);
    await page.locator("//textarea[@placeholder='Type description here']").fill(data.description);
    await page.locator("//textarea[@placeholder='Add note']").fill(data.note);
    await page.locator("//button[@type='submit']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList");

})