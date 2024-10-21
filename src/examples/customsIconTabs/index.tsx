import { Tab, Tabs } from "@fredybustos/react-tabs";
import type { TabProps } from "@fredybustos/react-tabs";
import { useEffect, useRef, useState } from "react";
import Code from "../../components/icons/code";
import Users from "../../components/icons/user";
import Message from "../../components/icons/message";

export default function CustomIconTabs({ content }: { content: string | TrustedHTML }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (open && contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [open]);

  const toggleOpen = () => setOpen(!open);

  const onSelected = ({ index, element }: {
    index: number;
    element: Partial<TabProps>
  }) => {
    console.log({ index, element })
  }

  return (
    <div className='relative mb-3'>
      <Tabs
        onSelect={onSelected}
        className="mt-4 p-4 bg-indigo-600 rounded-md border border-indigo-600/20 text-white"
        activeStyles={{
          className: 'bg-indigo-600 text-white'
        }}
      >
        <Tab
          className="bg-slate-700/50"
          icon={<Users />}
          title='Users'
        >
          Content for tab one
        </Tab>
        <Tab
          disabled
          className="bg-slate-700/50"
          icon={<Message />}
          title='Messages'
        >
          Disabled by default
        </Tab>
        <Tab
          rightIcon
          className="bg-slate-700/50"
          icon={<Code />}
          title='Code'
        >
          Content for tab three
        </Tab>
      </Tabs>
      <Code
        size={28}
        className='absolute right-1 top-2'
        onClick={() => toggleOpen()}
      />
      <div
        ref={contentRef}
        style={{ maxHeight: `${contentHeight}px` }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div
          className='max-w-full prose dark:prose-invert mt-4'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}
