/** @jsxImportSource @emotion/react */

import {Button} from '@components/Button';
import FixedBottomCTA from '@components/FixedBottomCTA/FixedBottomCTA';
import {Input} from '@components/Input';
import {VStack} from '@components/Stack';
import Top from '@components/Top/Top';
import {dateToYMD, YMDtoYYYYMMDD} from '@utils/date';

import {BoardFormData, Step} from './page';

interface ShowDateStepProps {
  formData: BoardFormData;
  setFormData: (data: BoardFormData) => void;
  onSubmit: () => void;
  setStep: (step: Step) => void;
}

export default function ShowDateStep({formData, setFormData, onSubmit, setStep}: ShowDateStepProps) {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setFormData({...formData, showDate: dateToYMD(new Date(date))});
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
        <Input type="date" labelText="날짜" value={YMDtoYYYYMMDD(formData.showDate)} onChange={handleDateChange} />
        {/* <DateScrollPicker onChange={handleDateChange} initialDate={now} /> */}
        <FixedBottomCTA direction="row">
          <Button variants="secondary" display="full" size="lg" onClick={() => setStep('password')}>
            이전
          </Button>
          <Button display="full" size="lg" type="submit">
            다음
          </Button>
        </FixedBottomCTA>
      </form>
    </VStack>
  );
}
