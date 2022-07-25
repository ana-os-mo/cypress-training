class IframePage {
  private iframePageURL: string;
  private iframe: string;
  private cssBtn: string;
  private iframeTitle: string;
  private cssURL: string;

  constructor() {
    this.iframePageURL = "https://www.w3schools.com/html/html_iframe.asp";
    this.iframe = "iframe[title='W3Schools HTML Tutorial']";
    this.cssBtn = "a[title='CSS Tutorial']";
    this.iframeTitle = "#main > h1";
    this.cssURL = "https://www.w3schools.com/css";
  }

  public visitIframePage() {
    cy.visit(this.iframePageURL);
  }

  public getFrameTitle(): Cypress.Chainable<string> {
    return cy.iframe(this.iframe).find(this.iframeTitle).invoke("text");
  }

  public checkFrameTitle(frameTitle:Cypress.Chainable<string>,
      expectedTitle:string): void {
    frameTitle.should("eq", expectedTitle);
  }

  public goToCssPageInFrame() {
    cy.iframe(this.iframe).then((frame) => {
      cy.wrap(frame).find(this.cssBtn).click();
      cy.frameLoaded(this.iframe, {url: this.cssURL});
    });
  }
}

export {IframePage};
