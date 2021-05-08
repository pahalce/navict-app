import Image from 'next/image'

const BarBottom = () => {
  return (
    <div className={`flex justify-center`}>
      <Image src={`/bar-bottom.svg`} width={32} height={44} />
    </div>
  )
}

export default BarBottom
