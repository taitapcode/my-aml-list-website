import { styled } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'styles';

/* Container */
export const TopBarContainer = styled(Toolbar)`
  margin: 0.5rem;
  justify-content: flex-end;
  align-items: center;
`;

/* Bar Button */
export const ButtonGroup = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

export const TopButton = styled(Button)`
  color: white;
  font-family: 'Lora';
  font-size: calc(0.4vw + 10px);
  padding: 1rem 1.5rem;

  &:hover {
    background-color: rgba(67, 72, 77, 0.2);
  }
`;

export const DropButton = styled(Button)`
  color: white;
  font-family: 'Lora';
  text-align: center;
  width: 100%;

  &:hover {
    background-color: rgba(66, 66, 66, 0.5);
  }
`;

export const DropLink = styled(Link)`
  width: 100%;
  text-decoration: none;

  &:hover {
    background-color: rgba(117, 117, 117, 0.1);
  }
`;

export const DropBox = styled('div')`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0.1rem;
`;
