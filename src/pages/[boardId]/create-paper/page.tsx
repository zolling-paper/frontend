import {Button} from '@/components/Button';
import Header from '@/components/Header/Header';
import {VStack} from '@/components/Stack';
import {Text} from '@/components/Text';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import NameStep from './NameStep';
import MessageStep from './MessageStep';
import ROUTE from '@/constants/route';

export interface PaperFormData {
  name: string;
  content: string;
}

export type Step = 'name' | 'message';

export default function CreatePaperPage() {
  const navigate = useNavigate();
  const {boardId} = useParams();
  const [step, setStep] = useState<Step>('name');
  const [formData, setFormData] = useState<PaperFormData>({
    name: '',
    content: '',
  });

  useEffect(() => {
    if (!boardId) {
      navigate(ROUTE.main);
    }
  }, [boardId]);

  return (
    <VStack p="6rem 0 0 0">
      <Header
        left={
          <Button size="sm" variants="ghost" onClick={() => navigate(`/${boardId}`)}>
            <Text size="bodyBold" textColor="secondary">
              {`<  메세지 남기기`}
            </Text>
          </Button>
        }
      />
      <VStack p="1.5rem" gap="1rem">
        {step === 'name' && <NameStep formData={formData} setFormData={setFormData} setStep={setStep} />}
        {step === 'message' && <MessageStep formData={formData} setFormData={setFormData} setStep={setStep} />}
      </VStack>
    </VStack>
  );
}
