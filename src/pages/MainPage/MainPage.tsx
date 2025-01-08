/** @jsxImportSource @emotion/react */

import Button from '@/components/Button/Button';
import { mainLayout } from './MainPage.style';

export default function MainPage() {
  return (
    <div css={mainLayout}>
      <Button>
        보드 생성하기
      </Button>
    </div>
  );
}
