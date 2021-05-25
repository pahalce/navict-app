import Link from 'next/link'
import { shortenText } from '~/utils/utility'
import Trash from '../parts/Trash'

type StepCardProps = {
  src: string
  title: string
  href: string
  memo: string
  canDelete?: boolean
  onDeleteClick?: () => void
}
const StepCard = ({
  src,
  title,
  href,
  memo,
  canDelete = false,
  onDeleteClick
}: StepCardProps) => {
  return (
    <div className="flex bg-$white rounded-3xl shadow-$rich px-8 py-9">
      <div
        className={`flex items-center justify-center w-28 h-36 rounded-2xl overflow-hidden mr-8`}
        style={{ minWidth: '112px' }}
      >
        <img
          className={`object-cover h-full w-full`}
          src={src || '/no-source.png'}
        />
      </div>

      <div>
        <div className={`flex mb-1`}>
          <p className="text-$t2 text-$primary mr-8 overflow-ellipsis whitespace-nowrap overflow-hidden">
            {title}
          </p>
          {canDelete ? <Trash onClick={onDeleteClick} /> : <></>}
        </div>
        <div>
          <Link href={href}>
            <a target={`_blank`}>
              <p className={`text-$T6 text-$indigo`}>
                {shortenText(decodeURI(href), 40)}
              </p>
            </a>
          </Link>
        </div>
        <p className={`text-$t5 text-$shade1`}>{memo}</p>
      </div>
    </div>
  )
}

export default StepCard
