import Button from "@mui/material/Button"
import { navigationItems, tableData, statistics, getProfile } from '../data'
import { IconButton, TextField } from "@mui/material"
import {styled} from "@mui/material/styles"
import { KeyboardArrowDown, NotificationsOutlined } from "@mui/icons-material"
import { HeaderBar } from "../components/HeaderBar"
import NextImage from 'next/image';

const MainContent = styled('main')`
  display: grid;
  padding: var(--content-spacing);
  gap: var(--content-spacing);
`

export const Home = (props) => {
  // console.log({props});
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
      <MainContent>
        {props.statistics.map((s, sIndex) => (
          <div key={sIndex}>{s.key}</div>
        ))}
        <div>{'Chart'}</div>
        <div>
          <img src={props.doctorProfile.image} alt={props.doctorProfile.name} />
          <p>{props.doctorProfile.name}</p>
          <p>{props.doctorProfile.job}</p>
          <div>
            {props.doctorProfile.meta.map((meta, metaIndex) => (
              <div key={metaIndex}>{meta.name} : {meta.stat}</div>
            ))}
          </div>
        </div>
      </MainContent>
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
