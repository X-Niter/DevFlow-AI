// src/components/GitHubUserPanel.tsx
import React from 'react'
import Image from 'next/image'

export function GitHubUserPanel({ avatarUrl, username }: { avatarUrl: string; username: string }) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={avatarUrl}
        alt={`${username}'s avatar`}
        width={40}
        height={40}
        className="rounded-full"
      />
      <span>{username}</span>
    </div>
  )
}
