import Image from 'next/image'

const BarMiddle = () => {
  return (
    <div className={`flex justify-center`}>
      <Image src={`/bar-middle.svg`} width={10} height={33} />
    </div>
  )
}

export default BarMiddle
