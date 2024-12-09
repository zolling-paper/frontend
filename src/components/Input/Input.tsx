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
    inputType = 'input',
    isError,
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
    inputRef.current?.addEventListener('focus', () => setHasFocus(true));
    inputRef.current?.addEventListener('blur', () => setHasFocus(false));
    return () => {
      inputRef.current?.removeEventListener('focus', () => setHasFocus(true));
      inputRef.current?.removeEventListener('blur', () => setHasFocus(false));
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
            <Text size="caption" css={errorTextStyle(theme, isError ?? false)}>
              {errorText}
            </Text>
          )}
        </div>
      )}
        <div css={inputBoxStyle(theme, hasFocus, isError)}>
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
            <button tabIndex={-1} onMouseDown={onDelete} aria-label="입력 내용 모두 지우기">
              <Icon iconType="inputDelete" />
            </button>
          )}
          {/* {inputType === 'search' && (
            <button tabIndex={-1} aria-label="검색">
              <Icon iconType="search" />
            </button>
          )} */}
        </div>
    </div>
  );
});

export default Input;
