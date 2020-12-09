import { useLayoutEffect, useRef, useCallback } from "react";

const useUnsafeDispatch = (dispatch) => {
    const isMounted = useRef(false);

    useLayoutEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, [dispatch]);

    return useCallback(
        (...args) => {
            isMounted.current ? dispatch(...args) : void 0;
        },
        [dispatch]
    );
};

export default useUnsafeDispatch;
