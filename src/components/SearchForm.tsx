import React, { useState, Fragment, useCallback } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Search } from './Search'
import { IoSearch } from 'react-icons/io5'

export const SearchForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  return (
    <>
      <button
        onClick={openModal}
        className="flex w-72 items-center rounded-full px-4 py-3 text-sm shadow  hover:bg-orange-200 hover:shadow-lg hover:duration-500 focus:outline-none dark:border dark:border-zinc-400 dark:hover:bg-zinc-800"
      >
        <IoSearch />
        <span className="ml-2 hidden md:inline">記事を検索</span>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 bg-zinc-800 opacity-50" />

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-20 inline-block w-full max-w-2xl overflow-hidden rounded-2xl bg-orange-50 p-6 text-left align-middle shadow-xl transition-all dark:bg-zinc-900">
                <Search />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
