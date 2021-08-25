
 import { FETCH_POST_DETAILS } from '../../constants/actionTypes';
const postDetails = (details = [] , action) => {
    

    switch (action.type) {
        case FETCH_POST_DETAILS:
            return action.payload; 
        default:
           return details;
    }

}

export default postDetails;

 