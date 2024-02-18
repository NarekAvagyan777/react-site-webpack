import { BugButton } from "app/providers/ErrorBoundary";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function MainPage() {
  const { t } = useTranslation("main");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);
  return <div>{t("Главная страница")}</div>;
}
