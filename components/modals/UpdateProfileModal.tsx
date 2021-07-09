import { Dialog } from '@headlessui/react'
import { SetStateAction } from 'react'
import Cross from '../parts/Cross'
import UpdateProfileForm, {
  ProfileFormSchema
} from '$components/users/UpdateProfileForm'

type UpdateProfileModalProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
  onUpdateProfile: (data: ProfileFormSchema) => Promise<void>
}
const UpdateProfileModal = ({
  isOpen,
  setIsOpen,
  onUpdateProfile
}: UpdateProfileModalProps) => {
  const handleSubmit = async (data: ProfileFormSchema) => {
    setIsOpen(false)
    await onUpdateProfile(data)
  }
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed z-10 max-h-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 bg-$white rounded-2xl flex flex-col justify-center items-center shadow-$rich p-8 max-w-screen-lg"
    >
      <div className="cursor-pointer ml-auto">
        <Cross onClick={() => setIsOpen(false)} />
      </div>
      <Dialog.Overlay />
      <UpdateProfileForm onSaveButtonClick={handleSubmit} />
    </Dialog>
  )
}

export default UpdateProfileModal
