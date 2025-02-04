import {useTheme} from '@/theme/DesignProvider';
import {Button} from '../Button';
import {HStack, VStack} from '../Stack';
import {Text} from '../Text';

interface Props {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const Header = ({left, right}: Props) => {
  const {theme} = useTheme();

  return (
    <VStack>
      <HStack bg={theme.gradients.primary} b={`0 0 2px 0 ${theme.colors.secondary} solid`}>
        <Button size="sm" variants="ghost">
          <Text size="bodyBold" textColor="secondary">
            졸링페이퍼
          </Text>
        </Button>
      </HStack>
      <HStack bg={theme.gradients.primaryContainer} justify="space-between">
        {left}
        {right}
      </HStack>
    </VStack>
  );
};

export default Header;
