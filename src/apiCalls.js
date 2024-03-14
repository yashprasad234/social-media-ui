import axios from "axios";

const REQUEST_URL = "http://localhost:3000/";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post(
      `${REQUEST_URL}api/auth/login`,
      userCredential
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    console.log("Login successful:", res);
    navigate("/");
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
    throw err;
  }
};
