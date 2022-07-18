class AddressStepPage {
  private shippingMenu: string;

  constructor() {
    this.shippingMenu = ".cart_navigation > .button > span";
  }

  public goToShippingMenu(): void {
    cy.get(this.shippingMenu).click();
  }
}

export {AddressStepPage};
