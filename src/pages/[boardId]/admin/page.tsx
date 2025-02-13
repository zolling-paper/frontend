import {Button} from '@components/Button';
import Header from '@components/Header/Header';
import {VStack} from '@components/Stack';
import {Text} from '@components/Text';
import Top from '@components/Top/Top';
import {useRequestGetBoard} from '@hooks/useRequestGetBoard';
import {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

export default function AdminPage() {
  const navigate = useNavigate();
  const {boardId} = useParams();
  // @TODO: @Todari 에러 페이지 및 리다이렉션 로직 분리
  useEffect(() => {
    if (!boardId) {
      navigate('/');
    }
  }, [boardId, navigate]);

  const {name} = useRequestGetBoard(boardId ?? '');

  return (
    <VStack p="6rem 0 0 0">
      <Header
        left={
          <Button size="sm" variants="ghost" onClick={() => navigate(`/${boardId}`)}>
            <Text size="bodyBold" textColor="secondary">
              {`<  메세지 확인하기`}
            </Text>
          </Button>
        }
      />
      <VStack p="1.5rem" gap="1rem">
        <Top>
          <Top.Line text={`${name}님의 보드`} emphasize={[`${name}`]} />
        </Top>
      </VStack>
    </VStack>
  );
}
