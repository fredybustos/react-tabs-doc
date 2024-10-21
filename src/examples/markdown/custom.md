---
title: Customs tabs
author: Fredy Bustos
---

```jsx
import { Tabs, Tab } from "@fredybustos/react-tabs";

export default function CustomTabs() {
  return (
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
  )
}
```
