import fakeStore from "../apis/fakeProduct";

export const addProduct = () =>  {
    return async (dispatch) => {
        const response = await fakeStore.get("/products");  
        dispatch({
            type: "fatch_product",
            payload: response.data
        })
    }
}

