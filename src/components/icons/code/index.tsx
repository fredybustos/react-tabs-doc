type CodeProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: number | string
}

export default function Code({ size = 24, ...props }: CodeProps) {
  return (
    <button className="border-0" {...props}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 8l-4 4l4 4" />
        <path d="M17 8l4 4l-4 4" />
        <path d="M14 4l-4 16" />
      </svg>
    </button>
  )
}
