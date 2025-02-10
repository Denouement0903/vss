import Link from "next/link"
import Image from "next/image"
import news1 from "../assets/News/news.png"
import news2 from "../assets/News/wcede.jpg"
import news3 from "../assets/News/u15.jpg"
import arrow from "../assets/arrow.png"

export default function News() {
  return (
      <>
    <section className="mt-20 py-4 md:py-8 lg:py-12">
      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NewsCard title="Father and Son BBQ" text="Please support our Tourism department. Tickets available at school." image={news1} alt="Father son fun day" />
        <NewsCard title="Grade 12 help | WCEDE" text="❓ Are you in Gr. 12? Needing help with revision for the upcoming exam?
👉The WCED Subject teams have collated all the subject content you need to prepare for the exams. Follow the link below for all the revision summaries you need:. Tickets available at school." image={news2} alt="WCEDE grade 12" />
        <NewsCard title="U15 Soccer boys" text="Well done our u15 soccer players at the Build it Tournament. We won both games." image={news3} alt="u15 Soccer boys" />
      </div>
      <h1 className="text-5xl text-center text-primary mx-auto pt-8 pb-1 font-bold">Let&apos;s Explore</h1>
        {/* <Image
              src={arrow}
              alt="arrow"
              width={100}
              height={100}
              className="mx-auto h-16 w-16 object-cover animate-bounce"
            /> */}
    </section>
      </>
  )
}

type NewsCardProps = {
  title: string;
  text: string;
  image: any;
  alt: string;
}

function NewsCard({ title, text, image, alt }: NewsCardProps) {
  return (
    <>
      <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg dark:bg-gray-950">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">View article</span>
        </Link>
        <Image
          src={image}
          alt={alt}
          width={600}
          height={600}
          className="h-48 w-full object-cover transition-all group-hover:scale-105"
        />
        <div className="p-6">
          <h3 className="mb-2 text-lg font-semibold text-primary transition-colors dark:text-gray-50">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {text}
          </p>
        </div>
      </div>
    </>
  )
}