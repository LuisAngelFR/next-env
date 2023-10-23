# Next.js Runtime Environment Variables

## Getting Started

### Install

```bash
npm i @devlu/nextenv
```

Add the following to your `app/layoyt.tsx` file:
```tsx
// app/layout.tsx
import { EnvProvider } from 'next-env-runtime'

export default dynamic = 'force-dynamic' // <-- this is required

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <PublicEnvProvider>
          {children}
        </PublicEnvProvider>
      </body>
    </html>
  )
}
```

## Usage

### For Server-Side 

```tsx
import { useEnv } from 'next-env-runtime'

export default function Home() {
  const env = useEnv()
  return (
    <div>
      <h1>{env.MY_ENV_VAR}</h1>
    </div>
  )
}
```

### For Client-Side

Only variables that start with `ENV_PUBLIC_` are available on the client side.

```tsx
'use client'

import { useClientEnv } from 'next-env-runtime'

export default function Home() {
  const env = useClientEnv()
  return (
    <div>
      <h1>{env.MY_ENV_VAR}</h1>
    </div>
  )
}
```