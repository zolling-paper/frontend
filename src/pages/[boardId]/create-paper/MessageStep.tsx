/** @jsxImportSource @emotion/react */
import {Button} from '@/components/Button';
import FixedBottomCTA from '@/components/FixedBottomCTA/FixedBottomCTA';
import {VStack} from '@/components/Stack';
import {TextArea} from '@/components/TextArea/TextArea';
import Top from '@/components/Top/Top';
import SETTING from '@/constants/setting';
import {useRequestPostPaper} from '@/hooks/useRequestPostPaper';
import {PaperFormData} from './page';
import {useRequestGetBoard} from '@/hooks/useRequestGetBoard';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect} from 'react';

interface MessageStepProps {
  formData: PaperFormData;
  setFormData: (data: PaperFormData) => void;
  setStep: (step: Step) => void;
}

export type Step = 'name' | 'message';

export default function MessageStep({formData, setFormData, setStep}: MessageStepProps) {
  const {boardId} = useParams();
  const {name} = useRequestGetBoard(Number(boardId));
  const {mutate: postPaper, isSuccess} = useRequestPostPaper();
  const navigate = useNavigate();
  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({...formData, content: e.target.value});
  };

  const canSubmit = formData.content.trim().length !== 0;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postPaper({boardId: Number(boardId), name: formData.name, content: formData.content});
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(`/${boardId}`);
    }
  }, [isSuccess, boardId]);

  return (
    <VStack gap="1rem">
      <Top>
        <Top.Line text={`${name}에게...`} emphasize={[`${name}`]} />
      </Top>
      <form onSubmit={handleSubmit} css={{width: '100%'}}>
        <TextArea
          labelText="메세지"
          placeholder="메세지를 입력하세요"
          value={formData.content}
          onChange={handleChangeMessage}
          rows={SETTING.textAreaRows}
          maxLength={SETTING.textAreaMaxLength}
          autoFocus={true}
        />
        <FixedBottomCTA direction="row">
          <Button variants="secondary" display="full" size="lg" onClick={() => setStep('name')}>
            이전
          </Button>
          <Button display="full" size="lg" type="submit" disabled={!canSubmit}>
            작성 완료
          </Button>
        </FixedBottomCTA>
      </form>
    </VStack>
  );
}
