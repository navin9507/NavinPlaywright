import { expect } from "@playwright/test";
exports.addEmployeePage=class addEmployeePage {


    constructor(page) {
        this.page = page;
        this.PIMButtom = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]');
        this.addEmployeeButton = page.locator("//a[text()='Add Employee']");
        this.firstNameIpt = page.locator("//input[@name='firstName']");
        this.lastNameIpt = page.locator("//input[@name='lastName']");
        this.saveBtn = page.locator("//button[@type='submit']");
        this.personalDetailsHeader = page.locator("//h6[text()='Personal Details']");
        this.firstNameErroeMsg = page.locator("(//span[text()='Required'])[1]");
        this.lastNameErrorMsg = page.locator("(//span[text()='Required'])[2]");
    }

    async navigateToPIM()
    {
        await this.PIMButtom.click();
    }

    async navigateToAddEmployee(){
        await this.addEmployeeButton.click();
    }

    async createEmployee(firstName,lastName)
    {
        await this.firstNameIpt.fill(firstName);
        await this.lastNameIpt.fill(lastName);
        await this.saveBtn.click();
    }

    async verifySucessfulEmployeeCreation(){
        await expect(this.personalDetailsHeader).toBeVisible();
    }

    async mandatoryFieldErrorMsg(){
        await this.saveBtn.click();
        await expect(this.firstNameErroeMsg).toBeVisible();
        await expect(this.lastNameErrorMsg).toBeVisible();
    }

}