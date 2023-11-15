import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import Location, { LocationProps } from '../components/Location'

it ("Should render the Location entry", async() => {

    const props: LocationProps = {
        title: "Blahville",
        blurb: "AIUFHSDI",
        images: [{
            source: "image1.jpg",
            srcset: "",
            sizes: "",
            altText: "Test1"
        }, {
            source: "image2.jpg",
            srcset: "",
            sizes: "",
            altText: "Test2"
        }],
        endParagraph: "This is a test"
    };
    render(<Location title={props.title} blurb={props.blurb} images={props.images} endParagraph={props.endParagraph}></Location>);

    const header = await screen.findByRole("heading", {level: 1});
    expect(header).toHaveTextContent(props.title);

    const images = await screen.findAllByRole("img");
    expect(images[0]).toHaveAttribute("src", "image1.jpg");
    expect(images[0]).toHaveAttribute("alt", "Test1");
    expect(images[1]).toHaveAttribute("src", "image2.jpg");
    expect(images[1]).toHaveAttribute("alt", "Test2");
});