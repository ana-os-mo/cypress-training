class ProductListPage {
  private addToCartB: string;

  constructor() {
    this.addToCartB = ".ajax_add_to_cart_button > span";
  }

  public addProductToCart(): void {
    cy.get(this.addToCartB).click();
  }
}

export {ProductListPage};
