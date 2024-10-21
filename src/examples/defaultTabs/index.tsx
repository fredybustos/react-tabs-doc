import { Tabs, Tab } from "@fredybustos/react-tabs";
import Code from "../../components/icons/code";
import { useEffect, useRef, useState } from "react";

export default function DefaultTabs  ({ content }: { content: string | TrustedHTML }) {
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
      <Tabs>
        <Tab title='Tab one'>
          <p className='text-black'>
            Content for tab one
          </p>
        </Tab>
        <Tab title='Tab two'>
          <p className='text-black'>
            Content for tab two
          </p>
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
