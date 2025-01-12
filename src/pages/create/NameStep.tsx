import { VStack } from "@/components/Stack";
import Top from "@/components/Top/Top";
import FixedBottomCTA from "@/components/FixedBottomCTA/FixedBottomCTA";
import { Input } from "@/components/Input";
import { BoardFormData, Step } from "./page";

interface NameStepProps {
  formData: BoardFormData;
  setFormData: (data: BoardFormData) => void;
  setStep: (step: Step) => void;
}

export default function NameStep({formData, setFormData, setStep}: NameStepProps) {

  const handleClickNext = () => {
    setStep('password');
  }

  return <VStack p="1rem" gap="2rem">
      <Top>
        <Top.Line text="다른 사람에게 보일" />
        <Top.Line text="나의 이름을 입력하세요" emphasize={['나의 이름']} />
      </Top>
      <Input
        labelText="이름"
        placeholder="ex) 민주"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      <FixedBottomCTA onClick={handleClickNext}>
          다음
      </FixedBottomCTA>
    </VStack>;
}
