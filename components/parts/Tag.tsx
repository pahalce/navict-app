import Image from 'next/image'
type Props = {
  name: string
  className?: string
}

const includeJapaneseLetter = (str: string) => {
  return !!str.match(/^[^\x01-\x7E\xA1-\xDF]+$/)
}

const Tag = ({ name, className }: Props) => {
  return (
    <div className={`flex ${className}`}>
      <Image src="/list/tag.svg" width={10} height={10} />
      <div
        className={
          'ml-2 ' + (includeJapaneseLetter(name) ? 'text-$t6' : 'text-$T5')
        }
      >
        {name}
      </div>
    </div>
  )
}

export default Tag
