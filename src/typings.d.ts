/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}

type SvgrComponent = React.StatelessComponent<React.SVGAttributes<SVGElement>>

declare module '*.svg' {
  const svgUrl: string
  const svgComponent: SvgrComponent
  export default svgUrl
  export { svgComponent as ReactComponent }
}

declare module '@vtex-components/types' {
  import { PropsWithoutRef } from 'react'
  import { As, PropsWithAs } from 'reakit-utils/types'

  export { As }

  export type Props<T extends As, BaseProps> = PropsWithAs<
    PropsWithoutRef<BaseProps>,
    T
  >

  export type AsOf<T> = T extends Props<infer TAs, any> ? TAs : never

  export type BasePropsOf<T> = T extends Props<any, infer TProps>
    ? TProps
    : never

  export type Component<DefaultProps extends Props<any, any>> = {
    <T extends As = AsOf<DefaultProps>>(
      props: Props<T, BasePropsOf<DefaultProps>>
    ): JSX.Element
  }
}
