import Image from 'next/image'
import { useState } from 'react'

const StepSection = () => {
  const [isFormShown, setIsFormShown] = useState(false)

  const toggleShowForm = () => {
    setIsFormShown(!isFormShown)
  }

  return (
    <div className="flex justify-center bg-$tint py-16 text-$primary">
      <div className="bg-$white text-$t2 text-center rounded-3xl text-$primary shadow-$rich w-full max-w-2xl py-14 px-10">
        <div onClick={toggleShowForm} className="cursor-pointer">
          最初のステップを決めてみよう{' '}
          {!isFormShown && (
            <Image src="/plus.svg" width="20" height="20" layout="fixed" />
          )}
        </div>
        {isFormShown && (
          <div className="mt-10">
            <form>
              <input
                className="bg-$shade3 rounded-md text-$t4 px-4 py-2 w-full mb-4"
                type="text"
                placeholder="本の名前やサイトの名前を入力してみよう"
              />
              <input
                className="bg-$shade3 rounded-md text-$t4 px-4 py-2 w-full"
                type="text"
                placeholder="https://navict-app.vercel.app/"
              />
            </form>
            <div className="py-10">他の人は次にこのステップをやっています</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default StepSection
