import NavLinks from './NavLinks'
import { Icon } from './ui/icons'

const Sidebar = () => {
  return (
    <div className="hidden w-full max-w-[224px] xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:flex-col">
      <div className="flex grow flex-col overflow-y-auto bg-nav px-[10px] py-4 text-white/80">
        <div className="mb-[26.5px] flex shrink-0 items-center space-x-3 px-[8.5px]">
          <img
            className="h-[39px] w-[39px] rounded-[4px]"
            src="/logo.png"
            alt="logo"
          />
          <div className="flex w-full flex-col items-start justify-center">
            <h3 className="text-[15px] font-medium text-white">Nishyan</h3>
            <a href="#" className="text-[13px] underline">
              Visit store
            </a>
          </div>
          <Icon name="chevronDown" size="md" className="h-5 w-5 shrink-0" />
        </div>
        <NavLinks />
      </div>
    </div>
  )
}

export default Sidebar
