/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import {MultiplePaper} from '@type/model';
import {VStack} from '@components/Stack';
import {Text} from '@components/Text';
import {useTheme} from '@/theme/DesignProvider';

interface Params {
  paper: MultiplePaper;
}

export const thumbnailStyle = css({
  aspectRatio: '4/3',
});

export function PaperThumbnail({paper}: Params) {
  const {theme} = useTheme();
  return (
    <VStack
      css={thumbnailStyle}
      p="0.5rem"
      align="center"
      br="0.5rem"
      bg={theme.gradients.secondaryContainer}
      b={`2px solid ${theme.colors.secondary}`}
    >
      <Text textColor="secondary">{paper.name}</Text>
    </VStack>
  );
}
