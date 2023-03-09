import Button from "@mui/material/Button"
import { navigationItems, tableData, statistics, getProfile } from '../data'

export const Home = (props) => {
  return (
    <div>
     <Button>{'Hello'}</Button>
    </div>
  )
}

export const getStaticProps = async () => {
  return {
    props: {}
  }
}

export default Home;
