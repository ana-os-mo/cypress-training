class ShoppingCartPage {
  private shoppingCartMenu: string;
  private authenticationMenu: string;

  constructor() {
    this.shoppingCartMenu = ".button-container > .button-medium > span";
    this.authenticationMenu = ".cart_navigation > .button > span";
  }

  public goToShoppingCartMenu(): void {
    cy.get(this.shoppingCartMenu).click();
  }

  public goToAuthenticationMenu(): void {
    cy.get(this.authenticationMenu).click();
  }
}

export {ShoppingCartPage};
