/** @jsxImportSource @emotion/react */

import {VStack} from '@components/Stack';
import {Text} from '@components/Text';
import {css} from '@emotion/react';
import {MultiplePaper} from '@type/model';

import {useTheme} from '@/theme/DesignProvider';
import {useNavigate, useParams} from 'react-router-dom';

interface Params {
  paper: MultiplePaper;
}

export const thumbnailStyle = css({
  aspectRatio: '4/3',
});

export function PaperThumbnail({paper}: Params) {
  const {theme} = useTheme();
  const navigate = useNavigate();
  const {boardId} = useParams();

  const handleClickPaper = () => {
    navigate(`/${boardId}/${paper.id}`, {state: {...paper}});
  };

  return (
    <VStack
      css={thumbnailStyle}
      p="0.5rem"
      align="center"
      br="0.5rem"
      bg={theme.gradients.secondaryContainer}
      b={`2px solid ${theme.colors.secondary}`}
      onClick={handleClickPaper}
    >
      <Text textColor="secondary">{paper.name}</Text>
    </VStack>
  );
}
