import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react"
import Navbar from '../components/Navbar';
import { MemoryRouter } from 'react-router-dom';

it("Rendering the Navbar should have 8 links in total", () => {

    // need to render Links within a Router of some kind
    render(<MemoryRouter>
        <Navbar/>
    </MemoryRouter>)
    const links = screen.getAllByRole("link");

    // seems to only register the <Link> components
    expect(links.length).toBe(8);
});

xit("Should be able to change the language - does not pick up language change yet", () => {
    render(<MemoryRouter>
        <Navbar/>
    </MemoryRouter>);
    expect(screen.getByText("English")).toHaveStyle("font-weight: bold;");
    fireEvent.click(screen.getByText("Gaeilge"));
    expect(screen.getByText("Gaeilge")).toHaveStyle("font-weight: bold;");
});

it("Clicking either submenu button should open that submenu", () => {
    render(<MemoryRouter>
        <Navbar/>
    </MemoryRouter>);
    const button = screen.getByText("navbar.see");
    fireEvent.click(button);
    const link = screen.getByText("navbar.colwdvatn");
    expect(link).toBeVisible();


    // the language buttons shouldn't visible until the change langauge icon is clicked
    expect(screen.getByText("Gaeilge")).not.toBeVisible();
    fireEvent.click(screen.getByAltText("navbar.changeLang.alt"));
    expect(screen.getByText("Gaeilge")).toBeVisible();
});