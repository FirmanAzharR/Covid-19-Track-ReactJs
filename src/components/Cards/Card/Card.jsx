import React from 'react'
// import styles from './Card.module.css'
import {Grid, Card, CardContent, Typography} from '@material-ui/core';
import Countup from 'react-countup'
import cn from 'classnames'
import styles from './Card.module.css'

const CardComponent = ({cardTitle, cardSubtitle,value,className,shadow}) => {
  return (
    <Grid item xs={12} md={3} component={Card} className={cn(styles.card, className,shadow)}>
    {/* <Card> */}
      <CardContent>
        <Typography  color="textSecondary">
          {cardTitle}
        </Typography>
        <Typography variant="h4">
          <Countup start={0} end={value} duration={3} separator=","/>
        </Typography>
        <Typography  color="textSecondary">
          Orang
        </Typography>
        <Typography variant="body2" component="p">
          {cardSubtitle}
        </Typography>
      </CardContent>
    {/* </Card> */}
    </Grid>
  )
}

export default CardComponent