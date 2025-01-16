import {Button} from '../Button';
import {Container} from '../Container';
import {HStack} from '../Stack';
import {Text} from '../Text';

export const Header = () => {
  return (
    <Container>
      <HStack justify="space-between">
        <Button size="small" variants="ghost">
          <Text size="bodyBold" textColor="gray">
            뒤로가기
          </Text>
        </Button>
        {/* <Text>뒤로</Text> */}
      </HStack>
    </Container>
  );
};
