import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-$indigo w-full h-40 flex flex-col justify-end text-center py-8">
      <div className={`mb-1`}>
        <Image src={`/logo-footer.svg`} width={98} height={23.04} />
      </div>
      <p className={`text-$T6 text-$shade3`}>
        {`created by `}
        <span>
          <Link
            href={`https://www.notion.so/navict-fe2a78c96d2a42d9ac872dfe37cffc82`}
          >
            <a target="_blank">papaya_baby</a>
          </Link>
        </span>
      </p>
    </div>
  )
}

export default Footer
