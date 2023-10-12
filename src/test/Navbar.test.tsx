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

it("The rendered language should have bold font-weight", () => {
    render(<MemoryRouter>
        <Navbar/>
    </MemoryRouter>);
    expect(screen.getByText("English")).toHaveStyle("font-weight: bold;");
    expect(screen.getByText("Gaeilge")).toHaveStyle("font-weight: normal;");
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