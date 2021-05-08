import Image from 'next/image'
import { useRef, useState } from 'react'
import { StepInfo } from '$/types/index'
import ButtonSmall from '../button/ButtonSmall'
import StepCard from '../list/StepCard'

type Props = {
  steps: StepInfo[]
  onAddStep: (step: StepInfo) => void
  onDeleteStep: (step: StepInfo) => void
  onAddLibrary: (library: StepInfo['library']) => void
}

const StepSection = ({ steps, onAddStep, onDeleteStep }: Props) => {
  const [isFormShown, setIsFormShown] = useState(false)
  const titleRef = useRef<HTMLInputElement>(null)
  const urlRef = useRef<HTMLInputElement>(null)

  const toggleShowForm = () => {
    setIsFormShown(!isFormShown)
  }
  const handleAddStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const title = titleRef?.current?.value
    const url = !urlRef?.current?.value
    if (title || url) {
      return
    }
    // const step: StepInfo = {
    //   isDone: false,
    //   library,
    // }
    // onAddStep(step)
  }
  const handleDeleteStep = (step: StepInfo) => {
    onDeleteStep(step)
  }

  return (
    <div className="flex justify-center bg-$tint py-16 text-$primary">
      <div className="bg-$white text-$t2 text-center rounded-3xl text-$primary shadow-$rich w-full max-w-2xl py-14 px-10">
        {steps.map((step) => (
          <StepCard
            href={step.library.link || ''}
            key={step.id}
            src={step.library.img || '/pencil.svg'}
            memo={step.memo || ''}
            title={step.library.title}
            canDelete
            onDeleteClick={() => handleDeleteStep(step)}
          />
        ))}
        <div onClick={toggleShowForm} className="cursor-pointer">
          {steps.length === 0
            ? '最初のステップを決めてみよう'
            : '次のステップを決めてみよう'}{' '}
          {!isFormShown && (
            <Image src="/plus.svg" width="20" height="20" layout="fixed" />
          )}
        </div>
        {isFormShown && (
          <div className="mt-10">
            <div>
              <input
                className="bg-$shade3 rounded-md text-$t4 px-4 py-2 w-full mb-4"
                type="text"
                placeholder="本の名前やサイトの名前を入力してみよう"
                ref={titleRef}
              />
              <input
                className="bg-$shade3 rounded-md text-$t4 px-4 py-2 w-full"
                type="text"
                placeholder="https://navict-app.vercel.app/"
                ref={urlRef}
              />
            </div>
            <div className="py-10">他の人は次にこのステップをやっています</div>
            <ButtonSmall onClick={handleAddStep} text="追加" />
          </div>
        )}
      </div>
    </div>
  )
}

export default StepSection
