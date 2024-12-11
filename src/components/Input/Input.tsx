/** @jsxImportSource @emotion/react */
import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';

import {useTheme} from '@theme/DesignProvider';

import Text from '../Text/Text';

import {inputBoxStyle, inputStyle, labelTextStyle, errorTextStyle, inputLayoutStyle, labelLayoutStyle} from './Input.style';
import { InputProps } from './Input.type';
import Icon from '../Icon/Icon';

export const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    value,
    onChange,
    onDelete,
    placeholder,
    autoFocus = false,
    labelText,
    errorText = '',
    hasError,
    ...htmlProps
  }: InputProps,
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

  return (
    <div css={inputLayoutStyle}>
      {(labelText || errorText) && (
        <div css={labelLayoutStyle}>
          {labelText && (
            <Text size="caption" css={labelTextStyle(theme, hasFocus, hasValue)}>
              {labelText}
            </Text>
          )}
          {errorText && (
            <Text size="caption" css={errorTextStyle(theme, hasError ?? false)}>
              {errorText}
            </Text>
          )}
        </div>
      )}
        <div css={inputBoxStyle(theme, hasFocus, hasError)}>
          <input
            css={inputStyle(theme)}
            ref={inputRef}
            value={value}
            onChange={onChange}
            placeholder={value ? '' : placeholder}
            autoFocus={autoFocus}
            {...htmlProps}
          />
          {onDelete && value && hasFocus && (
            <button type="button" onClick={onDelete} onKeyDown={(e) => e.key === 'Enter' && onDelete()} aria-label="입력 내용 모두 지우기">
              <Icon iconType="inputDelete" />
            </button>
          )}
        </div>
    </div>
  );
});

export default Input;
