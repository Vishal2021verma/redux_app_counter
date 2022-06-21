import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators }from "../state/index";
import ProductCard from "./productCard";
import "./products.css";

function Add(){
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(actionCreators.addProduct());
    },[]);

    return(
        <>
            <div className="product-container">
                <ProductCard />
            </div>      
        </>
    );
}
export default Add;