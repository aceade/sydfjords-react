import '@testing-library/jest-dom'
import { render, screen, fireEvent, act } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom';
import About from '../pages/About';

import 'jest-fetch-mock';

describe("Test the About page", () => {

    beforeEach(() => {
        fetchMock.doMock();
    });

    it("Should render", () => {
        render(<MemoryRouter>
            <About/>
        </MemoryRouter>);
        
        expect(screen.getByRole('heading', {
            level: 1
        })).toHaveTextContent("about.title");
        const h2s = screen.getAllByRole('heading', {
            level: 2
        });
        expect(h2s[0]).toHaveTextContent("about.offices");
        expect(h2s[1]).toHaveTextContent("about.email.title");
        expect(h2s[2]).toHaveTextContent("About");
    });
    
    it("Should not send email if details are missing", () => {
        render(<MemoryRouter>
            <About/>
        </MemoryRouter>);
       
        fireEvent.click(screen.getByText("buttons.submit"));
        expect(screen.getByText("about.email.invalid")).toBeVisible();
    });
    
    it("Should send email if details are correct", async() => {

        fetchMock.mockResponse(() => Promise.resolve({
            status: 200
        }));

        render(<MemoryRouter>
            <About/>
        </MemoryRouter>);

        // need to run this asynchronously
        await act(async () => {
            // simulate typing into this
            await userEvent.type(screen.getByLabelText("about.email.name"), "Me");
            await userEvent.type(screen.getByLabelText("about.email.address"), "me@example.com");
            await userEvent.type(screen.getByLabelText("about.email.message"), "Test");
            fireEvent.click(screen.getByText("buttons.submit"));
        });
        
        expect(screen.getByText("about.email.success")).toBeInTheDocument();
    });

    it("If sending email fails, we should warn the user", async() => {

        fetchMock.mockResponse(() => Promise.reject({
            status: 418,
            reason: "I'm a Teapot"
        }));

        render(<MemoryRouter>
            <About/>
        </MemoryRouter>);

        // need to run this asynchronously
        await act(async () => {
            // simulate typing into this
            await userEvent.type(screen.getByLabelText("about.email.name"), "Me");
            await userEvent.type(screen.getByLabelText("about.email.address"), "me@example.com");
            await userEvent.type(screen.getByLabelText("about.email.message"), "Test");
            fireEvent.click(screen.getByText("buttons.submit"));
        });
        
        expect(screen.getByText("about.email.failure")).toBeInTheDocument();
    });
});

