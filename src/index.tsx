import * as React from 'react'
import { Props } from './types'

const SpotifyCode = ({
  code,
  format,
  backgroundColor,
  barColor,
  size
}: Props) => {
  const src = `https://scannables.scdn.co/uri/plain/${format}/${backgroundColor}/${barColor}/${size}/${code}`
  return <img alt={code} src={src} />
}

SpotifyCode.defaultProps = {
  format: 'jpeg',
  backgroundColor: '000',
  barColor: 'black',
  size: 640
}

export default SpotifyCode
