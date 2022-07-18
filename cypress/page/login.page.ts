class LoginPage {
  private emailField: string;
  private passwordField: string;
  private logInMenu: string;

  constructor() {
    this.emailField = "#email";
    this.passwordField = "#passwd";
    this.logInMenu = "#SubmitLogin > span";
  }

  public fillIdFields(email:string, password:string): void {
    cy.get(this.emailField).type(email);
    cy.get(this.passwordField).type(password);
  }

  public goToUserMenu(): void {
    cy.get(this.logInMenu).click();
  }
}

export {LoginPage};
