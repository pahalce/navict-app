export const includeJapaneseLetter = (str: string) => {
  return !!str.match(/^[^\x01-\x7E\xA1-\xDF]+$/)
}
export const formatDate = (date: Date) => {
  const t = new Date(date)
  return `${t.getFullYear()}/${t.getMonth()}/${t.getDate()}  ${t.getHours()}:${t.getSeconds()}`
}
