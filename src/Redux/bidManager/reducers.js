import auction from '../../common/static-data/auction'
import { ActionTypes } from '../bidManager/actionTypes.js';
const defaultState = {
    bids: [],    
}

const bidManagerReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ActionTypes.BM_BIDS_UPDATE:
            return {
                ...state,
                bids: auction.bids,
            }
        default: return state;

    }
}

export default bidManagerReducer;