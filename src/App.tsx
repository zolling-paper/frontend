/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {Outlet} from 'react-router-dom';

import {Box} from './components/Box';
import {Container} from './components/Container';
import {useTheme} from './theme/DesignProvider';

function App() {
  const {theme} = useTheme();

  return (
    <Container maxW={768}>
      <Box
        bg={theme.colors.background}
        w="full"
        h="100dvh"
        css={css({
          position: 'relative',
        })}
      >
        <Outlet />
      </Box>
    </Container>
  );
}

export default App;
