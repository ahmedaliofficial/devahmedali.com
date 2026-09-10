import { IStaticMethods } from 'preline/preline'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
    HSOverlay?: {
      close: (selector: string) => void
      open: (selector: string) => void
      getInstance: (
        selector: string,
        open?: boolean
      ) => {
        element: {
          close: () => void
          open: () => void
        }
      }
    }
    /** Google's consent management platform (Funding Choices), loaded by the AdSense script */
    googlefc?: {
      callbackQueue?: Array<Record<string, () => void>>
      showRevocationMessage?: () => void
    }
  }
}
