import Image from "next/image"
import hero from "../assets/hero.jpg"
import vss from "../assets/vss.jpg"


interface FeaturedImageProps {
  reverse?: boolean
}

export function FeaturedImage({reverse = false }: FeaturedImageProps) {
  return (
    <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 py-6 px-16 mb-16`}>
      <div className="w-full md:w-1/2">
        <Image
          src={vss}
          alt={"Alt text"}
          width={600}
          height={600}
          className="rounded-lg object-cover w-full h-[400px]"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold">Title</h2>
        <p className="text-lg text-gray-600">Description</p>
      </div>
    </div>
  )
}
