import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Pokemon Search/);
});

test("finds pikachu", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("textbox").fill("pikachu");

  // wait until fetch for pikachu ends
  await page.waitForResponse((response) => response.url().includes("pikachu"));

  expect(await page.$("text=pikachu")).toBeTruthy();
  expect(page.getByAltText("pikachu")).toBeTruthy();
});
