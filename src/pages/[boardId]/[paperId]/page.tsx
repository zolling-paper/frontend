import {useLocation, useNavigate, useParams} from 'react-router-dom';

import {Button} from '@/components/Button';
import FixedBottomCTA from '@/components/FixedBottomCTA/FixedBottomCTA';
import Header from '@/components/Header/Header';
import {VStack} from '@/components/Stack';
import {TextArea} from '@/components/TextArea/TextArea';
import Top from '@/components/Top/Top';
import {useRequestGetPaper} from '@/hooks/useRequestGetPaper';

export default function PaperPage() {
  const navigate = useNavigate();
  const {paperId} = useParams();
  const {state} = useLocation();
  const {content} = useRequestGetPaper(paperId ?? '');
  console.log(content);

  return (
    <VStack p="3.5rem 0 0 0">
      <Header />
      <VStack p="1.5rem" gap="1rem">
        <Top>
          <Top.Line text={`${state.name}님의 메세지`} emphasize={[`${state.name}`]} />
        </Top>
        <TextArea value={content} disabled />
      </VStack>
      <FixedBottomCTA>
        <Button display="full" size="lg" onClick={() => navigate(-1)}>
          뒤로가기
        </Button>
      </FixedBottomCTA>
    </VStack>
  );
}
