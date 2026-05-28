import { expect } from "@playwright/test";

exports.loginPage = class loginPage {

    constructor(page) {
        this.page = page;
        this.usernameIpt = page.locator("//input[@name='username']");
        this.passwordIpt = page.locator("//input[@name='password']");
        this.loginBtn = page.locator("//button[@type='submit']");
        this.logo = page.getByAltText("company-branding");
        this.errorMsg = page.locator("//p[text()='Invalid credentials']");
    }

    async launchUrl() {
        await this.page.goto("/web/index.php/auth/login");
    }

    async loginWithCredentials(username, password) {
        await this.usernameIpt.fill(username);
        await this.passwordIpt.fill(password);
        await this.loginBtn.click();
    }

    async loginError() {
        await expect(this.errorMsg).toBeVisible();
    }

    async loginSuccess() {
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    }
}