export type PickerDate = {
  year: number;
  month: number;
  day: number;
};

export interface DateScrollPickerProps {
  onChange: (date: PickerDate) => void;
  initialDate?: PickerDate;
}

export interface ScrollerProps {
  options: number[];
  initialIndex?: number;
  onChange: (value: number) => void;
  loop?: boolean;
  degree?: number;
  perspective?: Perspective;
}

export type Perspective = 'left' | 'right' | 'center';
