import { useRef } from "react";
import uniqid from "uniqid";

export const useUniqueIds = (count) => useRef(Array(count).fill(uniqid())).current;
