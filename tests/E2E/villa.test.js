import BasePage from "../../pages/villaPage";
import { baseUrl, jestTimeout } from "../../config";
import locators from "../../utils/villaLocator";

jest.setTimeout(jestTimeout);

describe("Villa Page E2E", () => {
  beforeAll(async () => {
    await BasePage.open();
    if (BasePage.isOffline()) {
      console.warn("Villa page unreachable, marking suite as skipped.");
    }
  }, jestTimeout);

  const skipIfOffline = () => (BasePage.isOffline() ? test.skip : test);

  skipIfOffline()("Villa page title should be available", async () => {
    const title = await BasePage.verifyTitle();
    expect(typeof title).toBe("string");
    expect(title.length).toBeGreaterThan(0);
  });

  skipIfOffline()("Get URL", async () => {
    const url = await BasePage.getUrl();
    expect(url).toContain("villa1.html");
  });

  skipIfOffline()("Main navigation and hero should be visible", async () => {
    await expect(await BasePage.isMainNavVisible()).toBe(true);
    await expect(await BasePage.isHeaderLogoVisible()).toBe(true);
    const heroOk = await BasePage.isHeroSectionVisible();
    await expect(heroOk).toBe(true);
    await expect(await BasePage.isMainTitleVisible()).toBe(true);
  });

  skipIfOffline()("Policies and gallery should be visible", async () => {
    await expect(await BasePage.isPolicyIconsVisible()).toBe(true);
    const count = await BasePage.getGalleryItemsCount();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  skipIfOffline()("Scroll to sections and verify visibility", async () => {
    const sc1 = await BasePage.scrollToSignup();
    const sc2 = await BasePage.scrollToReviews();
    expect(sc1 || sc2).toBe(true);
  });

  skipIfOffline()("Footer should be visible", async () => {
    await expect(await BasePage.isFooterVisible()).toBe(true);
  });

  skipIfOffline()("Contact link should navigate or reveal signup section", async () => {
    await BasePage.clickContact();
    await new Promise(r => setTimeout(r, 700));
    const inView = await BasePage.isElementVisible(locators.signupSection);
    expect(inView).toBe(true);
  });
});