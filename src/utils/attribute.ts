type Unit = null | 'px' | '%' | 'em' | 'rem' | 'vh' | 'vw';

const checkStringUnit = (value?: string): Unit => {
  if (!value) return null;
  if (value.includes('%')) return '%';
  if (value.includes('rem')) return 'rem';
  if (value.includes('em')) return 'em';
  if (value.includes('vh')) return 'vh';
  if (value.includes('vw')) return 'vw';
  if (value.includes('px')) return 'px';
  return null;
};

const isComplexValue = (value: string) => {
  return value.includes('${') || value.includes(' ') || value.includes('calc') || value.includes('var');
};

export const stringValueWithUnit = (value?: string | number | null | undefined) => {
  if (value === null || value === undefined) return '';
  const stringValue = typeof value === 'number' ? `${value}px` : String(value);

  // 복잡한 값(템플릿 리터럴, CSS 함수, CSS 변수 등)은 그대로 반환
  if (typeof value === 'string' && isComplexValue(value)) {
    return value;
  }

  const unit = checkStringUnit(stringValue);
  if (unit) return stringValue;
  return Number.isNaN(Number(stringValue)) ? stringValue : `${stringValue}px`;
};

export const stringAndNumberValue = (value?: string | number | null | undefined) => {
  if (value === null || value === undefined) return '';
  return String(value);
};

export const stringValueWithSpacing = (value?: string | number | null | undefined) => {
  if (value === null || value === undefined) return '';
  const stringValue = stringAndNumberValue(value);

  // 복잡한 값은 그대로 반환
  if (typeof value === 'string' && isComplexValue(stringValue)) {
    return stringValue;
  }

  return stringValue
    .split(' ')
    .map(v => v.trim())
    .filter(Boolean)
    .map(stringValueWithUnit)
    .join(' ');
};

type AttributeKey = 'maxW' | 'w' | 'h' | 'z' | 'p' | 'm' | 'br' | 'b' | 'gap';
type AttributeValue = string | number | null | undefined;

export const attributeWithUnit = (attributes: Partial<Record<AttributeKey, AttributeValue>>) => {
  if (!attributes) return [];

  return Object.entries(attributes).map(([key, value]) => {
    if (value === null || value === undefined) return '';

    // 복잡한 값은 그대로 반환
    if (typeof value === 'string' && isComplexValue(value)) {
      return value;
    }

    switch (key) {
      case 'p':
      case 'm':
      case 'b':
        return stringValueWithSpacing(value);
      case 'z':
        return stringAndNumberValue(value);
      default:
        return stringValueWithUnit(value);
    }
  });
};

export const borderValue = (value?: string | number | null | undefined) => {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string' && isComplexValue(value)) {
    return value;
  }
  return stringValueWithUnit(value);
};
