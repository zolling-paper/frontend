import {YMD} from '@type/model';

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

export const timeFromNow = (target: Date) => {
  const targetDate = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  const now = new Date();
  const nowDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return targetDate.getTime() - nowDate.getTime();
};

export const daysFromNow = (target: Date) => {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const differenceInMilliseconds = timeFromNow(target);
  return Math.ceil(differenceInMilliseconds / millisecondsPerDay);
};
