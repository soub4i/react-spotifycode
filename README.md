# @soubai/react-spotifycode

<p align="center">
<img alt="spotify:user:spotify:playlist:37i9dQZF1DXcBWIGoYBM5M" src="https://scannables.scdn.co/uri/plain/jpeg/BAED54/black/640/spotify:user:spotify:playlist:37i9dQZF1DXcBWIGoYBM5M">
</p>

React library for Spotify codes

>Spotify Code is a QR-like “scannable” tag that can be used to quickly share or access a piece of content within Spotify

[![NPM](https://img.shields.io/npm/v/@soubai/react-spotifycode.svg)](https://www.npmjs.com/package/@soubai/react-spotifycode) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @soubai/react-spotifycode
```

## Usage

```tsx
import React, { Component } from 'react'

import SpotifyCode from '@soubai/react-spotifycode'

class Example extends Component {
  render() {
    return (
      <SpotifyCode code='spotify:user:spotify:playlist:37i9dQZF1DXcBWIGoYBM5M' />
    )
  }
}
```

## Props

The component accept a few props:

- **code**: The Spotify URI - **required**
- **format** The image format - 'jpeg' | 'png' | 'svg' - **default** : 'jpeg'
- **barColor**: Bar color - 'black' | 'white' - **default** : 'black'
- **backgroundColor**: The background color - **default** : '000' - **example** : '000' or '000000' for #000 color
- **size**: The image size on pixel - **default** : 640

## Development

Local development is broken into two parts (ideally using two tabs).

First, run rollup to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
npm start # runs rollup with watch flag
```

The second part will be running the `example/` create-react-app that's linked to the local version of your module.

```bash
# (in another tab)
cd example
npm start # runs create-react-app dev server
```

## License

MIT © [AbderrahimSoubaiElidrissi](https://github.com/AbderrahimSoubaiElidrissi)
