import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { GlobalStyle } from './styles'
import { Index } from './components'

const App: React.FC<{}> = () => (
  <>
    <Index />
    <GlobalStyle />
  </>
)

ReactDOM.render(<App />, document.getElementById('index'))
