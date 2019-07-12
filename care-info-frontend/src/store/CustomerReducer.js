import { createStore } from "redux"

const INITIAL_STATE = {
    customerSearchResult: [
        {
            id: 1,
            name: "ramon",
            email: "ramon.ti@hotmail.com"
        }
    ]
};


function reducer(state = INITIAL_STATE, action) {
    if (action.type === "SEARCH_CUSTOMERS") {
        return {
            ...state,
            customerSearchResult: [
                {
                    id: 1,
                    name: "ramon",
                    email: "ramon.ti@hotmail.com"
                },
                {
                    id: 2,
                    name: "pipoca",
                    email: "pipoca@hotmail.com"
                }
            ]
        }
    }
    return;
}

const customerStore = createStore(reducer);

export default customerStore;