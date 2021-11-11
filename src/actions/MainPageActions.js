
export const ADD_POST = 'ADD_POST';
export const DEL_POST = 'DEL_POST';


const postAction = (type, value) =>{
        if(type===ADD_POST){
            console.log('ADD_POST_ACTION')
            return{type: ADD_POST,
                payload: value}
        }else{
            console.log('DEL_POST_ACTION')
            return{type: DEL_POST,
                payload: value}
        }
}
export default postAction