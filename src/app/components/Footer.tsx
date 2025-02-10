import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <footer className="fixed bottom-0 flex h-16 w-full shrink-0 items-center border-t-2 border-gray-100/50 bg-primary px-4 md:px-6 text-sm text-gray-300 justify-start gap-4 dark:bg-gray-950 dark:text-gray-300 dark:border-gray-100/50">
      <div className="container flex items-center justify-start space-y-2">
        <div className="flex items-center space-y-0">
          <img
            src="/placeholder.svg"
            width="24"
            height="24"
            alt="shadcn"
            className="rounded-full overflow-hidden object-cover"
          />
          <p className="ml-2 font-semibold not-italic">The shadcn UI library</p>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="#" className="underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="underline" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="underline" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="underline" prefetch={false}>
            Contact
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Link
            href="#"
            className="rounded-full border border-gray-200 border-gray-200 inline-flex h-6 w-6 items-center justify-center transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            <span className="sr-only">Twitter</span>
            <TwitterIcon className="h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-200 border-gray-200 inline-flex h-6 w-6 items-center justify-center transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            <span className="sr-only">Facebook</span>
            <FacebookIcon className="h-4 w-4" />
          </Link>
          <Link
            href="#"
            className="rounded-full border border-gray-200 border-gray-200 inline-flex h-6 w-6 items-center justify-center transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}