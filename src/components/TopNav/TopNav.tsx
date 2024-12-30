/** @jsxImportSource @emotion/react */
import {useTheme} from '@theme/DesignProvider';

import {topNavStyle} from './TopNav.style';
import {Text} from '@components/Text';

const TopNav = () => {
  const {theme} = useTheme();
  return (
    <div css={topNavStyle({theme})}>
      <Text>TopNav</Text>
    </div>
  );
};

export default TopNav;
