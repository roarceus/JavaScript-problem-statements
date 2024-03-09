
/**
 * This function deep clones any JavaScript object and returns the cloned object.
 * No extrenal library should be use to implement this.
 *
 * @param {Object} objectToClone the object to clone.
 * @returns {Object} the cloned object
 */
export const clone = (objectToClone) => {
    if (objectToClone === null || typeof objectToClone !== 'object') {
        return objectToClone;
    }

    if (Array.isArray((objectToClone))) {
        return objectToClone.map((clone));
    }

    const clonedObject = {};
    for (const key in objectToClone) {
        if (objectToClone.hasOwnProperty(key)) {
            clonedObject[key] = clone(objectToClone[key]);
        }
    }
    
    return clonedObject;
}