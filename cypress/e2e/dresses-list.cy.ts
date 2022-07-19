import {MenuContentPage, DressesListPage,
  expectedDressesList, numberOfDresses}
  from "../page/index";

describe("the user navigation to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;

  before(() => {
    menuContentPage = new MenuContentPage;
    dressesListPage = new DressesListPage;
  });

  it("show the available dresses", () => {
    // Arrange
    menuContentPage.visitMenuContentPage();

    // Action
    menuContentPage.goToDressesMenu();

    // Assertion
    dressesListPage.validateItemsNumber(numberOfDresses);
    dressesListPage.validateItemsName(expectedDressesList);
  });
});
