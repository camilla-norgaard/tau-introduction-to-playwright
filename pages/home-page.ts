// import { type Locator, type Page, expect } from '@playwright/test';

// export class HomePage {
//     readonly page: Page;
//     readonly getStartedButton: Locator;
//     readonly pageTitle: RegExp;

//     constructor(page: Page) {
//         this.page = page;
//         this.getStartedButton = page.getByRole('link', { name: 'Get started' });
//         this.pageTitle = /Playwright/;
//     }

//     async clickGetStarted() {
//         await this.getStartedButton.click();
//     }

//     async assertPageTitle() {
//         await expect(this.page).toHaveTitle(this.pageTitle);
//     }
// }

// export default HomePage;


import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
// Variables
    readonly page: Page;
    readonly getStartedButton: Locator;
    readonly title: RegExp;

// Constructor
    constructor (page:Page) {
        this.page = page;
        this.getStartedButton = page.getByRole("link", { name: "Get started" });
        this.title = /Playwright/;
    }

// Methods
    async clickGetStarted() {
        await this.getStartedButton.click();
    }

    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.title);
    }

}

export default HomePage;