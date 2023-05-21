import { Button, ButtonBase, Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";
import useStyles from './Item-styles';
import {selectItemsListState, setItemsListState} from '../../Items-slice'
import { useSelector, useDispatch } from 'react-redux';

const Item = (props) => {
    const { title, image } = props.item;
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const ItemsList = useSelector(selectItemsListState)
    const OpenItemDetails = () => navigate(`/items/${title}`);
    const handleItemDelete = () => dispatch(setItemsListState(ItemsList.filter(item => item.title !== title)))

  return (
    <Card className={classes.card} sx={{margin:"15px"}}>
         {/* We use ButtonBase to make the whole component clickable */}
        <ButtonBase component="span" onClick={OpenItemDetails}>
           <CardMedia  component="img" height="194" width='194' image={image} title={title}/>
           <CardContent>
            <h3>{title}</h3>
           </CardContent>
           
        </ButtonBase>
        <Button sx={{width: "60%", margin:"10px auto"}} variant="contained" color="warning" onClick={handleItemDelete}>Delete Item</Button>
    </Card>


  )
}

export default Item
