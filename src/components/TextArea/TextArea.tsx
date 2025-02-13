/** @jsxImportSource @emotion/react */
import {Text} from '@components/Text';
import {useTheme} from '@theme/DesignProvider';
import {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';

import {
  inputLayoutStyle,
  labelLayoutStyle,
  labelTextStyle,
  errorTextStyle,
  inputBoxStyle,
  inputStyle,
} from './TextArea.style';
import {TextAreaProps} from './TextArea.type';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  {value, onChange, placeholder, autoFocus = false, labelText, errorText = '', hasError, ...htmlProps}: TextAreaProps,
  ref,
) {
  const {theme} = useTheme();
  const inputRef = useRef<HTMLTextAreaElement>(null);
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
        <textarea
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
