import { cn } from '#utils/misc'
import { Icon, IconName } from './ui/icons'

const navLinks: {
  icon: IconName
  href: string
  current: boolean
  name: string
}[] = [
  {
    icon: 'home',
    href: '#',
    current: false,
    name: 'Home',
  },
  {
    icon: 'orders',
    href: '#',
    current: false,
    name: 'Orders',
  },
  {
    icon: 'products',
    href: '#',
    current: false,
    name: 'Products',
  },
  {
    icon: 'delivery',
    href: '#',
    current: false,
    name: 'Delivery',
  },
  {
    icon: 'marketing',
    href: '#',
    current: false,
    name: 'Marketing',
  },
  {
    icon: 'analytics',
    href: '#',
    current: false,
    name: 'Analytics',
  },
  {
    icon: 'payments',
    href: '#',
    current: true,
    name: 'Payments',
  },
  {
    icon: 'tools',
    href: '#',
    current: false,
    name: 'Tools',
  },
  {
    icon: 'discounts',
    href: '#',
    current: false,
    name: 'Discounts',
  },
  {
    icon: 'audience',
    href: '#',
    current: false,
    name: 'Audience',
  },
  {
    icon: 'appearance',
    href: '#',
    current: false,
    name: 'Appearence',
  },
  {
    icon: 'plugins',
    href: '#',
    current: false,
    name: 'Plugins',
  },
]

const NavLinks = () => {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="flex flex-1 flex-col space-y-1">
        {navLinks.map((item, idx) => (
          <li
            key={idx}
            className={cn(
              'flex w-full justify-start space-x-3 rounded-[4px] px-4 py-2',
              {
                'bg-[rgba(255,255,255,0.10)] text-white': item.current,
              },
            )}
          >
            <Icon name={item.icon} size="md" className="text-white" />
            <span
              className={cn('text-white/80', { 'text-white': item.current })}
            >
              {item.name}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex w-full items-center space-x-3 rounded-[4px] bg-[#353C53] px-3 py-[6px]">
        <span className="rounded-[4px] bg-[#4a5065] p-[6px]">
          <Icon name="wallet" size="lg" />
        </span>

        <div className="flex flex-col leading-tight">
          <span className="text-[13px]">Available credits</span>
          <h4 className="font-medium text-white">222.10</h4>
        </div>
      </div>
    </nav>
  )
}

export default NavLinks
