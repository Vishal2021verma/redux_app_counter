import { useSelector } from 'react-redux' ;
function Balance(){
    
    const state = useSelector(state => state.count);
    
    return (
        <>
       <h3>Count: {state}</h3>
        </>
    );
}
export default Balance;