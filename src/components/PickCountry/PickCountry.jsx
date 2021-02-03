import React, {useEffect, useState} from 'react'
import styles from './PickCountry.module.css'
import { FormControl } from '@material-ui/core';
import { NativeSelect } from '@material-ui/core';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
import axios from 'axios'
const PickCountry = ({handleCountryChange}) => {
  const [countries,setCountries] = useState([])
  //countries = untuk menyimpan data
  //setCountries = untuk memanipulasi data yang ada pada countries
  useEffect(() => {
    getCountry();
  },[])
  function getCountry() {
    axios.get("https://covid19.mathdro.id/api/countries").then((res) => {
      setCountries(res.data.countries)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(event)=>handleCountryChange(event)}>
        <option value="">Global</option>
        {countries.map((item, index) => (
          <option key={index} value={item.name}>{item.name}</option>
        ))}
      </NativeSelect>
      {/* <InputLabel id="select-label">Select Country</InputLabel> */}
      {/* <Select labelId="demo-simple-select-label" id="demo-simple-select" value={countries} onChange={(event)=>handleCountryChange(event)}>
        {countries.map((item, index) => (
          <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
        ))}
      </Select> */}
    </FormControl>
  )
}

export default PickCountry