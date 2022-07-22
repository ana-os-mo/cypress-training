import {UploadPage}
  from "../page/index";

describe("upload a file then download another one", () => {
  let uploadPage: UploadPage;

  before(() => {
    uploadPage = new UploadPage;
  });

  it("then the file should be uploaded", () => {
    // Arrange
    const file: string = "the-song.txt";
    const validationMessage: string = "File Uploaded!";
    uploadPage.visitUploadDemoSite();

    // Action
    uploadPage.uploadFile(file);

    // Assertion
    uploadPage.validateUpload(validationMessage);
  });
});
