import { styled } from '@mui/material/styles';

const StyledDiv = styled('div')(({ theme, icon }) => `
  background: white;
  padding: var(--content-spacing);
  border-radius: 0.25rem;
  display: flex;
  align-items: center;

  max-width: 20rem;

  transition: all 200ms;
  box-shadow: ${theme.shadows[4]};

  &:hover {
    box-shadow: ${theme.shadows[12]};
  }

  & .StatCard-content {
    flex-grow: ${icon ? 1 : 'none'};
  }

  & .StatCard-stat {
    font-size: ${theme.typography.h3.fontSize};
    font-weight: bold;
    display: block;
  }

  & .StatCard-text {
    font-size: ${theme.typography.body1};
  }

  & .StatCard-icon {
    border-radius: 0.25rem;
    aspect-ratio: 1;
    background: blue;
    height: 100%;
    width: auto;

    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    & .MuiSvgIcon-root {
      font-size: 3rem;
    }
  }
`);

const StatCard = ({label, statistic, icon}) => (
  <StyledDiv icon={icon}>
    <div className='StatCard-content'>
      <span className='StatCard-stat'>{statistic}</span>
      <span className='StatCard-text'>{label}</span>
    </div>
    <div className='StatCard-icon'>{icon}</div>
  </StyledDiv>
)

export default StatCard;
