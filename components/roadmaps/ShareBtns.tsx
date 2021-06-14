import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAuth } from '~/contexts/AuthContext'
import { pushSigninWithPrevUrl } from '~/utils/auth'

type ShareBtnsProps = {
  onTwitterClick: () => void
  onLikeClick: () => void
}
const ShareBtns = ({ onTwitterClick, onLikeClick }: ShareBtnsProps) => {
  const auth = useAuth()
  const router = useRouter()

  const handleLikeClick = () => {
    if (auth.isLoggedIn) {
      onLikeClick()
    } else {
      pushSigninWithPrevUrl(router)
    }
  }

  return (
    <div className="flex flex-col">
      <div className="mb-2 cursor-pointer">
        <Image
          src="/twitter-share-btn.svg"
          width={46}
          height={46}
          onClick={onTwitterClick}
        />
      </div>
      <div className="cursor-pointer">
        <Image
          src="/like-btn.svg"
          width={46}
          height={46}
          onClick={handleLikeClick}
        />
      </div>
    </div>
  )
}

export default ShareBtns
