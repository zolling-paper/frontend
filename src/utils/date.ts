import {YMD} from '@/types/model';

export const YMDtoDate = (ymd: YMD) => {
  const date = new Date(ymd.year, ymd.month - 1, ymd.day);
  date.setHours(0, 0, 0, 0);
  return date;
};

export const dateToYMD = (date: Date) => {
  return {year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate()};
};

export const YMDtoDateString = (ymd: YMD) => {
  return `${ymd.year}년 ${String(ymd.month).padStart(2, '0')}월 ${String(ymd.day).padStart(2, '0')}일`;
};
