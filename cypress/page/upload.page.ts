class UploadPage {
  private uploadDemoSiteURL: string;
  private chooseFileBtn: string;
  private submitBtn: string;
  private uploadedFileName: string;

  constructor() {
    this.uploadDemoSiteURL = "https://the-internet.herokuapp.com/upload";
    this.chooseFileBtn = "#file-upload";
    this.submitBtn = "#file-submit";
    this.uploadedFileName = "#uploaded-files"; // "#content > div > h3"; // #uploaded-files
  }

  public visitUploadDemoSite(): void {
    cy.visit(this.uploadDemoSiteURL);
  }

  public uploadFile(fileName: string): void {
    cy.get(this.chooseFileBtn).attachFile(fileName);
    cy.get(this.submitBtn).click();
  }

  public validateUpload(fileName: string): void {
    cy.get(this.uploadedFileName)
        .should("contain.text", fileName);
  }
}

export {UploadPage};
