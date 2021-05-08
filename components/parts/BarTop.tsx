import Image from 'next/image'

const BarTop = () => {
  return (
    <div className={`flex justify-center`}>
      <Image src={`/bar-top.svg`} width={32} height={44} />
    </div>
  )
}

export default BarTop
