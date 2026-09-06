import { agentx } from './agentx'
import { hysabKytab } from './hysab-kytab'
import { omnivision } from './omnivision'
import { trackhrs } from './trackhrs'
import type { CaseStudy } from './types'

export const caseStudies: CaseStudy[] = [trackhrs, hysabKytab, omnivision, agentx].sort((a, b) => a.order - b.order)

export const getCaseStudy = (slug: string): CaseStudy | undefined => caseStudies.find((study) => study.slug === slug)

export const getFeaturedCaseStudies = (): CaseStudy[] => caseStudies.filter((study) => study.featured)

/** Previous/next navigation at the foot of a case study, wrapping around the list */
export const getAdjacentCaseStudies = (slug: string) => {
  const index = caseStudies.findIndex((study) => study.slug === slug)
  if (index === -1) return { previous: undefined, next: undefined }

  return {
    previous: index > 0 ? caseStudies[index - 1] : caseStudies[caseStudies.length - 1],
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : caseStudies[0],
  }
}

export type { CaseStudy } from './types'
