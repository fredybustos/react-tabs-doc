import { Tab, Tabs } from "@fredybustos/react-tabs";
import { useEffect, useRef, useState } from "react";
import Code from "../../components/icons/code";

export default function CustomTabs({ content }: { content: string | TrustedHTML }) {
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

  return (
    <div className='relative mb-3'>
      <Tabs
        className="mt-4 p-4 bg-indigo-600 text-white rounded-md border border-indigo-600/20"
        activeStyles={{
          className: 'bg-indigo-600 text-white'
        }}
      >
        <Tab title='Tab one' className="bg-slate-700/50">
          Content for tab one
        </Tab>
        <Tab title='Tab two' className="bg-slate-700/50">
          Content for tab two
        </Tab>
      </Tabs>
      <Code
        size={28}
        className='absolute right-1 top-2'
        onClick={() => toggleOpen()}
      />
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: `${contentHeight}px` }}
      >
        <div
          className='max-w-full prose dark:prose-invert mt-4'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  )
}
