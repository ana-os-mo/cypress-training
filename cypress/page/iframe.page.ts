class IframePage {
  private iframePageURL: string;
  private iframe: string;
  private navigationBar: string;
  private iframeTitle: string;
  private cssURL: string;

  constructor() {
    this.iframePageURL = "https://www.w3schools.com/html/html_iframe.asp";
    this.iframe = "iframe[title='W3Schools HTML Tutorial']";
    this.navigationBar = "div.w3-bar.w3-left";
    this.iframeTitle = "#main > h1";
    this.cssURL = "https://www.w3schools.com/css";
  }

  public visitIframePage() {
    cy.visit(this.iframePageURL);
    cy.frameLoaded(this.iframe);
  }

  public getFrameTitle(title: string) {
    cy.iframe(this.iframe).find(this.iframeTitle)
        .should("have.text", title);
  }

  public goToCssPageInFrame(title: string) {
    const cssBtn = title.split(" ")[0];

    cy.iframe(this.iframe).then((frame) => {
      cy.wrap(frame).find(this.navigationBar).contains(cssBtn).click();
      cy.frameLoaded(this.iframe, {url: this.cssURL});
      this.getFrameTitle(title);
    });
  }
}

export {IframePage};
