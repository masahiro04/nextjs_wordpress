import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { PAGES } from '../../lib/constants';
import { SearchInput } from '../common/searchInput';

export const Header: React.FC = () => {
  return (
    <div className='px-6 mx-auto sm:px-10 sm:max-w-screen-md lg:max-w-screen-lg'>
      <Popover className='relative bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='flex justify-between items-center py-3 md:justify-start md:space-x-10'>
            <div className=''>
              <Link href='/'>
                <h3 className='text-2xl'>
                  <Link href='/'>
                    <a href='/' className='text-indigo-700 font-bold'>
                      Masahiro&apos;s tech note
                    </a>
                  </Link>
                </h3>
              </Link>
            </div>
            <div className='-mr-2 -my-2 md:hidden'>
              <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                <span className='sr-only'>Open menu</span>
                <MenuIcon className='h-6 w-6' aria-hidden='true' />
              </Popover.Button>
            </div>
            <Popover.Group as='nav' className='hidden md:flex space-x-10'>
              {PAGES.map((page) => (
                <Link href={`/${page.url}`} key={page.url.toString()}>
                  <a
                    key={page.url.toString()}
                    href='#'
                    className='text-base font-medium text-gray-500 hover:text-gray-900'
                  >
                    {page.title}
                  </a>
                </Link>
              ))}
            </Popover.Group>
            <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
              <div className='flex'>
                <div className='my-auto'>
                  <SearchInput />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel focus className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
            <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
              <div className='pt-5 pb-6 px-5'>
                <div className='flex items-center justify-between'>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-8'>
                    {PAGES.map((page) => (
                      <Link href={`/${page.url}`} key={page.url.toString()}>
                        <a
                          key={page.url.toString()}
                          href='#'
                          className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                        >
                          <span className='ml-3 text-base font-medium text-gray-900'>{page.title}</span>
                        </a>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};
