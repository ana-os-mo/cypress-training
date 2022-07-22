class UploadPage {
  private uploadDemoSiteURL: string;
  private chooseFileBtn: string;
  private submitBtn: string;
  private uploadedFileMessage: string;

  constructor() {
    this.uploadDemoSiteURL = "https://the-internet.herokuapp.com/upload";
    this.chooseFileBtn = "#file-upload";
    this.submitBtn = "#file-submit";
    this.uploadedFileMessage = "#content > div > h3";
  }

  public visitUploadDemoSite(): void {
    cy.visit(this.uploadDemoSiteURL);
  }

  public uploadFile(fileName: string): void {
    cy.get(this.chooseFileBtn).attachFile(fileName);
    cy.get(this.submitBtn).click();
  }

  public validateUpload(message: string): void {
    cy.get(this.uploadedFileMessage)
        .should("have.text", message);
  }
}

export {UploadPage};
