import { VStack } from "@/components/Stack";
import Top from "@/components/Top/Top";
import FixedBottomCTA from "@/components/FixedBottomCTA/FixedBottomCTA";
import { Input } from "@/components/Input";
import { BoardFormData, Step } from "./page";

interface PasswordStepProps {
  formData: BoardFormData;
  setFormData: (data: BoardFormData) => void;
  setStep: (step: Step) => void;
}

export default function PasswordStep({formData, setFormData, setStep}: PasswordStepProps) {

  const handleClickNext = () => {
    setStep('showDate');
  }

  return <VStack p="1rem" gap="2rem">
      <Top>
        <Top.Line text="관리를 위한" />
        <Top.Line text="비밀번호를 입력하세요" emphasize={['비밀번호']} />
      </Top>
      <Input
        labelText="비밀번호"
        placeholder="ex) 0000"
        value={formData.password}
        onChange={(e) => setFormData({...formData, password: e.target.value})}
      />
      <FixedBottomCTA onClick={handleClickNext}>
          다음
      </FixedBottomCTA>
    </VStack>;
}
