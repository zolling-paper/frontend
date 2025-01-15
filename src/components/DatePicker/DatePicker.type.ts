export  interface DatePickerProps {
  onChange: (date: Date) => void;
}

export interface ScrollerProps {
  options: number[];
  initialValue?: number;
  onChange: (value: number) => void;
  loop?: boolean;
  degree?: number;
  perspective?: Perspective;
}

export type Perspective = 'left' | 'right' | 'center';
