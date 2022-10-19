import React, { FC, ReactNode } from 'react'
import { Menu } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Props = {
  href: string
  children: ReactNode
}
export const DropdownMenuItem: FC<Props> = ({ href, children }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href={href}
          className={classNames(
            active ? 'bg-orange-200 dark:bg-zinc-700' : '',
            'block px-4 py-2 text-sm'
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  )
}
