import type { LaunchOptions, PDFOptions, Page } from '@whamcloud-ddn/vuepress-plugin-export-pdf-core'

export type UserSorter = (a: Page, b: Page) => number

/**
 * defined user config
 */
export interface UserConfig {
  theme?: string
  sorter?: UserSorter
  puppeteerLaunchOptions?: LaunchOptions
  routePatterns?: string[]
  pdfOptions?: PDFOptions
  outFile?: string
  outDir?: string
  pdfOutlines?: boolean
  urlOrigin?: string
  outlineContainerSelector?: string
}
