import { useTranslation } from "react-i18next";

interface AboutPage {
     className?: string;
}

export default function AboutPage({className} :AboutPage) {
  const { t, i18n } = useTranslation("about");
  return <div>{t("О сайте")}</div>;
}
