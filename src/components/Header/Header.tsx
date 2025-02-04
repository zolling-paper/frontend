/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {useNavigate} from 'react-router-dom';

import {Box} from '../Box';
import {Button} from '../Button';
import {Container} from '../Container';
import {HStack, VStack} from '../Stack';
import {Text} from '../Text';


import ROUTE from '@/constants/route';
import {useTheme} from '@/theme/DesignProvider';

interface Props {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const Header = ({left, right}: Props) => {
  const {theme} = useTheme();
  const navigate = useNavigate();

  return (
    <header css={css({width: '100vw', position: 'fixed', top: 0, left: 0, right: 0})}>
      <VStack>
        <Box
          w="100%"
          bg={theme.gradients.primary}
          css={css({borderBottom: `2px solid ${theme.colors.secondary}`})}
          center
        >
          <Container maxW="640px" p="0 12px">
            <Button size="sm" variants="ghost" onClick={() => navigate(ROUTE.main)}>
              <Text size="subTitle" textColor="secondary">
                졸링페이퍼
              </Text>
            </Button>
          </Container>
        </Box>
        {left || right ? (
          <Box
            w="100%"
            bg={theme.gradients.primaryContainer}
            css={css({borderBottom: `2px solid ${theme.colors.secondaryContainer}`})}
            center
          >
            <Container maxW="640px" p="0 12px">
              <HStack justify="space-between">
                {left}
                {right}
              </HStack>
            </Container>
          </Box>
        ) : null}
      </VStack>
    </header>
  );
};

export default Header;
