const SearchRoadmap = () => {
  return (
    <div className="px-40 mx-auto">
      <h2 className="text-$t1 text-$primary mb-4">
        ロードマップを見つける
        <span className="text-$t5"> 気になるワードで検索してみよう</span>
      </h2>
      <form action={`/search`}>
        <input
          type="text"
          name="keyword"
          placeholder="Javascript"
          className="w-full py-4 px-5 rounded-md text-$t4 text-$primary placeholder-$shade1 border-$shade2 border-4"
        />
      </form>
    </div>
  )
}

export default SearchRoadmap
