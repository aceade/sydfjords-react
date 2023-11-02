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

it("Hovering over either submenu button should open that submenu", () => {
    render(<MemoryRouter>
        <Navbar/>
    </MemoryRouter>);
    const button = screen.getByText("navbar.see");
    fireEvent.mouseOver(button);
    const link = screen.getByText("navbar.colwdvatn");
    expect(link).toBeVisible();

    fireEvent.click(button);
    expect(link).not.toBeVisible();


    fireEvent.mouseOver(screen.getByAltText("navbar.changeLang.alt"));
    expect(screen.getByText("Gaeilge")).toBeVisible();
    fireEvent.click(screen.getByAltText("navbar.changeLang.alt"));
    expect(screen.getByText("Gaeilge")).not.toBeVisible();
});

it("Clicking the change language button should leave the menu open", () => {
    render(<MemoryRouter>
        <Navbar/>
    </MemoryRouter>);

    fireEvent.click(screen.getByText("Gaeilge"));
    expect(screen.getByText("Gaeilge")).toBeVisible();
});

it("Clicking a link should close all menus", () => {
    render(<MemoryRouter>
        <Navbar/>
    </MemoryRouter>);

    fireEvent.click(screen.getByText("navbar.home"));
    expect(screen.getByText("Gaeilge")).not.toBeVisible();
});

it("", () => {
    render(<MemoryRouter>
        <Navbar/>
    </MemoryRouter>);

    fireEvent.click(screen.getByText("☰"));
    expect(screen.getByRole("navigation")).toHaveClass("topnav responsive");

    fireEvent.click(screen.getByText("☰"));
    expect(screen.getByRole("navigation")).toHaveClass("topnav");
});