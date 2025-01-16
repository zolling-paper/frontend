/** @jsxImportSource @emotion/react */
import {useEffect, useState} from 'react';

import NameStep from './NameStep';
import PasswordStep from './PasswordStep';
import ShowDateStep from './ShowDateStep';
import {Header} from '@/components/Header/Header';
import {VStack} from '@/components/Stack';
import {YMD} from '@/types/model';
import {dateToYMD, YMDtoDate} from '@/utils/date';
import {useRequestPostBoard} from '@/hooks/useRequestPostBoard';

export type Step = 'name' | 'password' | 'showDate';

export interface BoardFormData {
  name: string;
  password: string;
  showDate: YMD;
}

export default function CreatePage() {
  const now = new Date();
  const [step, setStep] = useState<Step>('name');
  const [formData, setFormData] = useState<BoardFormData>({
    name: '',
    password: '',
    showDate: dateToYMD(now),
  });

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
    <VStack p="1.5rem" gap="1rem">
      <Header />
      {step === 'name' ? <NameStep formData={formData} setFormData={setFormData} setStep={setStep} /> : null}
      {step === 'password' ? <PasswordStep formData={formData} setFormData={setFormData} setStep={setStep} /> : null}
      {step === 'showDate' ? (
        <ShowDateStep formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />
      ) : null}
    </VStack>
  );
}
