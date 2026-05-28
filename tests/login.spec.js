const { test, expect } = require('@playwright/test');
import { loginPage } from '../pageObjects/loginPage.po';
import loginData from "../testData/login.json"
let page;
let login;
test.describe("verify login functionality", async () => {

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        login = new loginPage(page);
        await login.launchUrl();
    })



    test("verify login with valid credentials", async () => {
        await login.loginWithCredentials(process.env.ORG_USERNAME, process.env.ORG_PASSWORD);
        await login.loginSuccess();
    })

    test("verify login with invalid userName and invalid password", async () => {
        await login.loginWithCredentials(loginData.wronguserName, loginData.wrongPassword);
        await login.loginError();
    })

    test("verify login with valid userName and invalid password", async () => {
        await login.loginWithCredentials(process.env.ORG_USERNAME, loginData.wrongPassword);
        await login.loginError();
    })


    test("verify login with invalid userName and valid password", async () => {
        await login.loginWithCredentials(loginData.wronguserName, process.env.ORG_PASSWORD);
        await login.loginError();
    })

})


