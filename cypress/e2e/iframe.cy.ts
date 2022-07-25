import {IframePage} from "../page";

describe("the user navigation to the iframe page", () => {
  let iframePage: IframePage;

  before(() => {
    iframePage = new IframePage;
  });

  it("should able to interact with the iframe elements",
      {"retries": 2}, () => {
        const htmlTitle: string = "HTML Tutorial";

        iframePage.visitIframePage();

        iframePage.getFrameTitle(htmlTitle);

        iframePage.goToCssPageInFrame();
      });
});
