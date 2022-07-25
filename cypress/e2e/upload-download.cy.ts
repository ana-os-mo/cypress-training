import {UploadPage, DownloadPage}
  from "../page/index";

describe("upload a file then download another one", () => {
  let uploadPage: UploadPage;
  let downloadPage: DownloadPage;

  before(() => {
    uploadPage = new UploadPage;
    downloadPage = new DownloadPage;
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

  it("then a file should be downloaded", () => {
    // Arrange
    const downloadedFile: string = "sampleFile.jpeg";
    downloadPage.visitDownloadDemoSite();

    // Action
    downloadPage.downloadFile();

    // Assertion
    downloadPage.validateDownload(downloadedFile);
  });
});
