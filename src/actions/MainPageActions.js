export const ADD_POST = 'ADD_POST';
export const DEL_POST = 'DEL_POST';


const postAction = (type, value) =>{
        if(type==='ADD_POST'){
            return{type: ADD_POST,
                payload: value}
        }else{
            return{type: DEL_POST,
                payload: value}
            
        }
}
export default postAction