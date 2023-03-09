import Button from "@mui/material/Button"
import { navigationItems, tableData, statistics, getProfile } from '../data'
import { IconButton, TextField } from "@mui/material"
import {styled} from "@mui/material/styles"
import { KeyboardArrowDown, NotificationsOutlined } from "@mui/icons-material"
import { HeaderBar } from "../components/HeaderBar"
import { capitalCase } from "change-case"
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
          <div key={sIndex}>
            <h3>Stat</h3>
            {s.key}
          </div>
        ))}
        <div>
        <h3>Chart</h3>
        </div>
        <div>
          <h3>Doctor Profile</h3>
          <img src={props.doctorProfile.image} alt={props.doctorProfile.name} />
          <p>{props.doctorProfile.name}</p>
          <p>{props.doctorProfile.job}</p>
          <div>
            {props.doctorProfile.meta.map((meta, metaIndex) => (
              <div key={metaIndex}>{meta.name} : {meta.stat}</div>
            ))}
          </div>
        </div>
        <div>
          <h3>Appointment Requests</h3>
          <table>
            <thead>
              <tr>
                {Object.keys(props.tableData[0]).map((dataKey, dataIndex) => (
                  <th key={dataIndex}>{capitalCase(dataKey)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.tableData.map((tData, tIndex) => (
                <tr key={tIndex}>
                  {Object.keys(tData).map((dataKey, dataIndex) => (
                    <td key={dataIndex}>{tData[dataKey]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h3>Appointment Requests</h3>
          <table>
            <thead>
              <tr>
                {Object.keys(props.tableData[0]).map((dataKey, dataIndex) => (
                  <th key={dataIndex}>{capitalCase(dataKey)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.tableData.map((tData, tIndex) => (
                <tr key={tIndex}>
                  {Object.keys(tData).map((dataKey, dataIndex) => (
                    <td key={dataIndex}>{tData[dataKey]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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
