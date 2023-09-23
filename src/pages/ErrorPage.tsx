import { useTranslation, Trans } from "react-i18next";
import { useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div id="error-page">

        <h1>{t("error.title")}</h1>
        <p>{t("error.explanation")}</p>
        <p>
          <Trans i18nKey={"error.back"} t={t} components={{ a: <a href="/"></a> }}>
            Click <a>here</a> to go back to the home page.
          </Trans>
        </p>
      </div>
    </>
  );
}