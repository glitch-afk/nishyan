import { Icon } from "./ui/icons";

const Header = () => {
  return (
    <div className="sticky top-0 z-40 flex shrink-0 border-b border-b-[#D9D9D9] bg-white px-8 py-3 w-full justify-between items-center">
      {/* left part */}
      <div className="flex space-x-4 items-center">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-white xl:hidden"
        // onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Icon name="products" size="md" className="text-night" />
        </button>
        <h3 className="text-[15px] text-night">Payments</h3>
        <span className="xl:flex items-center space-x-[6px] text-night-muted hidden">
          <Icon name="questionMark" size="xs" />
          <span className="text-[12px]">How it works</span>
        </span>
      </div>

      {/* center search */}
      <div className="hidden xl:flex w-full max-w-[400px] items-center space-x-2 rounded-md bg-lightGray px-4">
        <Icon name="search" className="text-[#808080]" />
        <input
          type="search"
          placeholder="Search features, tutorials, etc."
          className="w-full border-none bg-transparent text-[15px] text-night placeholder:text-[#808080] focus-visible:ring-0"
        />
      </div>

      {/* right part */}
      <div className="flex items-center space-x-3">
        <div className="flex xl:hidden h-10 w-10 items-center justify-center rounded-full bg-mediumGray">
          <Icon name="search" size="md" />
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mediumGray">
          <Icon name="messages" size="md" />
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mediumGray">
          <Icon name="chevronDownFilled" className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
};

export default Header;
