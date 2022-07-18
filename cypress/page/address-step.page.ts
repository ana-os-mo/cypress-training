class AddressStepPage {
  private shippingMenu: string;

  constructor() {
    this.shippingMenu = ".cart_navigation > .button";
  }

  public goToShippingMenu(): void {
    cy.get(this.shippingMenu).click();
  }
}

export {AddressStepPage};
