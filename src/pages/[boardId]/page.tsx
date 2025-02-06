import {useNavigate, useParams} from 'react-router-dom';

import {Button} from '@components/Button';
import FixedBottomCTA from '@components/FixedBottomCTA/FixedBottomCTA';
import Header from '@components/Header/Header';
import {HStack, VStack} from '@components/Stack';
import Top from '@components/Top/Top';
import {useRequestGetBoard} from '@hooks/useRequestGetBoard';
import {useRequestGetPapersPage} from '@hooks/useRequestGetPapersPage';
import {PaperThumbnailView} from '@components/PaperThumbnailView/PaperThumbnailView';
import {useRef, useState} from 'react';
import SETTING from '@constants/setting';
import {Text} from '@components/Text';

export default function BoardPage() {
  const navigate = useNavigate();
  const {boardId} = useParams();
  const {name} = useRequestGetBoard(Number(boardId));
  const [cursor, setCursor] = useState(0);
  const prevCursor = useRef(0);

  const {responses, hasNext, nextCursor} = useRequestGetPapersPage({
    boardId: Number(boardId),
    cursor,
    limit: SETTING.papersPageLimit,
  });

  const isFirstPage = responses?.[0]?.paperId === 1;
  const isLastPage = hasNext === false;

  const handleClickPrev = () => {
    setCursor(0);
  };

  const handleClickNext = () => {
    setCursor(nextCursor ?? 0);
  };

  return (
    <VStack p="3.5rem 0 0 0">
      <Header />
      <VStack p="1.5rem" gap="1rem">
        <Top>
          <Top.Line text={`${name}님의 보드`} emphasize={[`${name}`]} />
        </Top>
        <PaperThumbnailView papers={responses ?? []} />
        <HStack justify="space-between">
          <Button variants="ghost" size="sm" onClick={handleClickPrev}>
            <Text size="bodyBold" textColor="gray">
              {`<  이전`}
            </Text>
          </Button>
          <Button variants="ghost" size="sm" onClick={handleClickNext}>
            <Text size="bodyBold" textColor="gray">
              {`다음  >`}
            </Text>
          </Button>
        </HStack>
      </VStack>
      <FixedBottomCTA>
        <Button display="full" size="lg" onClick={() => navigate(`/${boardId}/create-paper`)}>
          메세지 남기기
        </Button>
        <Button display="full" size="lg" onClick={() => navigate(`/${boardId}/login`)}>
          메세지 확인하기
        </Button>
      </FixedBottomCTA>
    </VStack>
  );
}
