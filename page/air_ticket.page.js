import { test, expect, mocha } from "@playwright/test";
import airTicketObject from "../objects/air_ticket.object.js";
import BasePage from "./base.page.js";

class airTicketPage extends BasePage {
  constructor(page) {
    super(page);
    this.airTicketObject = new airTicketObject(page);
  }

  async openShohozAirTicketPage() {
    await this.open("/air-tickets");
  }

  async verifyAirTicketPageTitle() {
    const pageTitle = await this.page.title();
    const lowerTitle = pageTitle.toLowerCase();
    expect(lowerTitle).toContain("shohoz");
    await this.logStep(`Page title verified: ${pageTitle}`);
  }

  async selectOneWayButton() {
    const button = this.airTicketObject.oneWayAirTicket;
    console.log(await button.count());
    await button.click({ force: true });
  }

  async verifyOneWayButtonSelected() {
    const button = this.airTicketObject.oneWayAirTicket;
    const isSelected = await button.getAttribute("aria-selected");
    expect(isSelected).toBe("true");
    await this.logStep(`One Way button is selected`);
  }

  async selectJouneyDate() {
    const today = new Date();
    const tomorrow = new Date(today+1);
    tomorrow.setDate(today.getDate() + 1);
    const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(tomorrow);
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(tomorrow);
    const dayNum = tomorrow.getDate();
    console.log("Tomorrow's date:", tomorrow);
    const dateField = this.airTicketObject.dateLocator;
    await dateField.click();
    const dateFormat = `${weekday}, ${month} ${dayNum}`;
    const locatorDate = await this.airTicketObject.calendarTomorrowDateLocator(weekday, month, dayNum);
    await locatorDate.click();
    await this.logStep(`Journey date selected as: ${dateFormat}`);
  }

  async clickOnSearchButton() {
    const searchBtn = this.airTicketObject.searchButton;
    await searchBtn.click();
    await this.page.waitForTimeout(5000);
  }
  async verifyModifySearchPage()
  {
    const modifysearchBtn = this.airTicketObject.modifysearchButton;
    await expect(modifysearchBtn).toBeVisible();
  }

  async selectFirstFlight()
  {
    const firstFlightSelectBtn = this.airTicketObject.firstFlightSelectButton;
    await firstFlightSelectBtn.click();
    const cartPrice = this.airTicketObject.cartPrice;
    await expect(cartPrice).toBeVisible();
  }

  async clickOnFirstFlightBookTicket()
  {
    await this.clickOnSearchButton();
    await this.verifyModifySearchPage();
    await this.selectFirstFlight();
  }

  async clickContinueButton()
  {
    const continueBtn = this.airTicketObject.continueButton;
    await continueBtn.click();
  }

  async getPriceOnList()
  {
    const priceOnListLocator = this.airTicketObject.firstFlightCostOnList;
    const priceOnListText = await priceOnListLocator.first().innerText();
    const numericPrice = priceOnListText.replace(/[^\d]/g, '');
    return numericPrice;
  }
  async verifyPriceOnCart()
  {
    const cartPriceLocator = this.airTicketObject.cartPrice;
    const cartPriceText = await cartPriceLocator.innerText();
    const numericCartPrice = cartPriceText.replace(/[^\d]/g, '');
    const priceOnList = await this.getPriceOnList();
    expect(numericCartPrice).toBe(priceOnList);
    await this.logStep(`Price on cart ${numericCartPrice} matches price on list ${priceOnList}`);
  }

  async verifyLoginHeader()
  {
    const loginHeaderLocator = this.airTicketObject.loginHeader;
    await expect(loginHeaderLocator).toBeVisible({ timeout: 10000 });
  }

  async closeSignInModal()
  {
    await this.page.mouse.click(10, 10);
  }
  async captureFlightPrices()
  {
    const priceOnListLocator = this.airTicketObject.allPriceFromList;
    const pricesCount = await priceOnListLocator.count();
    const pricesArray = [];
    for (let i = 0; i < pricesCount; i++) {
      const priceText = await priceOnListLocator.nth(i).innerText();
      const numericPrice = priceText.replace(/[^\d]/g, '');
      pricesArray.push(numericPrice);
    }
    console.log("Captured flight prices:", pricesArray);
  }
}

export default airTicketPage;
