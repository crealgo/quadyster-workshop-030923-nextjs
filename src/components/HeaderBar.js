import {styled} from '@mui/material/styles';

export const HeaderBar = styled('header')`
  display: flex;
  background-color: white;
  align-items: center;
  padding-inline: var(--content-spacing); // 16px
  padding-block: var(--small-padding); // 8px

  & .startContent {
    flex-grow: 1;
  }

  & .endContent {}
`;
