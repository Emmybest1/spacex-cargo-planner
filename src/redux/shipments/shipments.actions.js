import { types } from "./shipments.types";
import { get } from "../../data/api/http-request";

export const fetchShipmentsSuccess = (payload) => ({
    type: types.FETCH_SHIPMENTS_SUCCESS,
    payload,
});

export const fetchShipmentsFailure = (payload) => ({
    type: types.FETCH_SHIPMENTS_FAILURE,
    payload,
});

export const fetchShipmentsRequest = () => (dispatch) => {
    get("http://localhost:5000/shipments/")
        .then((response) => {
            dispatch(fetchShipmentsSuccess(response.data));
        })
        .catch((error) => {
            dispatch(fetchShipmentsFailure(error.message));
        });
};
