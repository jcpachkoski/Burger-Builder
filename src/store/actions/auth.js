import * as actionTypes from "./actionTypes";
import axios from "axios";

const authStart = () => {
	return {
		type: actionTypes.AUTHCHECK_START
	};
};

const authSuccess = data => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		payload: { token: data.idToken, userId: data.localId }
	};
};

const authFailed = error => {
	return {
		type: actionTypes.AUTH_FAILED,
		payload: { errorMessage: error }
	};
};

export const authCheck = (data, isSignup) => {
	return dispatch => {
		dispatch(authStart());
		let url =
			"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBVtz3DTZdyEd9zgVPWifmmuUeeU_2-LFU";
		if (!isSignup) {
			url =
				"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBVtz3DTZdyEd9zgVPWifmmuUeeU_2-LFU";
		}

		axios
			.post(url, data)
			.then(res => {
				dispatch(authSuccess(res.data));
				console.log("Result came==>", res);
			})
			.catch(err => {
				dispatch(authFailed(err.response.data.error.message));
				console.log("Error came==>", err.response.data.error.message);
			});
	};
};

export const removeError = () => {
	return {
		type: actionTypes.REMOVE_ERRORS
	};
};

export const signout = timeoutDuration => {
	return dispatch => {
		setTimeout(() => {
			dispatch({ type: actionTypes.SIGNOUT });
		}, timeoutDuration * 1000);
	};
};
