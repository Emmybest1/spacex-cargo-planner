export const queryParam = (searchParam, searchParamToGet) => {
    const derivedQueryParams = new URLSearchParams(searchParam);
    const queryParamValue = derivedQueryParams.get(searchParamToGet);
    return queryParamValue;
};
