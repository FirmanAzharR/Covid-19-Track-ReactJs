import React from 'react'
import styles from './Home.module.css'
import imageHeader from '../../images/head.png'
import Typography from '@material-ui/core/Typography';
import PickCountry from '../../components/PickCountry/PickCountry'
import Cards from '../../components/Cards/Cards'
import axios from 'axios';
// import {Link} from "react-router-dom"

class Home extends React.Component{
  state = {
    name: 'Firman Azhar R',
    data:{},
  }

  componentDidMount() {
    this.getData()
  }

  handleChange = (event) => {
    const country = event.target.value
    this.getData(country)
    const setCountry = country ? country :"Global"
    this.props.history.push({
      search: "?country=" + setCountry
    })
  };

  getData = (country) => {
    //global https://covid19.mathdro.id/api
    //per country https://covid19.mathdro.id/api/countries/country_name
    let setUrl = "https://covid19.mathdro.id/api";
    setUrl = country ? `${setUrl}/countries/${country}` : setUrl
    axios.get(setUrl)
    .then((res) => {
      this.setState({
        data:res.data,
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    const {data} = this.state
    const lastUpdate = new Date(data.lastUpdate).toDateString();
    console.log(lastUpdate)
    return(
      <div className={styles.container}>
        <img className={styles.image} src={imageHeader} alt='Covid-19' />
        <Typography className={styles.title} color="textSecondary" gutterBottom>Last Update: {lastUpdate}</Typography>
        <PickCountry handleCountryChange={this.handleChange}/>
        <Cards data={data}/>
        {/* <Link to="/about">About</Link>
        <h1>Halaman Home</h1>
        <p>{this.state.name}</p> */}
      </div>
    )
  }
}

export default Home