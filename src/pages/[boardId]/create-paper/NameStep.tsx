/** @jsxImportSource @emotion/react */
import {useState} from 'react';

import {PaperFormData, Step} from './page';

import {Button} from '@components/Button';
import FixedBottomCTA from '@components/FixedBottomCTA/FixedBottomCTA';
import {Input} from '@components/Input';
import {VStack} from '@components/Stack';
import Top from '@components/Top/Top';
import REGEXP from '@constants/regexp';
import SETTING from '@constants/setting';

interface NameStepProps {
  formData: PaperFormData;
  setFormData: (data: PaperFormData) => void;
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
      setError(() => {
        const newMap = new Map<NameErrorType, boolean>([
          ['NOT_ENOUGH_LENGTH', true],
          ['EXCEED_LENGTH', false],
        ]);
        return newMap;
      });
    } else if (name.length > SETTING.nameMaxLength) {
      setError(() => {
        const newMap = new Map<NameErrorType, boolean>([
          ['NOT_ENOUGH_LENGTH', false],
          ['EXCEED_LENGTH', true],
        ]);
        return newMap;
      });
    } else {
      setError(() => {
        const newMap = new Map<NameErrorType, boolean>([
          ['NOT_ENOUGH_LENGTH', false],
          ['EXCEED_LENGTH', false],
        ]);
        return newMap;
      });
    }
  };

  const validateNameType = (name: string) => {
    if (!REGEXP.name.test(name)) {
      setError(prev => {
        const newMap = new Map<NameErrorType, boolean>([...prev, ['INVALID_CHARACTER', true]]);
        return newMap;
      });
    } else {
      setError(prev => {
        const newMap = new Map<NameErrorType, boolean>([...prev, ['INVALID_CHARACTER', false]]);
        return newMap;
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

  const handleDelete = () => {
    setFormData({...formData, name: ''});
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep('message');
  };

  return (
    <VStack gap="1rem">
      <Top>
        <Top.Line text="메세지에 보일" />
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
          onDelete={handleDelete}
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
