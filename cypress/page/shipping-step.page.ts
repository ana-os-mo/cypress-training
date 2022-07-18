class ShippingStepPage {
  private termsOfServiceCheckbox: string;
  private paymentMethodMenu: string;

  constructor() {
    this.termsOfServiceCheckbox = "#cgv";
    this.paymentMethodMenu = ".cart_navigation > .button";
  }

  public markTermsOfServiceCheckbox(): void {
    cy.get(this.termsOfServiceCheckbox).check();
  }

  public goToPaymentMethodMenu(): void {
    cy.get(this.paymentMethodMenu).click();
  }
}

export {ShippingStepPage};
