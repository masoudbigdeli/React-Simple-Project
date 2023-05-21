import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ItemsListState: [{
        "title": "English class",
        "image": "https://blog.faradars.org/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/09/react.jpg.webp",
        "details": "This is information about English class task"
    },
    {
        "title": "Clean House",
        "image": "https://blog.faradars.org/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/09/react.jpg.webp",
        "details": "This is information about Clean House task"
    },
    {
        "title": "Go gym",
        "image": "https://blog.faradars.org/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/09/react.jpg.webp",
        "details": "This is information about Go gym task"
        
    },
    {
        "title": "Guitar class",
        "image": "https://blog.faradars.org/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/09/react.jpg.webp",
        "details": "This is information about Guitar class task"
    },
    {
        "title": "Go to work",
        "image": "https://blog.faradars.org/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/09/react.jpg.webp",
        "details": "This is information about Go to work task"
    },
    {
        "title": "Sleep",
        "image": "https://blog.faradars.org/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2018/09/react.jpg.webp",
        "details": "This is information about Sleep task"
    },]
}

export const slice = createSlice({
    name: 'Items',
    initialState,
    reducers: {
        setItemsListState : (state, actionArgument) => {
            state.ItemsListState = actionArgument.payload;
          },
    }
});


export const { setItemsListState } = slice.actions;
export const selectItemsListState = (state) => state.ItemsReducer.ItemsListState;



export default slice.reducer;