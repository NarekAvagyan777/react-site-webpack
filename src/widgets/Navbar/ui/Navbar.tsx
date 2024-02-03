import classNames from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { type ReactNode } from 'react'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): ReactNode => {
  return (
      <div className={classNames(cls.Navbar, {}, [])}>
          <div className={cls.links}>
              <AppLink to={'/'} theme={AppLinkTheme.SECONDARY} className={cls.mainLink}
                    >
                  Main
              </AppLink>
              <AppLink to={'/about'} theme={AppLinkTheme.RED}>
                  About
              </AppLink>
          </div>
      </div>
  )
}
