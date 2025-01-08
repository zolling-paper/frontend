/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Outlet } from 'react-router-dom'

import { Box } from './components/Box'
import { Container } from './components/Container'

function App() {
  return (
    <Container maxW={768}>
      <Box w="full" h="100vh" css={css({
        position: 'relative',
      })}>
        <Outlet />
      </Box>
    </Container>
  )
}

export default App