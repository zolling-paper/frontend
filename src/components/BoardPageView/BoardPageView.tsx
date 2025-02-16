import {Button} from '@components/Button';
import FixedBottomCTA from '@components/FixedBottomCTA/FixedBottomCTA';
import Header from '@components/Header/Header';
import {HStack, VStack} from '@components/Stack';
import {Text} from '@components/Text';
import Top from '@components/Top/Top';
import SETTING from '@constants/setting';
import {useRequestGetBoard} from '@hooks/useRequestGetBoard';
import {useRequestGetPapersPage} from '@hooks/useRequestGetPapersPage';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {PaperThumbnailGrid} from '@/pages/[boardId]/PaperThumbnailGrid';

interface Props {
  isAdmin?: boolean;
}

export default function BoardPageView({isAdmin = false}: Props) {
  const navigate = useNavigate();
  const [cursor, setCursor] = useState(0);
  const {boardId} = useParams();

  // @TODO: @Todari 에러 페이지 및 리다이렉션 로직 분리
  useEffect(() => {
    if (!boardId) {
      navigate('/');
    }
  }, [boardId, navigate]);

  const {name} = useRequestGetBoard(boardId ?? '');
  const {responses, prevCursor, hasNext, nextCursor} = useRequestGetPapersPage({
    boardId: boardId ?? '',
    cursor,
    limit: SETTING.papersPageLimit,
  });
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
        <HStack justify="space-between">
          <Button variants="ghost" size="sm" onClick={handleClickPrev} disabled={!prevCursor}>
            <Text size="bodyBold" textColor="gray">
              {`<  이전`}
            </Text>
          </Button>
          <Button variants="ghost" size="sm" onClick={handleClickNext} disabled={!hasNext}>
            <Text size="bodyBold" textColor="gray">
              {`다음  >`}
            </Text>
          </Button>
        </HStack>
        <PaperThumbnailGrid papers={responses ?? []} />
      </VStack>
      {!isAdmin && (
        <FixedBottomCTA>
          <Button display="full" size="lg" onClick={() => navigate(`/${boardId}/create-paper`)}>
            메세지 남기기
          </Button>
          <Button display="full" size="lg" onClick={() => navigate(`/${boardId}/login`)}>
            메세지 확인하기
          </Button>
        </FixedBottomCTA>
      )}
    </VStack>
  );
}
