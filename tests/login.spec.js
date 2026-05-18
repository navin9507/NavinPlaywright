import {test, expect } from '@playwright/test';

test("verify login with valid credentials", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("Admin")

    await page.locator("input[type='password']").fill("admin123")

    await page.locator("button[type='submit']").click()

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
})

test("verify login with invalid username and valid password ", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("Adm")

    await page.locator("input[type='password']").fill("admin123")

    await page.locator("button[type='submit']").click()

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})

test("verify login with valid username and invalid password ", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("Admin")

    await page.locator("input[type='password']").fill("admin1")

    await page.locator("button[type='submit']").click()

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})

test("verify login with invalid username and invalid password ", async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("Adm")

    await page.locator("input[type='password']").fill("admin1")

    await page.locator("button[type='submit']").click()

   await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
})