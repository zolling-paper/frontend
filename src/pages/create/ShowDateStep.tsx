import { VStack } from "@/components/Stack";
import Top from "@/components/Top/Top";
import FixedBottomCTA from "@/components/FixedBottomCTA/FixedBottomCTA";
import { Input } from "@/components/Input";
import { BoardFormData } from "./page";

interface ShowDateStepProps {
  formData: BoardFormData;
  setFormData: (data: BoardFormData) => void;
  onSubmit: () => void;
}

export default function ShowDateStep({formData, setFormData, onSubmit}: ShowDateStepProps) {

  const handleClickNext = () => {
    onSubmit();
  }

  return <VStack p="1rem" gap="2rem">
      <Top>
        <Top.Line text="롤링페이퍼를 확인할 수 있는" />
        <Top.Line text="날짜를 정해주세요" emphasize={['날짜']} />
      </Top>
      <Input
        labelText="날짜"
        placeholder="ex) 2025-01-01"
        value={formData.showDate}
        onChange={(e) => setFormData({...formData, showDate: e.target.value})}
      />
      <FixedBottomCTA onClick={handleClickNext}>
          다음
      </FixedBottomCTA>
    </VStack>;
}
