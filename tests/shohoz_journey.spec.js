import { test } from '@playwright/test';
import airTicketPage from '../page/air_ticket.page';
let airTicket;
let context;
let page;


test.beforeEach(async ({ browser }) => {
  context = await browser.newContext();
  page = await context.newPage();
  airTicket = new airTicketPage(page);
  await airTicket.openShohozAirTicketPage();
});

test.afterEach(async () => {
  await context.close();
});

test('TC01-Verify url navigate to the right page', async () => {
  await airTicket.verifyAirTicketPageTitle();
});

test('TC02-Verify one way button has been selected', async () => {
  await airTicket.selectOneWayButton();
  await airTicket.verifyOneWayButtonSelected();
});

test('TC03-Verify jouney date can be selected as tomorrow', async () => {
  await airTicket.selectJouneyDate();
});

test('TC04- click on search button', async () => {
  await airTicket.clickOnSearchButton();
});

test('TC-05 Click BOOK TICKET on the First flight.', async () => {
  await airTicket.clickOnFirstFlightBookTicket();
});

test('TC-06 Verify that the Total Price shown in the modal matches the price displayed in the flight list.', async () => {
  await airTicket.clickOnFirstFlightBookTicket();
  await airTicket.verifyPriceOnCart();
});

test('TC-07 Click CONTINUE.', async () => {
  await airTicket.clickOnFirstFlightBookTicket();
});

test('TC-08 Click CONTINUE.', async () => {
  await airTicket.clickOnFirstFlightBookTicket();
  await airTicket.clickContinueButton();
});

test('TC-09 Click CONTINUE.', async () => {
  await airTicket.clickOnFirstFlightBookTicket();
  await airTicket.clickContinueButton();
  await airTicket.verifyLoginHeader();
});

test('TC-10 Close the sign-in modal.', async () => {
  await airTicket.clickOnFirstFlightBookTicket();
  await airTicket.clickContinueButton();
  await airTicket.verifyLoginHeader();
  await airTicket.closeSignInModal();
});

test.only('TC-11 Capture the prices of the currently listed flights into an array and print it on CONSOLE', async () => {
  await airTicket.clickOnFirstFlightBookTicket();
  await airTicket.clickContinueButton();
  await airTicket.verifyLoginHeader();
  await airTicket.closeSignInModal();
  await airTicket.getFlightPrices();
});