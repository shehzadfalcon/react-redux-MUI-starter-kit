import { setToken } from "../slices/auth.slice";
import { postRequest } from "../../config/axiosConfig";

export function signInAsync(email, password) {
  return async (dispatch, _getState) => {
    try{
      const data = await postRequest("user/login", {
        email: "member420@gmail.com",
        password: "123456"
      });
      dispatch(setToken(data.result.token.accessToken));
      return true;
    }catch(e){
      console.log("Error -->", e);
      dispatch(setToken(""));
      return false;
    }
  }
}

export function signOutAsync(){
  return async (dispatch) => {
    dispatch(setToken(""));
    dispatch({type: "signout/logout"})
    return true;
  }
}