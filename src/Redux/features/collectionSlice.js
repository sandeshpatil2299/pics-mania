import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState= {
    items: JSON.parse(localStorage.getItem("collection")) || []
}

const collectionSlice= createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addToCollection(state, action) {
            const alreadyExists= state.items.find(
                (item) => item.id === action.payload.id
            )

            if(!alreadyExists) {
                state.items.push(action.payload)
                localStorage.setItem('collection', JSON.stringify(state.items))
            }

            console.log("addToCollection running")
        },

        removeFromCollection(state, action) {
            state.items= state.items.filter(
                (item) => item.id !== action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.items))
        },

        clearCollection(state, action) {
            state.items= []
            localStorage.removeItem('collection')
        },

        toastPopup() {
            toast.success("Added to Collection")
        },

        toastPopupRemove() {
            toast.warning("Removed from Collection")
        },

        toastPopupRemoveCollection() {
            toast.warn("Removed Collection")
        }
    }
})

export const {addToCollection, removeFromCollection, clearCollection, toastPopup, toastPopupRemove, toastPopupRemoveCollection}= collectionSlice.actions
export default collectionSlice.reducer