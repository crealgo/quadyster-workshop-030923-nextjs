import Button from "@mui/material/Button"
import { navigationItems, tableData, statistics, getProfile } from '../data'

export const Home = (props) => {
  console.log({props});
  return (
    <div>
     <Button>{'Hello'}</Button>
    </div>
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
