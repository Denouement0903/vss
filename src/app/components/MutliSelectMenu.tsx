import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

export default function MultiSelectMenu() {
  return (
    <div className="w-full max-w-md">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            <span>Subjects</span>
            <ChevronsUpDownIcon className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full p-4 space-y-2">
          <div className="grid gap-2">
            <DropdownMenuCheckboxItem>Maths Lit</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Life Sciences</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>CAT</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Histoy</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Tourism</DropdownMenuCheckboxItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

function ChevronsUpDownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m7 15 5 5 5-5" />
      <path d="m7 9 5-5 5 5" />
    </svg>
  )
}