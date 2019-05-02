import { getState } from "../store"

/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const get = (i) => {
    let list = getState();
    try {
        return list[i];
    }
    catch (e) {
        return null;
    }
};

export default get;
