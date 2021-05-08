import { Tag } from '$prisma/client'
import React, { useState } from 'react'
import TagChip from '../parts/TagChip'
import { Menu } from '@headlessui/react'
import ButtonSmall from '../button/ButtonSmall'

type TagsSearchResultProps = {
  tags: Tag[]
  keyword: string
  handleClickTag: (tag: Tag) => void
  className?: string
}

const TagSearchResult = ({
  tags,
  keyword,
  handleClickTag,
  className
}: TagsSearchResultProps) => {
  return (
    <Menu>
      <Menu.Button className={`${className}`} as="div">
        <ButtonSmall
          text={'候補を表示'}
          onClick={(e) => {
            e.preventDefault()
          }}
          className="text-$t5 px-2 w-$max-content"
        />
      </Menu.Button>
      {keyword.length > 0 && (
        <Menu.Items className="flex flex-col absolute left-0 top-14 w-full rounded-3xl bg-$white shadow-$rich py-4 px-4 text-$t4">
          {tags.map((tag) => (
            <Menu.Item key={tag.id} onClick={() => handleClickTag(tag)}>
              {({ active }) => (
                <div
                  className={`py-2 px-2 rounded-lg text-$primary ${
                    active ? 'bg-$accent1 bg-opacity-10' : ''
                  }`}
                >
                  {tag.name}
                </div>
              )}
            </Menu.Item>
          ))}
          <Menu.Item key="add-new">
            {({ active }) => (
              <div
                className={`py-2 px-2 rounded-lg text-$primary ${
                  active ? 'bg-$accent1 bg-opacity-10' : ''
                }`}
              >
                {keyword}を追加する
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      )}
    </Menu>
  )
}

type Props = {
  tags: Tag[] | undefined
  selectedTags: Tag[] | undefined
  onTagSelect: (tag: Tag) => void
  onCloseSelectedTag: (tag: Tag) => void
  onTagKeywordChange: (keyword: string) => void
}

const RoadmapBasicInfo = ({
  tags = [],
  selectedTags = [],
  onTagSelect,
  onCloseSelectedTag,
  onTagKeywordChange
}: Props) => {
  const [keyword, setKeyword] = useState('')

  const handleTagKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
    onTagKeywordChange(e.target.value)
  }

  const getFilteredTags = (taglist: Tag[]) => {
    return taglist.filter((tag) => {
      return !selectedTags.find((selectedTag) => {
        return selectedTag.id == tag.id
      })
    })
  }

  return (
    <div>
      <form className="flex justify-center items-center flex-col max-w-3xl mx-auto my-16 text-$primary">
        <input
          className="text-$t1 text-center w-full py-2"
          type="text"
          placeholder="タイトルを入力"
        />
        {/* search tags */}
        <div className="flex relative border-2 border-$shade2 rounded-md w-full text-$t4 my-6">
          {/* selected tag list */}
          {selectedTags.map((selectedTag) => (
            <TagChip
              key={selectedTag.id}
              onCrossClick={() => {
                onCloseSelectedTag(selectedTag)
              }}
              text={selectedTag.name}
            />
          ))}
          <input
            className="w-full py-2 px-3"
            onChange={handleTagKeywordChange}
            type="text"
            placeholder="関連するキーワードを入力してタグを作成　見つけてもらいやすくしよう！"
          />
          <TagSearchResult
            tags={getFilteredTags(tags)}
            keyword={keyword}
            handleClickTag={onTagSelect}
          />
        </div>
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
