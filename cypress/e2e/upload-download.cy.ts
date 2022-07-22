import {UploadPage}
  from "../page/index";

describe("upload a file then download another one", () => {
  let uploadPage: UploadPage;

  before(() => {
    uploadPage = new UploadPage;
  });

  it("then the file should be uploaded", () => {
    // Arrange
    const fileName: string = "the-song.txt";
    uploadPage.visitUploadDemoSite();

    // Action
    uploadPage.uploadFile(fileName);

    // Assertion
    uploadPage.validateUpload(fileName);
  });
});
