/** @jsxImportSource @emotion/react */

import { useNavigate } from 'react-router-dom';

import FixedBottomCTA from '@/components/FixedBottomCTA/FixedBottomCTA';
import ROUTE from '@/constants/route';

export default function MainPage() {
  const navigate = useNavigate();

  return (
      <FixedBottomCTA onClick={() => navigate(ROUTE.create)}>
          보드 생성하기
      </FixedBottomCTA>
  );
}
