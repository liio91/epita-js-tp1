import { getState, setState } from "../store"


/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/

const update = (i, url) => {
    let list = getState();
    try {
        list[i] = url;
    } finally {
        setState(list);
    }
};

export default update;
