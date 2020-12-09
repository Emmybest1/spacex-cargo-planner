import { types } from "./shipment.types";
import { getShipment } from "../../data/api/http-request";

export const fetchShipmentSuccess = (payload) => ({
    type: types.FETCH_SHIPMENT_SUCCESS,
    payload,
});

export const fetchShipmentFailure = (payload) => ({
    type: types.FETCH_SHIPMENT_FAILURE,
    payload,
});

export const fetchShipmentRequest = (id) => (dispatch) => {
    getShipment("http://localhost:5000/shipments/", id)
        .then((response) => {
            dispatch(fetchShipmentSuccess(response.data));
        })
        .catch((error) => {
            dispatch(fetchShipmentFailure(error.message));
        });
};
