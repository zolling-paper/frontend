/** @jsxImportSource @emotion/react */
import {Button} from '@/components/Button';
import {BoardFormData, Step} from './page';

import FixedBottomCTA from '@/components/FixedBottomCTA/FixedBottomCTA';
import {Input} from '@/components/Input';
import {VStack} from '@/components/Stack';
import Top from '@/components/Top/Top';
import REGEXP from '@/constants/regexp';
import SETTING from '@/constants/setting';
import {useState} from 'react';

interface NameStepProps {
  formData: BoardFormData;
  setFormData: (data: BoardFormData) => void;
  setStep: (step: Step) => void;
}

type NameErrorType = 'NOT_ENOUGH_LENGTH' | 'EXCEED_LENGTH' | 'INVALID_CHARACTER';

type NameError = Map<NameErrorType, boolean>;

const ERROR_MESSAGE: Record<NameErrorType, string> = {
  INVALID_CHARACTER: '이름은 한글, 영어, 숫자만 입력 가능해요',
  NOT_ENOUGH_LENGTH: `이름은 ${SETTING.nameMinLength}글자 이상이어야 합니다.`,
  EXCEED_LENGTH: `이름은 ${SETTING.nameMaxLength}글자 이하이어야 합니다.`,
};

export default function NameStep({formData, setFormData, setStep}: NameStepProps) {
  const [error, setError] = useState<NameError>(
    new Map([
      ['INVALID_CHARACTER', false],
      ['NOT_ENOUGH_LENGTH', false],
      ['EXCEED_LENGTH', false],
    ]),
  );

  const validateNameLength = (name: string) => {
    if (name.length < SETTING.nameMinLength && name.length !== 0) {
      setError(prev => {
        prev.set('NOT_ENOUGH_LENGTH', true);
        prev.set('EXCEED_LENGTH', false);
        return prev;
      });
    } else if (name.length > SETTING.nameMaxLength) {
      setError(prev => {
        prev.set('NOT_ENOUGH_LENGTH', false);
        prev.set('EXCEED_LENGTH', true);
        return prev;
      });
    } else {
      setError(prev => {
        prev.set('NOT_ENOUGH_LENGTH', false);
        prev.set('EXCEED_LENGTH', false);
        return prev;
      });
    }
  };

  const validateNameType = (name: string) => {
    if (!REGEXP.name.test(name)) {
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

  const getErrorMessage = (error: NameError) => {
    const errorType = Array.from(error.entries()).find(([_, isError]) => isError)?.[0];

    return errorType ? ERROR_MESSAGE[errorType] : '';
  };

  const hasError = error.get('NOT_ENOUGH_LENGTH') || error.get('EXCEED_LENGTH');

  const canSubmit = formData.name.length !== 0 && !hasError;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    const replacedName = name.replace(REGEXP.nameReplace, '');
    validateNameLength(replacedName);
    validateNameType(name);
    setFormData({...formData, name: replacedName});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep('password');
  };

  return (
    <VStack gap="1rem">
      <Top>
        <Top.Line text="다른 사람에게 보일" />
        <Top.Line text="나의 이름을 입력하세요" emphasize={['나의 이름']} />
      </Top>
      <form onSubmit={handleSubmit} css={{width: '100%'}}>
        <Input
          labelText="이름"
          placeholder="ex) 김민주"
          value={formData.name}
          onChange={handleChange}
          errorText={getErrorMessage(error)}
          hasError={hasError}
          maxLength={SETTING.nameMaxLength}
          autoFocus={true}
        />
        <FixedBottomCTA>
          <Button display="full" size="lg" type="submit" disabled={!canSubmit}>
            다음
          </Button>
        </FixedBottomCTA>
      </form>
    </VStack>
  );
}
