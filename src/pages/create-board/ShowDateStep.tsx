/** @jsxImportSource @emotion/react */

import {Button} from '@components/Button';
import {DateScrollPicker} from '@components/DateScrollPicker/DateScrollPicker';
import FixedBottomCTA from '@components/FixedBottomCTA/FixedBottomCTA';
import {Input} from '@components/Input';
import {VStack} from '@components/Stack';
import Top from '@components/Top/Top';
import {YMD} from '@type/model';
import {dateToYMD, YMDtoDateString} from '@utils/date';

import {BoardFormData, Step} from './page';

interface ShowDateStepProps {
  formData: BoardFormData;
  setFormData: (data: BoardFormData) => void;
  onSubmit: () => void;
  setStep: (step: Step) => void;
}

export default function ShowDateStep({formData, setFormData, onSubmit, setStep}: ShowDateStepProps) {
  const now = dateToYMD(new Date());

  const handleDateChange = (date: YMD) => {
    setFormData({...formData, showDate: date});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <VStack gap="1rem">
      <Top>
        <Top.Line text="롤링페이퍼를 확인할 수 있는" />
        <Top.Line text="날짜를 정해주세요" emphasize={['날짜']} />
      </Top>
      <form onSubmit={handleSubmit} css={{width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        <Input labelText="날짜" value={YMDtoDateString(formData.showDate)} disabled />
        <DateScrollPicker onChange={handleDateChange} initialDate={now} />
        <FixedBottomCTA direction="row">
          <Button variants="secondary" display="full" size="lg" onClick={() => setStep('password')}>
            이전 이전
          </Button>
          <Button display="full" size="lg" type="submit">
            다음
          </Button>
        </FixedBottomCTA>
      </form>
    </VStack>
  );
}
