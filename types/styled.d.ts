import 'styled-components'
import theme from '../style/theme'

type Theme = typeof theme

declare module 'styled-components' {
  export type DefaultTheme = Theme
}
