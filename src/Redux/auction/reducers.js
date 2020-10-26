
import auction from '../../common/static-data/auction';
import { ActionTypes } from '../bidManager/actionTypes.js';

const auctionReducer = (state = auction, action) => {
    switch(action.type) {
        default:
            return state;
    }
}
export default auctionReducer;