import { Dialog } from '@headlessui/react'
import Image from 'next/image'
import { SetStateAction } from 'react'

type Props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const AchieveModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(true)}
      className="fixed z-10 inset-x-32 inset-y-8 overflow-y-auto bg-$white rounded-2xl flex flex-col justify-center items-center"
    >
      <Dialog.Overlay />

      <div onClick={() => setIsOpen(false)} className="absolute right-8 top-8">
        <Image src="/cross.svg" width={24} height={24} layout="fixed" />
      </div>

      <Dialog.Title className="text-$t2 text-$primary my-8">
        ロードマップ完走おめでとうございます
      </Dialog.Title>
      <Image
        src="/achieveGoal.gif"
        alt="twitter icon"
        width="360"
        height="240"
      />
      <Dialog.Description className="py-4 text-$t5">
        あなたの頑張りをみんなに共有しよう！
      </Dialog.Description>

      <button className="flex items-center justify-center bg-$twitterBlue rounded-full text-$white w-96 h-20 mb-7">
        <Image
          src="/brandIcon/twitterIcon.svg"
          alt="twitter icon"
          width="24"
          height="24"
        />
        <div className="text-$t3 ml-4">Twitterでシェア</div>
      </button>
      {/* <button onClick={() => setIsOpen(false)}>Deactivate</button> */}
    </Dialog>
  )
}

export default AchieveModal
