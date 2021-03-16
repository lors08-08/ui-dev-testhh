import axios from "axios";

export function loadItems() {
  return (dispatch) => {
    dispatch({ type: "events/load/start" });
    axios
      .get("https://603e38c548171b0017b2ecf7.mockapi.io/homes")
      .then(({ data }) => {
        dispatch({
          type: "items/load/succeed",
          payload: data,
        });
      })
      .catch((e)=>{
        dispatch({
          type:"items/load/error"
        })
      });
  };
}
