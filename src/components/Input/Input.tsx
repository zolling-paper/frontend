/** @jsxImportSource @emotion/react */
import {Text} from '@components/Text';
import {useTheme} from '@theme/DesignProvider';
import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';

import {
  inputBoxStyle,
  inputStyle,
  labelTextStyle,
  errorTextStyle,
  inputLayoutStyle,
  labelLayoutStyle,
} from './Input.style';
import {InputProps} from './Input.type';

export const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(function Input(
  {value, onChange, placeholder, autoFocus = false, labelText, errorText = '', hasError, ...htmlProps}: InputProps,
  ref,
) {
  const {theme} = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasFocus, setHasFocus] = useState(autoFocus);
  const hasValue = !!value;

  useImperativeHandle(ref, () => inputRef.current!);

  useEffect(() => {
    const handleFocus = () => setHasFocus(true);
    const handleBlur = () => setHasFocus(false);
    const currentRef = inputRef.current;

    currentRef?.addEventListener('focus', handleFocus);
    currentRef?.addEventListener('blur', handleBlur);
    return () => {
      currentRef?.removeEventListener('focus', handleFocus);
      currentRef?.removeEventListener('blur', handleBlur);
    };
  }, []);

  //TODO: (@Todari): Icon 문자열 파싱 문제 해결
  return (
    <div css={inputLayoutStyle}>
      {(labelText || errorText) && (
        <div css={labelLayoutStyle}>
          {labelText && (
            <Text size="caption" css={labelTextStyle(theme, hasFocus, hasValue)}>
              {hasFocus || hasValue ? labelText : ''}
            </Text>
          )}
          {errorText && (
            <Text size="caption" css={errorTextStyle({theme, isError: hasError ?? false, isFocus: hasFocus})}>
              {errorText}
            </Text>
          )}
        </div>
      )}
      <div css={inputBoxStyle({theme, isFocus: hasFocus, isError: hasError ?? false})}>
        <input
          css={inputStyle({theme, isFocus: hasFocus, isError: hasError ?? false})}
          ref={inputRef}
          value={value}
          onChange={onChange}
          placeholder={hasFocus ? placeholder : labelText}
          autoFocus={autoFocus}
          {...htmlProps}
        />
      </div>
    </div>
  );
});

export default Input;
