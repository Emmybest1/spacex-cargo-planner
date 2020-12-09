export const _cargoBays = (boxes) => {
    if (boxes) {
        const cargoBoxesCollection = boxes.split(",");
        const cargoBay = cargoBoxesCollection.reduce((acc, curr) => (acc += Number(curr)), 0);
        return Math.ceil(cargoBay / 10);
    }
    return 0;
};
