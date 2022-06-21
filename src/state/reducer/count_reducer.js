const initalState = {
product :[]
};

const reducer = (state = initalState, action) => {
    if(action.type === "fatch_product"){
        return {
            ...state,
            count: action.payload
        }
    }
    else{
        return state ;
    }
}

export default reducer;