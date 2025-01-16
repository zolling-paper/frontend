/** @jsxImportSource @emotion/react */
import {useState} from 'react';

import NameStep from './NameStep';
import PasswordStep from './PasswordStep';
import ShowDateStep from './ShowDateStep';
import {Header} from '@/components/Header/Header';
import {VStack} from '@/components/Stack';
import {YMD} from '@/types/model';

export type Step = 'name' | 'password' | 'showDate';

export interface BoardFormData {
  name: string;
  password: string;
  showDate: YMD;
}

export default function CreatePage() {
  const [step, setStep] = useState<Step>('name');
  const now = new Date();
  const [formData, setFormData] = useState<BoardFormData>({
    name: '',
    password: '',
    showDate: {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()},
  });

  return (
    <VStack p="1.5rem" gap="1rem">
      <Header />
      {step === 'name' ? <NameStep formData={formData} setFormData={setFormData} setStep={setStep} /> : null}
      {step === 'password' ? <PasswordStep formData={formData} setFormData={setFormData} setStep={setStep} /> : null}
      {step === 'showDate' ? <ShowDateStep formData={formData} setFormData={setFormData} /> : null}
    </VStack>
  );
}
