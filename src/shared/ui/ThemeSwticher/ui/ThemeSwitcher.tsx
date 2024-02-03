import type { ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames'
import cls from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/theme_light.svg'
import DarkIcon from 'shared/assets/icons/theme_dark.svg'
import { useTheme, Theme } from 'app/providers/ThemeProvider'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps): ReactNode => {
  const { theme, toggleTheme } = useTheme()
  return (
          <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
          {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
          <div>

               </div>
      </Button>
  )
}
