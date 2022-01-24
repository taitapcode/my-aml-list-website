import React from 'react';
import { useSelector } from 'react-redux';
import { isResponsiveSelector } from 'state/reducers/responsive';
import { barActions } from 'constant';
import { AppBar } from 'styles';
import { TopBarContainer, ButtonGroup } from 'styles/TopBar';
import BarButton from './BarButton';

const Topbar: React.FC = () => {
  const isResponsive = useSelector(isResponsiveSelector);

  if (isResponsive) return <></>;
  return (
    <AppBar>
      <TopBarContainer>
        <ButtonGroup>
          {barActions.map((action) => (
            <BarButton key={action.text} to={action.to} icon={action.icon} text={action.text} />
          ))}
        </ButtonGroup>
      </TopBarContainer>
    </AppBar>
  );
};

export default Topbar;
