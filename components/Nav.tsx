import Image from 'next/image'
const Nav = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex">
        <p className="font-$t1">navict</p>

        <form className="flex items-center relative ml-8">
          <div className="flex items-center absolute top-50 left-2 translate-y-1/2 text-$grey hover:text-$blue">
            <Image src="/search.svg" width="20" height="20" />
          </div>
          <input
            type="text"
            placeholder="ロードマップを検索"
            className="py-1 pl-10"
          />
        </form>
      </div>
      <button className="border border-$blue text-$blue rounded-md py-1 px-10 hover:bg-$blue">
        ログイン
      </button>
    </div>
  )
}

export default Nav
