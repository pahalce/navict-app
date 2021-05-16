import { theme } from '~/tailwind.config'

export const includeJapaneseLetter = (str: string) => {
  return !!str.match(/^[^\x01-\x7E\xA1-\xDF]+$/) // eslint-disable-line no-control-regex
}

export const formatDate = (date: Date) => {
  const t = new Date(date)
  return `${t.getFullYear()}/${
    t.getMonth() + 1
  }/${t.getDate()}  ${t.getHours()}:${t.getSeconds()}`
}

const colors = { ...theme.colors } as const
export const systemColorToColorCode = (
  systemColor: keyof typeof colors
): string => {
  return theme.colors[systemColor]
}

export const getSystemColorFromPercentage = (percentage: number): string => {
  let systemColor = '$accent1'
  if (percentage > 33) {
    systemColor = '$accent2'
  } else if (percentage > 66) {
    systemColor = '$accent3'
  }
  return systemColor
}

export const shortenText = (text: string, count: number) =>
  `${text.slice(0, count)} ...`

export const comingSoon = () => alert('coming soon ...')
