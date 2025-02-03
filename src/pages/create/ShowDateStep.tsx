/** @jsxImportSource @emotion/react */
import {DatePicker} from '@/components/DatePicker/DatePicker';
import {BoardFormData} from './page';

import FixedBottomCTA from '@/components/FixedBottomCTA/FixedBottomCTA';
import {Input} from '@/components/Input';
import {VStack} from '@/components/Stack';
import Top from '@/components/Top/Top';
import {YMD} from '@/types/model';
import {dateToYMD, YMDtoDateString} from '@/utils/date';

interface ShowDateStepProps {
  formData: BoardFormData;
  setFormData: (data: BoardFormData) => void;
  onSubmit: () => void;
}

export default function ShowDateStep({formData, setFormData, onSubmit}: ShowDateStepProps) {
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
        <DatePicker onChange={handleDateChange} initialDate={now} />
        <FixedBottomCTA type="submit">다음</FixedBottomCTA>
      </form>
    </VStack>
  );
}
