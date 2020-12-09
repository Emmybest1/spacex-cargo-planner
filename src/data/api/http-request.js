import axios from "axios";

export const get = (endpoint) => axios.get(endpoint);

export const post = (endpoint, data) => axios.post({ url: endpoint, data });

export const del = (endpoint, id) => axios.delete(`${endpoint}/${id}`);

export const getShipment = (endpoint, id) => axios.get(`${endpoint}/?id=${id}`);
