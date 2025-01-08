/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import NameStep from './NameStep';
import PasswordStep from './PasswordStep';
import ShowDateStep from './ShowDateStep';

export type Step = 'name' | 'password' | 'showDate';
export interface BoardFormData {
  name: string;
  password: string;
  showDate: string;
}

export default function CreatePage() {
  const [step, setStep] = useState<Step>('name');
  const [formData, setFormData] = useState<BoardFormData>({
    name: '',
    password: '',
    showDate: '',
  });

  return (
    <>
      {step === 'name' ? <NameStep formData={formData} setFormData={setFormData} setStep={setStep} /> : null}
      {step === 'password' ? <PasswordStep formData={formData} setFormData={setFormData} setStep={setStep} /> : null}
      {step === 'showDate' ? <ShowDateStep formData={formData} setFormData={setFormData} onSubmit={()=>{}} /> : null}
    </>
  );
}
