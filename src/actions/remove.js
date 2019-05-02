import { getState, setState } from "../store"

/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const remove = (i) => {
    let list = getState();
    try {
        list.splice(i, 1);
    } finally {
        setState(list);
    }
};

export default remove;
