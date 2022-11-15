/* This example requires Tailwind CSS v3.0+ */
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Task', href: '/TaskApp' },
  { name: '.', href: '#' },
  { name: '..', href: '#' },
  { name: '...', href: '#' },
]

const features = [
  {
    name: 'Problem Solving in Information Technology',
    description:
      'Problem solving strategies and concepts; algorithmic thinking; flowchart; concepts and introduction to computer programming.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Web Technology',
    description:
      'Components and basic concepts of a web system; how a web system works; introduction to client-side web technologies i.e. HTML, CSS, JavaScript and DOM; technologies for creating server-side dynamic web pages; tools for web design and development; common Internet and web services e.g. search engines, video streaming services, map and location services.',
    icon: ScaleIcon,
  },
  {
    name: 'Data Structures and Algorithms',
    description:
      'Data types; data structures and abstract data types; basic data structures e.g. list, stack, and queue; dynamic data structures; terminology of trees; binary trees; binary search trees; AVL trees; graph; time and space analysis of programs; sorting and searching algorithms; greedy algorithm; divide and conquer algorithm; graph algorithms; and dynamic programming.',
    icon: BoltIcon,
  },
  {
    name: 'OBJECT-ORIENTED PROGRAMMING',
    description:
      'Object-oriented program design and development; encapsulation; classes and objects; methods and message passing; inheritance and polymorphism; graphical user interface development and event handling; data structures: arrays and collections; exception handling; input/output classes; threads.',
    icon: DevicePhoneMobileIcon,
  },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="isolate bg-slate-900">
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="/#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-200"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-slate-50 hover:text-slate-50">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
              <a
                href="/#"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-slate-50 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-slate-800"
              >
                ....
              </a>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-slate-900 px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="/#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      className="h-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-slate-50 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="/#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-slate-50 hover:bg-gray-400/10"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-slate-800">
                  <span className="text-slate-300">
                    https://github.com/ThiraOof/ThiraOof{' '}
                    <a href="https://github.com/ThiraOof/ThiraOof" className="font-semibold text-indigo-600">
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl text-white">
                  Thiraphop Phokied Oof
                </h1>
                {/* Feature Sections */}
                <div className="bg-slate-900 py-24 sm:py-32 lg:py-40">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="sm:text-center">
                      <h2 className="text-lg font-semibold leading-8 text-indigo-600">Best Skill</h2>
                    </div>

                    <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
                      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
                        {features.map((feature) => (
                          <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                              <feature.icon className="h-8 w-8" aria-hidden="true" />
                            </div>
                            <div className="sm:min-w-0 sm:flex-1">
                              <p className="text-lg font-semibold leading-8 text-slate-50">{feature.name}</p>
                              <p className="mt-2 text-base leading-7 text-slate-300">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex gap-x-4 sm:justify-center">
                  <a
                    href="/#"
                    className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                  >
                    Get started
                    <span className="text-indigo-200" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                  <a
                    href="/#"
                    className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-slate-50 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-slate-800"
                  >
                    Live demo
                    <span className="text-gray-400" aria-hidden="true">
                      &rarr;
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
