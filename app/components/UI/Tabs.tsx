"use client"
import { Tab } from '@headlessui/react';


function Tabs() {
  return (
    <Tab.Group>
      <Tab.List className="tabs tabs-boxed" >
        <Tab className="tab">Tab 1</Tab>
        <Tab className="tab">Tab 2</Tab>
        <Tab className="tab">Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">Content 1</Tab.Panel>
        <Tab.Panel className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">Content 2</Tab.Panel>
        <Tab.Panel className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Tabs