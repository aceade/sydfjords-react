import { useTranslation } from "react-i18next";
import { useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const {t} = useTranslation();

  return (
    <>
    <Navbar/> 
    <div id="error-page">
      
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Click <a href="/">here</a> to go back to the home page.
      </p>
    </div>
    </>
  );
}