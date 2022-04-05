import React from 'react'
import DateCard from '../../components/DateCard/DateCard';
import GreenButton from '../../components/GreenButton/GreenButton';
import SelectInput from '../../components/SelectInput/SelectInput';
import "./Booking.styles.scss";

function Booking() {
  return (
    <div className='booking'>
        <DateCard placeholder="Date Arrival" />
        <DateCard placeholder="Date Departure" />
        <SelectInput />
        <GreenButton text="Find now"/>
    </div>
  )
}

export default Booking