import {VStack} from '../Stack';
import Top from '../Top/Top';

interface Props {
  name: string;
  daysForShow: number;
}

export const FutureBoardFallback = ({name, daysForShow}: Props) => {
  return (
    <VStack p="1.5rem" gap="1rem">
      <Top>
        <Top.Line text={`${name}님의 보드`} emphasize={[`${name}`]} />
        <Top.Line text={`${daysForShow}일 후에 보드가 열립니다.`} emphasize={[`${daysForShow}일 후`]} />
      </Top>
    </VStack>
  );
};
