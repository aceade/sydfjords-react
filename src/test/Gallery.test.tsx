import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import Gallery from '../components/Gallery';

jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
      return {
        t: (str: string) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      };
    },
  }));

it("Render the gallery", () => {
    const images = [{
        source: "image1.jpg",
        srcset: "",
        sizes: "",
        altText: ""
    }]
    render(<Gallery images={images}></Gallery>);
    expect(true).toBeTruthy();
});