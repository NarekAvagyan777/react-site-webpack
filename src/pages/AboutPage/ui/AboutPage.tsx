import { useTranslation } from "react-i18next";

interface AboutPageProps {
  className?: string;
}

export default function AboutPage({ className }: AboutPageProps) {
  const { t, i18n } = useTranslation("about");
  return <div>{t("О сайте")}</div>;
}
