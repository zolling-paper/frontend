/** @jsxImportSource @emotion/react */


import {Button} from '@components/Button';
import FixedBottomCTA from '@components/FixedBottomCTA/FixedBottomCTA';
import Header from '@components/Header/Header';
import {VStack} from '@components/Stack';
import ROUTE from '@constants/route';
import {useNavigate} from 'react-router-dom';

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <VStack p="6rem 0 0 0">
      <Header />
      <FixedBottomCTA>
        <Button display="full" size="lg" onClick={() => navigate(ROUTE.createBoard)}>
          보드 생성하기
        </Button>
      </FixedBottomCTA>
    </VStack>
  );
}
