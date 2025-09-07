import BasePage from "./BasePage"
import { timeout, baseUrl } from "../config";
import { 
    mainNav,
    headerLogo,
    homeLink,
    contactLink,
    discover,
    navToggler,
    heroSection,
    mainTitle,
    heroSubtitle,
    villaShowcaseTitle,
    policyIcons,
    noSmokingPolicy,
    noDrinkingPolicy,
    galleryGrid,
    galleryItems,
    galleryOverlays,
    galleryTitles,
    signupSection,
    reviewsTitle,
    footerSection
} from '../utils/villaLocator';

const villaURL = new URL('villa1.html', baseUrl).toString()
class VillaPage extends BasePage {

    constructor() {
        super(villaURL, timeout);
    }

    async open() {
        await super.open();
        //await super.waitForPageLoad();
    }

    async verifyTitle() {
        return await this.getTitle();
    }

    async isMainNavVisible() {
        return await this.isElementVisible(mainNav);
    }

    async isHeaderLogoVisible() {
        return await this.isElementVisible(headerLogo);
    }

    async ensureNavExpanded() {
        // If the target links are not visible, try expanding the navbar toggler (mobile views)
        const homeVisible = await this.isElementVisible(homeLink);
        if (homeVisible) return true;
        const togglerVisible = await this.isElementVisible(navToggler);
        if (togglerVisible) {
            await this.waitAndClick(navToggler);
            await page.waitForTimeout(300);
            return true;
        }
        return false;
    }

    async clickHome() {
        await this.ensureNavExpanded();
        return await this.waitAndClick(homeLink);
    }

    async clickContact() {
        await this.ensureNavExpanded();
        return await this.waitAndClick(contactLink);
    }

    async clickDiscover() {
        await this.ensureNavExpanded();
        return await this.waitAndClick(discover);
    }

    async isHeroSectionVisible() {
        const heroVisible = await this.isElementVisible(heroSection);
        if (heroVisible) return true;
        // fallback to main title presence in case hero container differs
        return await this.isXPathVisible(mainTitle);
    }

    async isMainTitleVisible() {
        return await this.isXPathVisible(mainTitle);
    }

    // Backward-compatibility alias
    async getMainTitle() {
        return await this.isMainTitleVisible();
    }

    async getHeroSubtitle() {
        return await this.getText(heroSubtitle);
    }

    async isVillaShowcaseTitleVisible() {
        return await this.isXPathVisible(villaShowcaseTitle);
    }

    async isPolicyIconsVisible() {
        return await this.isElementVisible(policyIcons);
    }

    async isNoSmokingPolicyVisible() {
        return await this.isElementVisible(noSmokingPolicy);
    }

    async isNoDrinkingPolicyVisible() {
        return await this.isElementVisible(noDrinkingPolicy);
    }

    async isGalleryGridVisible() {
        return await this.isElementVisible(galleryGrid);
    }

    async getGalleryItemsCount() {
        // Try multiple selectors to account for markup differences
        const [items, overlays, titles] = await Promise.all([
            this.getCount(galleryItems).catch(() => 0),
            this.getCount(galleryOverlays).catch(() => 0),
            this.getCount(galleryTitles).catch(() => 0)
        ]);
        return items || overlays || titles || 0;
    }

    async clickSignupSection() {
        return await this.waitAndClick(signupSection);
    }

    async isReviewsTitleVisible() {
        return await this.isElementVisible(reviewsTitle);
    }

    async isFooterVisible() {
        return await this.isElementVisible(footerSection);
    }

    async scrollToSignup() {
        return await page.evaluate((selector) => {
            const el = document.querySelector(selector);
            if (el) {
                el.scrollIntoView();
                return true;
            }
            return false;
        }, signupSection);
    }

    async scrollToReviews() {
        return await page.evaluate((selector) => {
            const el = document.querySelector(selector);
            if (el) {
                el.scrollIntoView();
                return true;
            }
            return false;
        }, reviewsTitle);
    }
}

export default new VillaPage();