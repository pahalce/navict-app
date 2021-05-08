import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '~/contexts/AuthContext'
import UserIcon from '../UserIcon'
import { Menu } from '@headlessui/react'
import { useRouter } from 'next/router'

const UserIconMenu = () => {
  const auth = useAuth()
  const router = useRouter()
  const logout = async () => {
    try {
      await auth?.logout()
      router.reload()
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="relative">
      <Menu>
        <Menu.Button className="ml-4 cursor-pointer">
          <UserIcon src={auth?.user?.img || ''} />
        </Menu.Button>
        <Menu.Items className="flex flex-col absolute left-0 top-14 w-60 rounded-3xl bg-$white shadow-$rich py-4 px-4 text-$t4">
          <Menu.Item>
            {({ active }) => (
              <div
                className={`py-2 px-2 rounded-lg text-$primary ${
                  active ? 'bg-$accent1 bg-opacity-10' : ''
                }`}
              >
                <Link href="/mypage">
                  <a className="w-36">個人ページへ</a>
                </Link>
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                onClick={logout}
                className={`py-2 px-2 rounded-lg text-$primary ${
                  active ? 'bg-$accent1 bg-opacity-10' : ''
                }`}
              >
                ログアウト
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  )
}

const Nav = () => {
  const auth = useAuth()
  return (
    <div className="flex justify-between items-center px-10 mx-auto py-10">
      <div className="flex py-1">
        <div className={`mr-4 cursor-pointer`}>
          <Link href="/">
            <a>
              <Image src={`/logo.svg`} width={129} height={35.27} />
            </a>
          </Link>
        </div>

        <form className="flex items-center relative w-1/2" action={`/search`}>
          <div className="flex items-center absolute top-50 left-4 text-$ cursor-text">
            <Image src="/header/search.svg" width="20" height="20" />
          </div>
          <input
            type="text"
            name="keyword"
            placeholder="ロードマップを検索"
            className="py-1 pl-12 border-2 border-$grey border-opacity-5 rounded-md text-$t4 text-$shade1"
          />
        </form>
      </div>

      {/* user is not logged in */}
      {!auth?.isLoggedIn && (
        <button className="border-2  border-$accent1 text-$accent1 rounded-md py-2 px-12 text-$t3">
          <Link href="/signin">
            <a>ログイン</a>
          </Link>
        </button>
      )}
      {/* user is logged in */}
      {auth?.isLoggedIn && (
        <div className="flex items-center">
          <Image
            src="/header/bell.svg"
            alt="bell icon"
            width="32"
            height="32"
            layout="fixed"
          />
          {!!auth?.user?.img && <UserIconMenu />}
          <button className="flex items-center justify-center border-2  bg-$accent1 text-$white rounded-md ml-4 py-2 px-9 text-$t3">
            <Image src="/pencil.svg" alt="pencil icon" width="20" height="20" />
            <Link href="#">
              <a className="ml-2">新規作成</a>
            </Link>
          </button>
        </div>
      )}
    </div>
  )
}

export default Nav
