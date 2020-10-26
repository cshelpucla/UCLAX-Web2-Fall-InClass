
import { ActionTypes } from './actionTypes';

export const bidsUpdate = (bids) => {
    return {
        type: ActionTypes.BM_BIDS_UPDATE,
        bids: bids,
    }

}

export const addLotToBids = (lot) => {
    return (dispatch, getState) => {
        const {bidManager: { bids }} = getState();
        
        // cloning
        let newBids = [...bids]

        // check to see if this bid is already in bid mananager
        const alreadyExists = newBids.find((newBid) => {
            return (newBid.lot.id === lot.id)
        })

        if (!alreadyExists) {
            newBids ({
                lot: lot,
                low: 0,
                high: 0,
            });

            return dispatch(bidsUpdate(newBids))
        }
    }
}

export const removeLotFromBids = (lot) => {
    return (dispatch, getState) => {
        const {bidManager: { bids }} = getState();
        
        // cloning
        let newBids = bids.filter((bid) => {
            return (bid.lot.id !== lot.id)
        });

        // check to see if this bid is already in bid mananager

        return dispatch(bidsUpdate(newBids))
    }
}


export const addBidToBids = (lot) => {
    return (dispatch, getState) => {
        const {bidManager: { bids }} = getState();
        
        // cloning
        let newBids = [...bids]

        // check to see if this bid is already in bid mananager
        const alreadyExists = newBids.find((newBid) => {
            return (newBid.lot.id === lot.id)
        })

        if (!alreadyExists) {
            newBids ({
                lot: lot,
                low: 0,
                high: 0,
            });

            return dispatch(bidsUpdate(newBids))
        }
    }
}

export const removeBidFromBids = (lot) => {
    return (dispatch, getState) => {
        const {bidManager: { bids }} = getState();
        
        // cloning
        let newBids = bids.filter((bid) => {
            return (bid.lot.id !== lot.id)
        });

        // check to see if this bid is already in bid mananager

        return dispatch(bidsUpdate(newBids))
    }
}