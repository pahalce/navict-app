import React from 'react'

const RoadmapBasicInfo = () => {
  return (
    <div>
      <form className="flex justify-center items-center flex-col max-w-3xl mx-auto my-16 text-$primary">
        <input
          className="text-$t1 text-center w-full py-2"
          type="text"
          placeholder="タイトルを入力"
        />
        <input
          className="border-2 border-$shade2 rounded-md w-full text-$t4 py-2 px-3 my-6"
          type="text"
          placeholder="関連するキーワードを入力してタグを作成　見つけてもらいやすくしよう！"
        />
        <textarea
          className="bg-$shade3 rounded-md w-full text-$t4 py-2 px-3"
          rows={8}
          placeholder="概要を入力"
        />
      </form>
    </div>
  )
}

export default RoadmapBasicInfo
