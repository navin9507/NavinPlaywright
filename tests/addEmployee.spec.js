const { test, expect } = require('@playwright/test');
import { loginPage } from '../pageObjects/loginPage.po';
import loginData from "../testData/login.json"
import addEmployeeData from "../testData/addEmployee.json"
import { addEmployeePage } from "../pageObjects/addEmployeePage.po"
let page;
let login;
let addEmployee;
test.describe("verify login functionality", async () => {

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        login = new loginPage(page);
        addEmployee = new addEmployeePage(page);
        await login.launchUrl();
        await login.loginWithCredentials(process.env.ORG_USERNAME, process.env.ORG_PASSWORD);
        await login.loginSuccess();
        await addEmployee.navigateToPIM();
        await addEmployee.navigateToAddEmployee();
    })



    test("verify add employee functionality", async () => {

        let randomData = Math.random().toString(36).substring(2, 8);
        await addEmployee.createEmployee(addEmployeeData.firstName + randomData, addEmployeeData.lastName + randomData);
        await addEmployee.verifySucessfulEmployeeCreation();
    })

    test("verify mandatory fields error messages", async () => {

        await addEmployee.mandatoryFieldErrorMsg();
    })

})


