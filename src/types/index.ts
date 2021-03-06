type FormatTypes = 'jpeg' | 'png' | 'svg'

type BarColorTypes = 'black' | 'white'

export interface Props {
  code: string
  format?: FormatTypes
  backgroundColor?: string
  barColor?: BarColorTypes
  size?: number
}
