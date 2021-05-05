import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '~/contexts/AuthContext'
import UserIcon from '../UserIcon'
const Nav = () => {
  const auth = useAuth()
  return (
    <div className="flex justify-between items-center px-10 mx-auto pt-4">
      <div className="flex py-1">
        <Link href="/">
          <p className="mr-8 font-josefin font-medium text-3.5xl cursor-pointer">
            navict
          </p>
        </Link>

        <form className="flex items-center relative w-1/2">
          <div className="flex items-center absolute top-50 left-4 text-$ cursor-text">
            <Image src="/header/search.svg" width="20" height="20" />
          </div>
          <input
            type="text"
            placeholder="ロードマップを検索"
            className="py-1 pl-12 border-2 border-$grey border-opacity-5 rounded-md text-$t4 text-$shade1"
          />
        </form>
      </div>

      {/* user is logged in */}

      {!auth?.isLoggedIn && (
        <Link href="/signin">
          <button className="border-2  border-$accent1 text-$accent1 rounded-md py-2 px-12 text-$t3">
            ログイン
          </button>
        </Link>
      )}
      {/* user is not logged in */}
      {auth?.isLoggedIn && (
        <div className="flex items-center">
          <Image
            src="/header/bell.svg"
            alt="bell icon"
            width="32"
            height="32"
          />
          {!!auth?.user?.img && (
            <Link href="/mypage">
              {/* div to avoid error from Link */}
              <div>
                <UserIcon src={auth.user.img} className="ml-4 cursor-pointer" />
              </div>
            </Link>
          )}
          <button className="flex items-center justify-center border-2  bg-$accent1 text-$white rounded-md ml-4 py-2 px-9 text-$t3">
            <Image src="/pencil.svg" alt="pencil icon" width="20" height="20" />
            <Link href="/signin">
              <p className="ml-2">新規作成</p>
            </Link>
          </button>
        </div>
      )}
    </div>
  )
}

export default Nav
