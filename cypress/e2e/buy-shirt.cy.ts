import {MenuContentPage, ProductListPage,
  ShoppingCartPage, LoginPage, AddressStepPage,
  ShippingStepPage, PaymentStepPage}
  from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

const userId = {
  email: "aperdomobo@gmail.com",
  password: "WorkshopProtractor",
};

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productListPage.addProductToCart();

    shoppingCartPage.goToShoppingCartMenu();
    shoppingCartPage.goToAuthenticationMenu();

    loginPage.fillIdFields(userId.email, userId.password);
    loginPage.goToUserMenu();

    addressStepPage.goToShippingMenu();

    shippingStepPage.markTermsOfServiceCheckbox();
    shippingStepPage.goToPaymentMethodMenu();

    paymentStepPage.selectPaymentMethod();
    paymentStepPage.goToConfirmOrderMenu();

    // assertion
    cy.get("#center_column > div > p > strong")
        .should("have.text", "Your order on My Store is complete.");
  });
});
