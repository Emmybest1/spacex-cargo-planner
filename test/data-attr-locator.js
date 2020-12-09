export const dataAttributeLocator = (component, dataTestAttributeValue) => {
    return component.find(`[data-test="${dataAttributeLocator}"]`);
};
