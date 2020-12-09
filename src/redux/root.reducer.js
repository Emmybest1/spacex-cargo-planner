import { combineReducers } from "redux";
import { reducer as shipmentReducer } from "./shipment/shipment.reducer";
import { reducer as shipmentsReducer } from "./shipments/shipments.reducer";

export const rootReducer = combineReducers({
    shipment: shipmentReducer,
    shipments: shipmentsReducer,
});
