// dashboard/components/MyComponent.tsx
import React from 'react'
import Image from 'next/image'

export default function MyComponent() {
  return (
    <div>
      <Image
        src="/assets/photo.jpg"
        alt="My photo"
        width={600}
        height={400}
      />
    </div>
  )
}
