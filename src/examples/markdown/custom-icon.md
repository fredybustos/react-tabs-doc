---
title: Customs icon tabs
author: Fredy Bustos
---

```jsx
import { Tabs, Tab, TabProps } from "@fredybustos/react-tabs";

export default function CustomIconTabs() {

  const onSelected = ({ index, element }: {
    index: number;
    element: Partial<TabProps>
  }) => {
    console.log({ index, element })
  }

  return (
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
  )
}
```
