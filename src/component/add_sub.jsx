import { useDispatch } from "react-redux";
import { actionCreators }from "../state/index";
function Add(){
    const dispatch = useDispatch();
    
    return(
        <>
        <button onClick={() => {dispatch(actionCreators.addCount(100))}} >+</button>
        <button onClick={() => {dispatch(actionCreators.subCount(100))}} >-</button>
        </>
    );
}
export default Add;