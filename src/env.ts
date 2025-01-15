export const getEnvVariable = (key: string): string => {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`${key} 환경 변수가 설정되지 않았습니다.`);
  }
  return value;
};