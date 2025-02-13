/** @jsxImportSource @emotion/react */
import {Text} from '@components/Text';
import {useTheme} from '@theme/DesignProvider';

import {topNavStyle} from './TopNav.style';

const TopNav = () => {
  const {theme} = useTheme();
  return (
    <div css={topNavStyle({theme})}>
      <Text>TopNav</Text>
    </div>
  );
};

export default TopNav;