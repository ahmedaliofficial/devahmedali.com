import Link from 'next/link'
import type { ComponentProps } from 'react'

/** Element overrides handed to <MDXRemote components={...} />. Typed against the
 *  intrinsic elements they replace so we don't need @types/mdx. */
type MdxComponentMap = {
  [K in 'h2' | 'h3' | 'h4' | 'p' | 'a' | 'ul' | 'ol' | 'li' | 'strong' | 'blockquote' | 'pre' | 'code' | 'hr' | 'table' | 'thead' | 'tbody' | 'tr' | 'th' | 'td']: (props: ComponentProps<K>) => React.ReactElement
}

export const mdxComponents: MdxComponentMap = {
  h2: ({ children, ...props }) => (
    <h2 className="font-heading text-default-900 mt-12 mb-4 text-2xl font-semibold tracking-tight md:text-3xl" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="font-heading text-default-900 mt-8 mb-3 text-xl font-semibold md:text-2xl" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="font-heading text-default-900 mt-6 mb-2 text-lg font-semibold md:text-xl" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p className="text-default-600 my-5 text-base leading-relaxed md:text-lg" {...props}>
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => {
    const url = String(href ?? '')
    const isInternal = url.startsWith('/')

    if (isInternal) {
      return (
        <Link href={url} className="text-default-900 font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-70">
          {children}
        </Link>
      )
    }

    return (
      <a href={url} target="_blank" rel="noreferrer" className="text-default-900 font-medium underline decoration-2 underline-offset-4 transition-opacity hover:opacity-70" {...props}>
        {children}
      </a>
    )
  },
  ul: ({ children, ...props }) => (
    <ul className="text-default-600 my-5 flex list-disc flex-col gap-2 ps-6 text-base md:text-lg" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="text-default-600 my-5 flex list-decimal flex-col gap-2 ps-6 text-base md:text-lg" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  strong: ({ children, ...props }) => (
    <strong className="text-default-900 font-semibold" {...props}>
      {children}
    </strong>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-primary text-default-500 my-6 border-s-2 ps-5 italic" {...props}>
      {children}
    </blockquote>
  ),
  pre: ({ children, ...props }) => (
    <pre className="bg-default-900 my-6 overflow-x-auto rounded-2xl border border-white/10 p-5 font-mono text-sm leading-relaxed text-white/90" {...props}>
      {children}
    </pre>
  ),
  code: ({ children, ...props }) => (
    <code className="bg-default-100 text-default-800 rounded px-1.5 py-0.5 font-mono text-[0.9em] in-[pre]:bg-transparent in-[pre]:p-0 in-[pre]:text-inherit" {...props}>
      {children}
    </code>
  ),
  hr: (props) => <hr className="border-default-200 my-10" {...props} />,
  table: ({ children, ...props }) => (
    <div className="border-default-200 my-6 overflow-x-auto rounded-2xl border">
      <table className="w-full border-collapse text-left text-sm md:text-base" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead className="bg-default-100" {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => (
    <tbody className="divide-default-200 divide-y" {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }) => <tr {...props}>{children}</tr>,
  th: ({ children, ...props }) => (
    <th className="text-default-900 px-4 py-3 font-semibold" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="text-default-600 px-4 py-3 align-top" {...props}>
      {children}
    </td>
  ),
}
