import { types } from "./shipments.types";

export const initialState = {
    isLoading: true,
    error: null,
    shipments: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_SHIPMENTS_REQUEST:
            return { ...state, isLoading: true };

        case types.FETCH_SHIPMENTS_SUCCESS:
            return { ...state, isLoading: false, shipments: action.payload };

        case types.FETCH_SHIPMENTS_FAILURE:
            return { ...state, isLoading: false, error: action.payload };

        default:
            return state;
    }
};
