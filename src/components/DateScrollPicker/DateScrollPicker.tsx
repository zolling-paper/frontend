/** @jsxImportSource @emotion/react */
import {useEffect, useState} from 'react';

import {Box} from '../Box';
import {HStack} from '../Stack';
import {backgroundStyle, dateScrollPickerAlignStyle} from './DateScrollPicker.style';
import {DateScrollPickerProps, PickerDate} from './DateScrollPicker.type';
import {Scroller} from './Scroller';

export const DateScrollPicker = ({
  onChange,
  initialDate = {year: new Date().getFullYear(), month: 0, day: 0},
}: DateScrollPickerProps) => {
  const [date, setDate] = useState<PickerDate>(initialDate);

  useEffect(() => {
    onChange(date);
  }, [date]);

  const handleChangeYear = (year: number) => {
    setDate(prevDate => ({...prevDate, year}));
  };

  const handleChangeMonth = (month: number) => {
    setDate(prevDate => ({...prevDate, month}));
  };

  const handleChangeDay = (day: number) => {
    setDate(prevDate => ({...prevDate, day}));
  };

  const getDaysInMonth = () => {
    return new Date(date.year, date.month, 0).getDate();
  };

  const getYearsArray = () => {
    return Array.from({length: 12}, (_, index) => index + new Date().getFullYear());
  };

  const getMonthsArray = () => {
    return Array.from({length: 12}, (_, index) => index + 1);
  };

  const getDaysArray = () => {
    return Array.from({length: getDaysInMonth()}, (_, index) => index + 1);
  };

  return (
    <div css={{position: 'relative', height: '15rem'}}>
      <HStack
        gap="4rem"
        p="0 4rem"
        css={{height: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}
      >
        <Scroller
          options={getYearsArray()}
          initialIndex={date.year - new Date().getFullYear()}
          onChange={handleChangeYear}
          degree={32}
          perspective="left"
        />
        <Scroller
          options={getMonthsArray()}
          initialIndex={date.month - 1}
          onChange={handleChangeMonth}
          degree={32}
          perspective="center"
        />
        <Scroller
          options={getDaysArray()}
          initialIndex={date.day - 1}
          onChange={handleChangeDay}
          degree={32}
          perspective="right"
        />
        <Box
          // bg={theme.colors.grayContainer}
          center
          w="calc(100% - 2rem)"
          br="1rem"
          h="2.5rem"
          z={-10}
          css={dateScrollPickerAlignStyle}
        />
        <Box w="100%" h="100%" z={-20} css={dateScrollPickerAlignStyle} />
        <Box w="100%" h="100%" z={10} css={backgroundStyle} />
      </HStack>
    </div>
  );
};

export default DateScrollPicker;
