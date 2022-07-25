class IframePage {
  private iframePageURL: string;
  private iframe: string;
  private navigationBar: string;
  private iframeTitle: string;

  constructor() {
    this.iframePageURL = "https://www.w3schools.com/html/html_iframe.asp";
    this.iframe = "#main iframe[src='default.asp']";
    this.navigationBar = "div.w3-bar.w3-left";
    this.iframeTitle = "#main > h1";
  }

  public visitIframePage() {
    cy.visit(this.iframePageURL);
    cy.frameLoaded(this.iframe);
  }

  public getFrameTitle(title: string) {
    cy.iframe(this.iframe).find(this.iframeTitle)
        .should("have.text", title);
  }

  public goToCssPageInFrame() {
    const cssBtn = "CSS";

    cy.enter(this.iframe).then((frame) => {
      frame().find(this.navigationBar).contains(cssBtn).click();
    });
  }
}

export {IframePage};
