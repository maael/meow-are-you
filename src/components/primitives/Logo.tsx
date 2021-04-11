import Image from 'next/image'

export default function Logo() {
  return (
    <div className="sm:w-40 w-20">
      <div className="relative aspect-w-16 aspect-h-16">
        <Image src="/images/cat-face.png" layout="fill" />
      </div>
    </div>
  )
}
