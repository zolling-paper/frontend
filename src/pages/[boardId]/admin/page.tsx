import {useNavigate, useParams} from 'react-router-dom';

import {Button} from '@components/Button';
import Header from '@components/Header/Header';
import {VStack} from '@components/Stack';
import {Text} from '@components/Text';
import Top from '@components/Top/Top';
import {useRequestGetBoard} from '@hooks/useRequestGetBoard';

export default function AdminPage() {
  const navigate = useNavigate();
  const {boardId} = useParams();
  const {name} = useRequestGetBoard(Number(boardId));

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
