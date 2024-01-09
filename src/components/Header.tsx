import { Icon } from './ui/icons'

const Header = () => {
  return (
    <div className="sticky top-0 z-40 flex w-full shrink-0 items-center justify-between border-b border-b-[#D9D9D9] bg-white px-8 py-3">
      {/* left part */}
      <div className="-m-2.5 flex items-center space-x-4">
        <button type="button" className="p-2.5 text-white xl:hidden">
          <span className="sr-only">Open sidebar</span>
          <Icon name="hamburger" size="md" className="text-night" />
        </button>
        <h3 className="text-[15px] text-night ">Payments</h3>
        <span className="hidden items-center space-x-[6px] text-night-muted xl:flex">
          <Icon name="questionMark" size="xs" />
          <span className="text-[12px]">How it works</span>
        </span>
      </div>

      {/* center search */}
      <div className="hidden w-full max-w-[400px] items-center space-x-2 rounded-md bg-lightGray px-4 xl:flex">
        <Icon name="search" className="text-[#808080]" />
        <input
          type="search"
          placeholder="Search features, tutorials, etc."
          className="w-full border-none bg-transparent text-[15px] text-night placeholder:text-[#808080] focus-visible:ring-0"
        />
      </div>

      {/* right part */}
      <div className="flex items-center space-x-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mediumGray xl:hidden">
          <Icon name="search" size="md" />
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mediumGray">
          <Icon name="messages" size="md" />
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mediumGray">
          <Icon name="chevronDownFilled" className="h-12 w-12" />
        </div>
      </div>
    </div>
  )
}

export default Header
