import { useTranslation } from "react-i18next";
import cls from './NotFoundPage.module.scss';
import { classNames } from "shared/lib/classNames";

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const {t} = useTranslation();
   
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
        {t('Страница не найдена')}
    </div>
  )
}
