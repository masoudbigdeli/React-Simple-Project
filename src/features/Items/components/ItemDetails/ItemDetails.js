import { Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectItemsListState } from '../../Items-slice';

const ItemDetails = () => {
  const { title } = useParams();
  const allItems = useSelector(selectItemsListState);
  const currentItem = allItems.find(item => item.title === title)
  console.log(currentItem)
  console.log(`this is item details`)
  return (
    <div>
      <h2>{title}</h2>
      <Typography>{currentItem?.details}</Typography>
      <img src={currentItem?.image} alt="item" width="500"/>
    </div>
  )
}

export default ItemDetails
