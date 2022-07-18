class PaymentStepPage {
  private paymentMethod: string;
  private confirmOrderMenu: string;

  constructor() {
    this.paymentMethod = ".bankwire > span";
    this.confirmOrderMenu = "#cart_navigation > .button > span";
  }

  public selectPaymentMethod(): void {
    cy.get(this.paymentMethod).click();
  }

  public goToConfirmOrderMenu(): void {
    cy.get(this.confirmOrderMenu).click();
  }
}

export {PaymentStepPage};
