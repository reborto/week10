import {useEffect, useReducer } from "react";
import { httpPOST } from "../../libs/http";
import styles from "./CreatePost.module.scss";

const INIT_STATE ={
  formPostObj:{
author:"",
text:"",
date: new Date().toISOString(),
photo:""

  }};

const reducer = (state, action) =>  {
  switch (action.type) {
    case "change-form":
      return {...state, formPostObj: {...state.formPostObj, [action.fieldName]:action.payload}};
        default:
          return state;
  }
};

const CreatePost = () => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const handleSendBtn = (event) => {
    event.preventDefault();
    httpPOST("/posts", state.formPostObj);
    dispatch ({type:"alert", payload: state});
  };

  useEffect(()=>{
    dispatch ({type:"alert", payload: false});
  })



  // useEffect(() => {
  //   setFormPostObj({
  //     author: authorInput,
  //     text: messageInput,
  //     date: new Date().toISOString(),
  //     photo: imgInput,
  //   });
  // }, [authorInput, imgInput, messageInput]);

  return (
    <div className={styles.createPost}>
      <form>
        <div className={styles.__author}>
          <input
            value={state.formPostObj.author}
            onChange={(e) => dispatch({ type: "change-form", fieldName: "author", payload: e.target.value })}
            name="author"
            id="author"
            type="text"
            placeholder="Author"
            required
          />

          <input
            onChange={(e) => dispatch({ type: "change-form", fieldName: "photo", payload: e.target.value })}
            value={state.formPostObj.photo}
            name="img"
            id="img"
            type="text"
            placeholder="Img URL"
          />

          <button type="submit" onClick={handleSendBtn}>
            SEND
          </button>
        </div>

        <textarea
          value={state.formPostObj.text}
          onChange={(e) => dispatch({ type: "change-form", fieldName: "text", payload: e.target.value })}
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
      </form>
    </div>
  );
};

export default CreatePost;
