import { Icon } from '@iconify/react'
import Link from 'next/link'

type PaginationProps = {
  currentPage: number
  pageCount: number
  /** "/blog" or "/blog/tag/rag". Page 1 is the base path itself, so each page has one canonical URL. */
  basePath: string
}

export const pageHref = (basePath: string, page: number): string => (page === 1 ? basePath : `${basePath}/page/${page}`)

const linkClasses = 'border-default-200 text-default-600 hover:border-default-400 hover:text-default-900 inline-flex h-10 min-w-10 items-center justify-center gap-1.5 rounded-full border bg-white px-3.5 text-sm font-medium transition-colors'
const activeClasses = 'border-default-900 bg-default-900 inline-flex h-10 min-w-10 items-center justify-center rounded-full border px-3.5 text-sm font-medium text-white'
const mutedClasses = 'border-default-200 text-default-300 inline-flex h-10 min-w-10 items-center justify-center gap-1.5 rounded-full border bg-white px-3.5 text-sm font-medium'

const Pagination = ({ currentPage, pageCount, basePath }: PaginationProps) => {
  if (pageCount <= 1) return null

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1)

  return (
    <nav aria-label="Pagination" className="mt-12 flex flex-wrap items-center justify-center gap-2">
      {currentPage > 1 ? (
        <Link href={pageHref(basePath, currentPage - 1)} rel="prev" className={linkClasses}>
          <Icon icon="lucide:arrow-left" className="size-4" />
          Previous
        </Link>
      ) : (
        <span className={mutedClasses} aria-hidden="true">
          <Icon icon="lucide:arrow-left" className="size-4" />
          Previous
        </span>
      )}

      {pages.map((page) =>
        page === currentPage ? (
          <span key={page} className={activeClasses} aria-current="page">
            {page}
          </span>
        ) : (
          <Link key={page} href={pageHref(basePath, page)} className={linkClasses} aria-label={`Page ${page}`}>
            {page}
          </Link>
        ),
      )}

      {currentPage < pageCount ? (
        <Link href={pageHref(basePath, currentPage + 1)} rel="next" className={linkClasses}>
          Next
          <Icon icon="lucide:arrow-right" className="size-4" />
        </Link>
      ) : (
        <span className={mutedClasses} aria-hidden="true">
          Next
          <Icon icon="lucide:arrow-right" className="size-4" />
        </span>
      )}
    </nav>
  )
}

export default Pagination
