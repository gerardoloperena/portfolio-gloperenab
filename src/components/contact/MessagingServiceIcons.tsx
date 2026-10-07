import type { SVGProps } from 'react'

export function LineIcon(properties: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...properties}
    >
      <path d="M4.25 5.25h15.5v10.5H11l-4.75 3.2v-3.2h-2z" />
      <path d="M8 9.15h8" />
      <path d="M8 12.15h5.75" />
    </svg>
  )
}

export function WeChatIcon(properties: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...properties}
    >
      <path d="M14.2 5.15a7.4 7.4 0 0 0-4.35-1.4C6.07 3.75 3 6.3 3 9.45a5.35 5.35 0 0 0 2.15 4.2l-.65 2.6 2.85-1.45c.8.25 1.65.4 2.5.4" />
      <path d="M21 14.25c0 3.05-2.85 5.5-6.35 5.5-.8 0-1.6-.13-2.3-.38L9.8 20.65l.58-2.3a5 5 0 0 1-2.08-4.1c0-3.05 2.85-5.5 6.35-5.5S21 11.2 21 14.25Z" />
      <circle cx="7.25" cy="8.75" r="0.65" fill="currentColor" stroke="none" />
      <circle cx="11.7" cy="8.75" r="0.65" fill="currentColor" stroke="none" />
      <circle cx="12.65" cy="13.65" r="0.65" fill="currentColor" stroke="none" />
      <circle cx="16.65" cy="13.65" r="0.65" fill="currentColor" stroke="none" />
    </svg>
  )
}
