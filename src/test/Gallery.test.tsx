import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react"
import Gallery from '../components/Gallery';

it("Render the gallery", async() => {
    const images = [{
        source: "image1.jpg",
        srcset: "",
        sizes: "",
        altText: "First Image"
    }];
    render(<Gallery images={images}></Gallery>);
    let img = await screen.findByAltText("First Image");
    expect(img).toHaveAttribute("src", "image1.jpg");
});

it("Should be able to change images", async() => {
    const images = [{
        source: "image1.jpg",
        srcset: "",
        sizes: "",
        altText: "Test1"
    }, {
        source: "image2.jpg",
        srcset: "",
        sizes: "",
        altText: "Test2"
    }];
    render(<Gallery images={images}></Gallery>);

    let img = await screen.findByRole("img");
    expect(img).toHaveAttribute("src", "image1.jpg");

    fireEvent.click(screen.getByText("buttons.lastImage"));
    expect(img).toHaveAttribute("src", "image2.jpg");

    fireEvent.click(screen.getByText("buttons.lastImage"));
    expect(img).toHaveAttribute("src", "image1.jpg");

    fireEvent.click(screen.getByText("buttons.nextImage"));
    expect(img).toHaveAttribute("src", "image2.jpg");

    fireEvent.click(screen.getByText("buttons.nextImage"));
    expect(img).toHaveAttribute("src", "image1.jpg");

});