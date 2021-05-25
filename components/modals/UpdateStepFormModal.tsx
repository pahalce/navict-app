import { Dialog } from '@headlessui/react'
import { SetStateAction } from 'react'
import { StepWithLib } from '~/pages/roadmaps/create'
import { LibraryInfo } from '~/server/types'
import { SelectOption } from '../parts/SelectInput'
import UpdateStepForm from '../roadmaps/step/UpdateStepForm'

type Props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
  libTitleOptions: SelectOption[]
  libs: LibraryInfo[]
  handleLibInputChange: (keyword: string) => void
  steps: StepWithLib[]
  stepIndex: number
  updateStep: (index: number, step: StepWithLib) => void
}

const UpdateStepFormModal = ({
  isOpen,
  setIsOpen,
  handleLibInputChange,
  libTitleOptions,
  libs,
  stepIndex,
  steps,
  updateStep
}: Props) => {
  const handleSubmitStep = (step: StepWithLib) => {
    updateStep(stepIndex, step)
    setIsOpen(false)
  }
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 bg-$white border-4 border-$primary rounded-2xl flex flex-col justify-center items-center shadow-$rich p-8 max-w-screen-lg"
    >
      <Dialog.Overlay />
      <Dialog.Title className="text-$t2 text-$primary my-16 text-center">
        ステップを編集
      </Dialog.Title>
      <UpdateStepForm
        handleLibInputChange={handleLibInputChange}
        libTitleOptions={libTitleOptions}
        libs={libs}
        onSubmitStep={handleSubmitStep}
        onClickCloseButton={() => setIsOpen(false)}
        step={steps[stepIndex]}
      />
    </Dialog>
  )
}

export default UpdateStepFormModal
