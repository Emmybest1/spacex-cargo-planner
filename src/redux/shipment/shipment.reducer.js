import { types } from "./shipment.types";

export const initialState = {
    isLoading: true,
    error: null,
    shipment: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_SHIPMENT_REQUEST:
            return { ...state, isLoading: true };

        case types.FETCH_SHIPMENT_SUCCESS:
            return { ...state, isLoading: false, shipment: action.payload };

        case types.FETCH_SHIPMENT_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};
