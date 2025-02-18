/** @jsxImportSource @emotion/react */

import {Button} from '@components/Button';
import FixedBottomCTA from '@components/FixedBottomCTA/FixedBottomCTA';
import Header from '@components/Header/Header';
import {Input} from '@components/Input';
import {VStack} from '@components/Stack';
import {Text} from '@components/Text';
import Top from '@components/Top/Top';
import REGEXP from '@constants/regexp';
import SETTING from '@constants/setting';
import {useRequestPostLogin} from '@hooks/useRequestPostLogin';
import {useState} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';

type PasswordErrorType = 'NOT_ENOUGH_LENGTH' | 'INVALID_CHARACTER' | 'INVALID_PASSWORD';

type PasswordError = Map<PasswordErrorType, boolean>;

const ERROR_MESSAGE: Record<PasswordErrorType, string> = {
  INVALID_CHARACTER: '비밀번호는 숫자만 입력 가능해요',
  NOT_ENOUGH_LENGTH: `비밀번호는 ${SETTING.passwordLength}자 이어야 합니다.`,
  INVALID_PASSWORD: '비밀번호가 일치하지 않아요',
};

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState<PasswordError>(
    new Map([
      ['INVALID_CHARACTER', false],
      ['NOT_ENOUGH_LENGTH', false],
      ['INVALID_PASSWORD', false],
    ]),
  );

  const navigate = useNavigate();
  const {boardId} = useParams();
  const {mutate: postLogin, isSuccess, isError, error: postLoginError} = useRequestPostLogin();

  const validatePasswordLength = (password: string) => {
    if (password.length < SETTING.passwordLength && password.length !== 0) {
      setError(prev => {
        const newMap = new Map<PasswordErrorType, boolean>([...prev, ['NOT_ENOUGH_LENGTH', true]]);
        return newMap;
      });
    } else {
      setError(prev => {
        const newMap = new Map<PasswordErrorType, boolean>([...prev, ['NOT_ENOUGH_LENGTH', false]]);
        return newMap;
      });
    }
  };

  const validatePasswordType = (password: string) => {
    if (!REGEXP.password.test(password)) {
      setError(prev => {
        const newMap = new Map<PasswordErrorType, boolean>([...prev, ['INVALID_CHARACTER', true]]);
        return newMap;
      });
    } else {
      setError(prev => {
        const newMap = new Map<PasswordErrorType, boolean>([...prev, ['INVALID_CHARACTER', false]]);
        return newMap;
      });
    }
  };

  const getErrorMessage = (error: PasswordError) => {
    const errorType = Array.from(error.entries()).find(([_, isError]) => isError)?.[0];

    return errorType ? ERROR_MESSAGE[errorType] : '';
  };

  const hasError = error.get('NOT_ENOUGH_LENGTH');

  const canSubmit = password.length !== 0 && !hasError;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    const replacedPassword = password.replace(REGEXP.passwordReplace, '');
    validatePasswordLength(replacedPassword);
    validatePasswordType(password);
    setPassword(replacedPassword);
  };

  const handleDelete = () => {
    setPassword('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postLogin({password, id: boardId ?? ''});
    if (isError) {
      if (postLoginError.message.includes('401')) {
        setError(prev => {
          const newMap = new Map<PasswordErrorType, boolean>([...prev, ['INVALID_PASSWORD', true]]);
          return newMap;
        });
      }
    }
    if (isSuccess) {
      const {state} = useLocation();
      if (state) {
        navigate(`/${boardId}/${state.id}`);
      }
      navigate(`/${boardId}/admin`);
    }
  };

  return (
    <VStack p="6rem 0 0 0">
      <Header
        left={
          <Button size="sm" variants="ghost" onClick={() => navigate(`/${boardId}`)}>
            <Text size="bodyBold" textColor="secondary">
              {`<  메세지 확인하기`}
            </Text>
          </Button>
        }
      />
      <VStack p="1.5rem" gap="1rem">
        <Top>
          <Top.Line text="보드 생성 시 설정한" />
          <Top.Line text="비밀번호를 입력하세요" emphasize={['비밀번호']} />
        </Top>
        <form onSubmit={handleSubmit} css={{width: '100%'}}>
          <Input
            labelText="비밀번호"
            placeholder="ex) 0000"
            value={password}
            onChange={handleChange}
            hasError={hasError}
            errorText={getErrorMessage(error)}
            maxLength={SETTING.passwordLength}
            type="password"
            inputMode="numeric"
            autoFocus={true}
            onDelete={handleDelete}
          />
          <FixedBottomCTA direction="row">
            <Button display="full" size="lg" type="submit" disabled={!canSubmit}>
              다음
            </Button>
          </FixedBottomCTA>
        </form>
      </VStack>
    </VStack>
  );
}
