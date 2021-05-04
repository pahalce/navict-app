import Image from 'next/image'
import Link from 'next/link'
const Nav = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex">
        <p className="mr-8 font-josefin font-medium text-3.5xl">navict</p>

        <form className="flex items-center relative w-1/2">
          <div className="flex items-center absolute top-50 left-4 text-$ cursor-text">
            <Image src="/search.svg" width="20" height="20" />
          </div>
          <input
            type="text"
            placeholder="ロードマップを検索"
            className="py-1 pl-12 border-2 border-$grey border-opacity-5 rounded-md text-$t4 text-$shade1"
          />
        </form>
      </div>

      <Link href="/signin">
        <button className="border-2  border-$accent1 text-$accent1 rounded-md py-1.5 px-12 text-$t3">
          ログイン
        </button>
      </Link>
    </div>
  )
}

export default Nav
