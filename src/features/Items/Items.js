import { Container, Input, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import Item from './components/Item/Item'
import { selectItemsListState } from './Items-slice'


const Items = () => {
    
    const [userIsSearching, setUserIsSearching] = useState(false)
    // since we stil have no API to request for data, we have to define a temp array for search result.
    const [searchResult, setSearchResult] = useState()
    const ItemsList = useSelector(selectItemsListState);

    const HandleSearchChange = (e) => {
        if (e.target.value !== '') {
            setUserIsSearching(true);
            setSearchResult(ItemsList.filter((item) => item.title.toLowerCase().includes(e.target.value.trim().toLowerCase())))
        } else {
            setUserIsSearching(false);
        }
    }

  return (
    <Container sx={{display: "flex", flexDirection: "column", alignItems:"center"}}>
            <Input sx={{direction: "rtl"}} placeholder='جستجو' onChange={HandleSearchChange}/>
            {!userIsSearching ? (
                <Fragment>  
                    <Typography sx={{marginTop: "5px"}}>Number of Tasks: {ItemsList.length} </Typography>
                    {ItemsList?.map((item) => <Item key={item.title} item={item}/>)}
                </Fragment>
            ) : (
                <Fragment>
                    <Typography sx={{marginTop: "5px"}}>Number of results: {searchResult.length} </Typography>
                    {searchResult?.map((item) => <Item key={item.title} item={item}/>)}
                </Fragment>
            )}
            
    </Container>
  )
}

export default Items
