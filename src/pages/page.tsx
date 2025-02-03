/** @jsxImportSource @emotion/react */

import {useNavigate} from 'react-router-dom';

import FixedBottomCTA from '@/components/FixedBottomCTA/FixedBottomCTA';
import ROUTE from '@/constants/route';
import {VStack} from '@/components/Stack';
import {Button} from '@/components/Button';

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <VStack>
      <FixedBottomCTA>
        <Button display="full" size="lg" onClick={() => navigate(ROUTE.create)}>
          보드 생성하기
        </Button>
        <Button display="full" size="lg" onClick={() => {}}>
          보드 조회하기
        </Button>
      </FixedBottomCTA>
    </VStack>
  );
}
