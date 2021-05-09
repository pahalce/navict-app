import Image from 'next/image'
import { useState } from 'react'
import { LibraryInfo, RecommendedLibraryInfo, StepReqBody } from '$/types/index'
import ButtonSmall from '../button/ButtonSmall'
import StepCard from '../list/StepCard'
import { Menu } from '@headlessui/react'
import BarTop from '../parts/BarTop'
import BarMiddle from '../parts/BarMiddle'
import BarBottom from '../parts/BarBottom'
import RecommendedLibraryCard from '../list/RecommendedLibraryCard'

type LibrarySearchResultProps = {
  libraries: LibraryInfo[]
  keyword: string
  handleClickLibrary: (library: LibraryInfo) => void
  afterSearch: (any: any) => void
  className?: string
}

const LibrarySearchResult = ({
  libraries,
  keyword,
  handleClickLibrary,
  afterSearch,
  className
}: LibrarySearchResultProps) => {
  return (
    <Menu>
      <Menu.Button className={`${className}`}>検索</Menu.Button>
      {keyword.length > 0 && (
        <Menu.Items className="flex flex-col absolute left-0 top-14 w-full rounded-3xl bg-$white shadow-$rich py-4 px-4 text-$t4">
          {libraries.map((library: LibraryInfo) => (
            <Menu.Item
              key={library.id}
              onClick={() => {
                handleClickLibrary(library)
                afterSearch(library)
              }}
            >
              {({ active }) => (
                <div
                  className={`py-2 px-2 rounded-lg text-$primary ${
                    active ? 'bg-$accent1 bg-opacity-10' : ''
                  }`}
                >
                  {library.title}
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

type LibrarySearchProps = {
  recommendations: RecommendedLibraryInfo[]
  onAddLibrary: (
    title: string,
    link: string
  ) => Promise<LibraryInfo | undefined>
  libraries: LibraryInfo[] | undefined
  selectedLibrary: LibraryInfo | null
  onLibrarySelect: (library: LibraryInfo) => void
  onLibraryKeywordChange: (keyword: string) => void
  onAddStep: (step: StepReqBody) => void
  stepsWithLibs: StepWithLibrary[]
  setStepsWithLibs: (stepWithLibrary: StepWithLibrary[]) => void
}

const LibrarySearch = ({
  recommendations,
  libraries,
  onAddLibrary,
  onLibraryKeywordChange,
  onLibrarySelect,
  selectedLibrary,
  onAddStep,
  stepsWithLibs,
  setStepsWithLibs
}: LibrarySearchProps) => {
  const [keyword, setKeyword] = useState('')
  const [linkUrl, setLinkUrl] = useState('')

  const handleAddStep = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!keyword) {
      return
    }
    try {
      let resultLib
      if (!selectedLibrary) {
        resultLib = await onAddLibrary(keyword, linkUrl)
        if (!resultLib) {
          throw Error('failed to connect')
        }
        onLibrarySelect(resultLib)
      } else {
        resultLib = selectedLibrary
      }
      const step: StepReqBody = {
        libraryId: resultLib.id,
        isDone: false,
        memo: null,
        nextStepId: null
      }
      onAddStep(step)
      const currentStepWithLib: StepWithLibrary = {
        ...step,
        library: resultLib
      }
      setStepsWithLibs([...stepsWithLibs, currentStepWithLib])
      setKeyword('')
      setLinkUrl('')
    } catch (error) {
      console.error(error)
    }
  }
  const handleLibraryKeywordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault()
    setKeyword(e.target.value)
    onLibraryKeywordChange(e.target.value)
  }
  const setLibraryInfo = (library: LibraryInfo) => {
    setKeyword(library.title)
    setLinkUrl(library.link || '')
  }
  return (
    <div className="mt-10">
      <div>
        <div className="relative flex mb-4">
          <input
            id="library-title-form"
            className="bg-$shade3 rounded-md text-$t4 px-4 py-2 w-full "
            onChange={handleLibraryKeywordChange}
            type="text"
            value={keyword}
            placeholder="本の名前やサイトの名前を入力してみよう"
          />
          <LibrarySearchResult
            keyword={keyword}
            libraries={libraries || []}
            handleClickLibrary={onLibrarySelect}
            afterSearch={setLibraryInfo}
            className="bg-$accent1 text-$white w-16 p-2 rounded-md text-$t6"
          />
        </div>
        <input
          className="bg-$shade3 rounded-md text-$t4 px-4 py-2 w-full"
          type="text"
          onChange={(e) => {
            e.preventDefault()
            setLinkUrl(e.target.value)
          }}
          value={linkUrl}
          placeholder="https://navict-app.vercel.app/"
        />
      </div>
      <div>
        <div className="py-10">他の人は次にこのステップをやっています</div>
        {!recommendations && <div>loading...</div>}
        {recommendations?.map((r) => (
          <div key={r.id} className="mb-6">
            <RecommendedLibraryCard
              href={r.link || ''}
              percent={parseFloat(r.scorePercent.toFixed(1))}
              src={r.img || ''}
              title={r.title}
            />
          </div>
        ))}
      </div>

      <ButtonSmall
        onClick={handleAddStep}
        disabled={!keyword}
        text={!keyword ? '本やサイトの名前を追加して下さい' : '追加'}
      />
    </div>
  )
}

type StepSectionProps = {
  steps: StepReqBody[]
  onAddStep: (step: StepReqBody) => void
  onDeleteStep: (step: StepReqBody) => void
  onOpenForm: (libraryIds: number[]) => Promise<void>
  recommendations: RecommendedLibraryInfo[]
  onAddLibrary: (
    title: string,
    link: string
  ) => Promise<LibraryInfo | undefined>
  libraries: LibraryInfo[] | undefined
  selectedLibrary: LibraryInfo | null
  onLibrarySelect: (library: LibraryInfo) => void
  onLibraryKeywordChange: (keyword: string) => void
}
type StepWithLibrary = StepReqBody & {
  library: LibraryInfo
}
const StepSection = ({
  steps,
  onAddStep,
  onDeleteStep,
  onOpenForm,
  recommendations,
  libraries,
  onAddLibrary,
  onLibraryKeywordChange,
  onLibrarySelect,
  selectedLibrary
}: StepSectionProps) => {
  const [isFormShown, setIsFormShown] = useState(false)
  const [stepsWithLibs, setStepsWithLibs] = useState<StepWithLibrary[]>(
    [] as StepWithLibrary[]
  )

  const toggleShowForm = () => {
    if (!isFormShown) {
      let libraryIds = stepsWithLibs.map((s) => s.libraryId).slice(-3)
      while (libraryIds.length < 3) {
        libraryIds = [0, ...libraryIds]
      }
      onOpenForm(libraryIds)
    }
    setIsFormShown(!isFormShown)
  }

  const handleDeleteStep = (index: number) => {
    const newArray = stepsWithLibs.filter((s) => s !== stepsWithLibs[index])
    setStepsWithLibs(newArray)
    onDeleteStep(steps[index])
  }

  return (
    <div className="flex flex-col justify-center items-center bg-$tint py-16 text-$primary">
      <BarTop />
      {stepsWithLibs?.map((stepWithLib, index) => (
        <div key={index} className="w-full max-w-3xl">
          <StepCard
            href={stepWithLib.library.link || ''}
            src={stepWithLib.library.img || ''}
            memo={''}
            title={stepWithLib.library.title}
            canDelete
            onDeleteClick={() => handleDeleteStep(index)}
          />
          {stepsWithLibs.length - 1 !== index && <BarMiddle />}
        </div>
      ))}
      {steps.length === 0 && (
        <div className="bg-$white text-$t2 text-center rounded-3xl text-$primary shadow-$rich w-full max-w-3xl py-14 px-10">
          <div onClick={toggleShowForm} className="cursor-pointer">
            最初のステップを決めてみよう{' '}
            <Image
              src={isFormShown ? '/minus.svg' : '/plus.svg'}
              width="20"
              height="20"
              layout="fixed"
            />
          </div>
          {isFormShown && (
            <LibrarySearch
              recommendations={recommendations}
              libraries={libraries?.slice(0, 5)}
              onAddLibrary={onAddLibrary}
              onLibraryKeywordChange={onLibraryKeywordChange}
              onLibrarySelect={onLibrarySelect}
              selectedLibrary={selectedLibrary}
              onAddStep={onAddStep}
              stepsWithLibs={stepsWithLibs}
              setStepsWithLibs={(stepsWithLibs: StepWithLibrary[]) =>
                setStepsWithLibs(stepsWithLibs)
              }
            />
          )}
        </div>
      )}
      <BarBottom />

      {steps.length > 0 && (
        <div className="bg-$white text-$t2 text-center rounded-3xl text-$primary shadow-$rich w-full max-w-3xl py-14 px-10 mt-20">
          <div onClick={toggleShowForm} className="cursor-pointer">
            次のステップを決めてみよう{' '}
            <Image
              src={isFormShown ? '/minus.svg' : '/plus.svg'}
              width="20"
              height="20"
              layout="fixed"
            />
          </div>
          {isFormShown && (
            <LibrarySearch
              libraries={libraries?.slice(0, 5)}
              onAddLibrary={onAddLibrary}
              onLibraryKeywordChange={onLibraryKeywordChange}
              onLibrarySelect={onLibrarySelect}
              selectedLibrary={selectedLibrary}
              recommendations={recommendations}
              onAddStep={onAddStep}
              stepsWithLibs={stepsWithLibs}
              setStepsWithLibs={(stepsWithLibs: StepWithLibrary[]) =>
                setStepsWithLibs(stepsWithLibs)
              }
            />
          )}
        </div>
      )}
    </div>
  )
}

export default StepSection
