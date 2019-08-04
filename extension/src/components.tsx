import * as React from 'react'
import styled from 'styled-components'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

export const Index: React.FC<{}> = ({}) => (
  <Wrap>
    <p>CyberJam</p>
  </Wrap>
)
