import Image from 'next/image'

const StepSection = () => {
  return (
    <div className="flex justify-center bg-$tint py-16 text-$primary">
      <div className="bg-$white text-$t2 text-center rounded-3xl text-$primary w-full max-w-3xl py-14 px-10 cursor-pointer">
        最初のステップを決めてみよう{' '}
        <Image src="/plus.svg" width="20" height="20" layout="fixed" />
      </div>
    </div>
  )
}

export default StepSection
