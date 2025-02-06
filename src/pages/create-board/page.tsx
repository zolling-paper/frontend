/** @jsxImportSource @emotion/react */
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import NameStep from './NameStep';
import PasswordStep from './PasswordStep';
import ShowDateStep from './ShowDateStep';

import {Button} from '@/components/Button';
import {Header} from '@/components/Header/Header';
import {VStack} from '@/components/Stack';
import {Text} from '@/components/Text';
import ROUTE from '@/constants/route';
import {useRequestPostBoard} from '@/hooks/useRequestPostBoard';
import {YMD} from '@/types/model';
import {dateToYMD, YMDtoDate} from '@/utils/date';

export type Step = 'name' | 'password' | 'showDate';

export interface BoardFormData {
  name: string;
  password: string;
  showDate: YMD;
}

export default function CreateBoardPage() {
  const now = new Date();
  const [step, setStep] = useState<Step>('name');
  const [formData, setFormData] = useState<BoardFormData>({
    name: '',
    password: '',
    showDate: dateToYMD(now),
  });
  const navigate = useNavigate();

  const {mutate: postBoard, isSuccess, data} = useRequestPostBoard();

  const handleSubmit = () => {
    postBoard({
      name: formData.name,
      password: formData.password,
      showDate: YMDtoDate(formData.showDate),
    });
  };

  useEffect(() => {
    if (isSuccess) {
      console.log('Mutation result:', data);
    }
  }, [isSuccess, data]);

  return (
    <VStack p="6rem 0 0 0">
      <Header
        left={
          <Button size="sm" variants="ghost" onClick={() => navigate(ROUTE.main)}>
            <Text size="bodyBold" textColor="secondary">
              {`<  보드 생성하기`}
            </Text>
          </Button>
        }
      />
      <VStack p="1.5rem" gap="1rem">
        {step === 'name' && <NameStep formData={formData} setFormData={setFormData} setStep={setStep} />}
        {step === 'password' && <PasswordStep formData={formData} setFormData={setFormData} setStep={setStep} />}
        {step === 'showDate' && (
          <ShowDateStep formData={formData} setFormData={setFormData} onSubmit={handleSubmit} setStep={setStep} />
        )}
      </VStack>
    </VStack>
  );
}
