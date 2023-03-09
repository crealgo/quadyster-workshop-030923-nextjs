import Button from "@mui/material/Button"
import { navigationItems, tableData, statistics, getProfile } from '../data'
import styled from '@mui/material/styles/styled'
import { IconButton, TextField } from "@mui/material"
import { KeyboardArrowDown, NotificationsOutlined } from "@mui/icons-material"

const HeaderBar = styled('header')`
  display: flex;
  background-color: white;
  align-items: center;
  padding-inline: 1rem; // 16px
  padding-block: 0.5rem; // 8px

  & .startContent {
    flex-grow: 1;
  }

  & .endContent {}
`

export const Home = (props) => {
  console.log({props});
  return (
    <>
     <HeaderBar>
      <div className='startContent'>
        <TextField size='small' />
      </div>
      <div className="endContent">
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <Button endIcon={<KeyboardArrowDown />}>{props.userProfile.name}</Button>
      </div>
     </HeaderBar>
    </>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      navigationItems,
      tableData,
      statistics,
      userProfile: getProfile(),
      doctorProfile: getProfile(),
    }
  }
}

export default Home;
