import { UseFormSetValue } from 'react-hook-form'
import RecommendedLibraryCard from '~/components/list/RecommendedLibraryCard'
import { RecommendedLibraryInfo } from '~/server/types'
import type { LibraryForm } from '$components/roadmaps/step/StepForm'
import { SelectOption } from '~/components/parts/SelectInput'

type Props = {
  recLibs: RecommendedLibraryInfo[]
  setValue: UseFormSetValue<LibraryForm>
}

const RecommendedLibrarySection = ({ recLibs, setValue }: Props) => {
  const handleClick = (lib: RecommendedLibraryInfo) => {
    setValue('link', lib.link)
    setValue('titleSelect', {
      index: lib.id,
      value: lib.title,
      label: lib.title
    } as SelectOption)
  }

  return (
    <div className="bg-$tint w-full">
      <p className="text-$t2 text-left">
        他の人は次にこのステップをやっています
      </p>
      <div className="flex justify-evenly w-full my-8 cursor-pointer">
        {recLibs.map((recLib) => (
          <div
            onClick={() => handleClick(recLib)}
            key={recLib.id}
            className="w-1/3 mx-2"
          >
            <RecommendedLibraryCard
              href={recLib.link || ''}
              src={recLib.img || ''}
              title={recLib.title}
              maxTitleLength={5}
              maxLinkLength={18}
              percent={Number(recLib.scorePercent.toFixed(2))}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendedLibrarySection
