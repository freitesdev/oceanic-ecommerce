import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from '../actions/types';
const initialState = {
    items: [
        { id: 5000, name: "testing item" },
        { id: 6000, name: "testing item 2" },
        { id: 7000, name: "testing item 3" }
    ]
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state
            };
        case DELETE_ITEMS:
            return {
                ...state,
                items: state.items.filter(item => item.id !==action.payload)
            }
        default:
            return state;
    }
}