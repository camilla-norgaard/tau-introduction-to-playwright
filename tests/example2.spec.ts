// import { test, type Page } from '@playwright/test';
// import { HomePage } from '../pages/home-page';
// import { TopMenuPage } from '../pages/top-menu-page';

// const URL = 'https://playwright.dev/';
// let homePage: HomePage;
// let topMenuPage: TopMenuPage;
// const pageUrl = /.*intro/;

// test.beforeEach(async ({page}) => {
//     await page.goto(URL);
//     homePage = new HomePage(page);
// });

// async function clickGetStarted(page: Page) {
//     await homePage.clickGetStarted();
//     topMenuPage = new TopMenuPage(page);
// }

// test.describe('Playwright website', () => {

//     test('has title', async () => {
//         await homePage.assertPageTitle();
//     });

//     test('get started link', async ({ page }) => {
//         // Act
//         await clickGetStarted(page);
//         // Assert
//         await topMenuPage.assertPageUrl(pageUrl);
//     });

//     test('check Java page', async ({ page }) => {
//         await test.step('Act', async () => {
//             await clickGetStarted(page);
//             await topMenuPage.hoverNode();
//             await topMenuPage.clickJava();
//         });

//         await test.step('Assert', async () => {
//             await topMenuPage.assertPageUrl(pageUrl);
//             await topMenuPage.assertNodeDescriptionNotVisible();
//             await topMenuPage.assertJavaDescriptionVisible();
//         });
//     });
// });

import { test, expect, Page } from "@playwright/test";
import { HomePage } from "../pages/home-page";

//AAA
//POM - page object model

const URL = "https://playwright.dev/";
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  homePage = new HomePage(page);
});

async function clickGetStarted(page: Page) {
  //   await page.getByRole("link", { name: "Get started" }).click();
  await homePage.clickGetStarted();
}

test.describe("Playwright website", () => {
  test("has title", async (/* { page } */) => {
    //   await page.goto("https://playwright.dev/");
    // await expect(page).toHaveTitle(/Playwright/);
    await homePage.assertPageTitle();
  });

  test("get started link", async ({ page }) => {
    //   await page.goto("https://playwright.dev/");
    await clickGetStarted(page);
    await expect(page).toHaveURL(/.*intro/);
  });

  test("check Java page", async ({ page }) => {
    //   await page.goto("https://playwright.dev/");
    await clickGetStarted(page);
    await page.getByRole("button", { name: "Node.js" }).hover();
    await page.getByText("Java", { exact: true }).click();
    // await page.getByRole('navigation', { name: 'Main' }).getByText('Java').click(); // in case the locator above doesn't work, you can use this line. Remove the line above and use this one instead.
    await expect(page).toHaveURL("https://playwright.dev/java/docs/intro");
    await expect(
      page.getByText("Installing Playwright", { exact: true })
    ).not.toBeVisible();
    const javaDescription = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;
    await expect(page.getByText(javaDescription)).toBeVisible();
  });
});
