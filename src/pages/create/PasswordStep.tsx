/** @jsxImportSource @emotion/react */
import {BoardFormData, Step} from './page';

import FixedBottomCTA from '@/components/FixedBottomCTA/FixedBottomCTA';
import {Input} from '@/components/Input';
import {VStack} from '@/components/Stack';
import Top from '@/components/Top/Top';
import REGEXP from '@/constants/regexp';
import SETTING from '@/constants/setting';
import {useState} from 'react';

interface PasswordStepProps {
  formData: BoardFormData;
  setFormData: (data: BoardFormData) => void;
  setStep: (step: Step) => void;
}

type PasswordErrorType = 'NOT_ENOUGH_LENGTH' | 'INVALID_CHARACTER';

type PasswordError = Map<PasswordErrorType, boolean>;

const ERROR_MESSAGE: Record<PasswordErrorType, string> = {
  INVALID_CHARACTER: '비밀번호는 숫자만 입력 가능해요',
  NOT_ENOUGH_LENGTH: `비밀번호는 ${SETTING.passwordLength}자 이어야 합니다.`,
};

export default function PasswordStep({formData, setFormData, setStep}: PasswordStepProps) {
  const [error, setError] = useState<PasswordError>(
    new Map([
      ['INVALID_CHARACTER', false],
      ['NOT_ENOUGH_LENGTH', false],
    ]),
  );

  const validatePasswordLength = (password: string) => {
    if (password.length < SETTING.passwordLength && password.length !== 0) {
      setError(prev => {
        prev.set('NOT_ENOUGH_LENGTH', true);
        return prev;
      });
    } else {
      setError(prev => {
        prev.set('NOT_ENOUGH_LENGTH', false);
        return prev;
      });
    }
  };

  const validatePasswordType = (password: string) => {
    if (!REGEXP.password.test(password)) {
      setError(prev => {
        prev.set('INVALID_CHARACTER', true);
        return prev;
      });
    } else {
      setError(prev => {
        prev.set('INVALID_CHARACTER', false);
        return prev;
      });
    }
  };

  const getErrorMessage = (error: PasswordError) => {
    const errorType = Array.from(error.entries()).find(([_, isError]) => isError)?.[0];

    return errorType ? ERROR_MESSAGE[errorType] : '';
  };

  const hasError = error.get('NOT_ENOUGH_LENGTH');

  const canSubmit = formData.password.length !== 0 && !hasError;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    const replacedPassword = password.replace(REGEXP.passwordReplace, '');
    validatePasswordLength(replacedPassword);
    validatePasswordType(password);
    setFormData({...formData, password: replacedPassword});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep('showDate');
  };

  return (
    <VStack gap="1rem">
      <Top>
        <Top.Line text="관리를 위한" />
        <Top.Line text="비밀번호를 입력하세요" emphasize={['비밀번호']} />
      </Top>
      <form onSubmit={handleSubmit} css={{width: '100%'}}>
        <Input
          labelText="비밀번호"
          placeholder="ex) 0000"
          value={formData.password}
          onChange={handleChange}
          hasError={hasError}
          errorText={getErrorMessage(error)}
          maxLength={SETTING.passwordLength}
          type="password"
          inputMode="numeric"
          autoFocus={true}
        />
        <FixedBottomCTA type="submit" disabled={!canSubmit}>
          다음
        </FixedBottomCTA>
      </form>
    </VStack>
  );
}
