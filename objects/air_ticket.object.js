class airTicketObject {
  constructor(page) {
    this.page = page;
  }
  get oneWayAirTicket() {
    return this.page.locator("xpath=//button[@id='one-tab']");
  }
  get dateLocator() {
    return this.page.locator(
      'xpath=(//span[contains(text(), "Journey Date")][1]//..//input)[1]',
    );
  }
  async calendarTomorrowDateLocator(weekday, month, day) {
    return this.page
      .locator(
        `#offcanvasTopdj-one-0 div[role="option"][aria-disabled="false"]`,
      )
      .filter({ hasText: String(day) })
      .filter({
        has: this.page.locator(`[aria-label*="Choose ${weekday}, ${month}"]`),
      })
      .first();
  }

  get searchButton() {
    return this.page.locator(
      "xpath=//div[@id='one-tab-pane']//button[contains(@class,'btn search_btn custom_btn')][normalize-space()='Search']",
    );
  }

  get firstFlightSelectButton() {
    return this.page.locator(
      "xpath=(//button[contains(@type,'button')][normalize-space()='BOOK TICKET'])[1]",
    );
  }

  get cartPrice() {
    return this.page.locator("xpath=(//div[contains(@class,'total_a')])[1]");
  }

  get modifysearchButton() {
    return this.page.locator(
      "xpath=//div[@id='one-tab-pane']//button[contains(@class,'btn search_btn custom_btn')][normalize-space()='Modify Search']",
    );
  }

  get firstFlightCostOnList() {
    return this.page.locator(
      "xpath=//div[contains(@class,'Flight_flight_card_right')]//span[contains(@class,'Flight_line_spacing')]",
    );
  }

  get continueButton() {
    return this.page.locator(
      "xpath= (//button[normalize-space()='CONTINUE'])[1]",
    );
  }
  get loginHeader() {
    return this.page
      .frameLocator(
        "//iframe[contains(@src,'https://www.shohoz.com/login?embed=true')]",
      )
      .locator("//h2[normalize-space()='Welcome']");
  }

  get allPriceFromList() {
    return this.page.locator(
      "xpath=//span[contains(@class,'Flight_line_spacing')]",
    );
  }
}

export default airTicketObject;
