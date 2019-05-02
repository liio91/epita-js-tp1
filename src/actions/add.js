import { getState, setState } from "../store"

/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/

const add = (elm) => {
    let list = getState();
    const newState = [...list, elm]
    setState(newState)
};

export default add;
