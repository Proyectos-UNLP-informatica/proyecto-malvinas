import { Icons } from '../libs/icons'

export type { IntegrationUserConfig } from './integrations-config'
export type { ThemeUserConfig } from './theme-config'
export type { UserInputConfig as Config, UserConfig as ConfigOutput } from './user-config'

export interface SiteMeta {
  title: string
  description?: string
  ogImage?: string | undefined
  articleDate?: string | undefined
}

export type CardListData = {
  title: string
  list: CardList
}

export type CardList = {
  title: string
  link?: string
  children?: CardList
}[]

export type TimelineEvent = {
  title: string
  date: string // Formato visible para el usuario, ej: "21 de marzo de 1992"
  datetime: string // Formato para la máquina, ej: "1992-03-21"
  link: {
    href: string
    isExternal: boolean
  }
  image: {
    src: string
    alt: string
  }
}

export type iconsType = keyof typeof Icons

export { socialLinks } from './constants'
