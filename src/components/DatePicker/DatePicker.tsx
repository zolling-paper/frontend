/** @jsxImportSource @emotion/react */
import {useTheme} from '@theme/DesignProvider';
import {useEffect, useState} from 'react';

import BottomSheet from '../BottomSheet/BottomSheet';
import {Box} from '../Box';
import {HStack} from '../Stack';
import {backgroundStyle} from './DatePicker.style';
import {DatePickerProps} from './DatePicker.type';
import {Scroller} from './Scroller';

export const DatePicker = ({onChange}: DatePickerProps) => {
  const now = new Date();
  const [year, setYear] = useState<number>(now.getFullYear());
  const [month, setMonth] = useState<number>(now.getMonth());
  const [day, setDay] = useState<number>(now.getDate());
  const {theme} = useTheme();

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getYearsArray = () => {
    return Array.from({length: 100}, (_, index) => index + now.getFullYear());
  };

  const getMonthsArray = () => {
    return Array.from({length: 12}, (_, index) => index + 1);
  };

  const getDaysArray = (year: number, month: number) => {
    return Array.from({length: getDaysInMonth(year, month)}, (_, index) => index + 1);
  };

  useEffect(() => {
    onChange(new Date(year, month, day));
  }, [year, month, day, onChange]);

  return (
    <BottomSheet>
      <HStack gap="4rem" css={{height: '10rem'}}>
        <Scroller
          options={getYearsArray()}
          initialIndex={year - now.getFullYear()}
          onChange={setYear}
          degree={32}
          perspective="left"
        />
        <HStack gap="3rem" css={{height: '10rem'}}>
          <Scroller
            options={getMonthsArray()}
            initialIndex={month - 1}
            onChange={setMonth}
            degree={32}
            perspective="center"
          />
          <Scroller
            options={getDaysArray(year, month)}
            initialIndex={day - 1}
            onChange={setDay}
            degree={32}
            perspective="right"
          />
        </HStack>
      </HStack>
      <Box fixed bg={theme.colors.grayContainer} center w="calc(100% - 4rem)" br="1rem" h="2.5rem" z={-10} />
      <Box fixed bg={theme.colors.white} center w="100%" h="10rem" z={-20} />
      <Box fixed center w="100%" h="10rem" z={10} css={backgroundStyle} />
    </BottomSheet>
  );
};
