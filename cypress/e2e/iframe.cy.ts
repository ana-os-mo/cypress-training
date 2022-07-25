import {IframePage} from "../page";

describe("the user navigation to the iframe page", () => {
  let iframePage: IframePage;

  before(() => {
    iframePage = new IframePage;
    iframePage.visitIframePage();
  });

  it("should have a title", () => {
    const htmlTitle = "HTML Tutorial";

    const htmlFrameTitle = iframePage.getFrameTitle();
    iframePage.checkFrameTitle(htmlFrameTitle, htmlTitle);
  });

  it("should be able to interact with the iframe elements",
      {"retries": 2}, () => {
        const cssTitle = "CSS Tutorial";

        iframePage.goToCssPageInFrame();
        const cssFrameTitle = iframePage.getFrameTitle();
        iframePage.checkFrameTitle(cssFrameTitle, cssTitle);
      });
});
