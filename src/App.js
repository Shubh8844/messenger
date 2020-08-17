import React, { useState,useEffect} from "react";
import "./styles.css";
import {Button,FormControl,InputLabel,Input,FormHelperText} from "@material-ui/core"
import  Message from "./Message"
import db from "./Firebase.js"
import firebase from "firebase"
import Flipmove from "react-flip-move"
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

export default function App() {
  const [input,setInput]=useState("");
  const [messages,setMessages]=useState([{username:"KS",message:"Yo!!"}]);
  const [username,setUser]=useState("");

 
  
  const sendMessage= (event) =>{
    event.preventDefault();
    db.collection("messages").add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),

    })
    
    setInput("");
  }
  useEffect(()=>{
    db.collection("messages")
    .orderBy("timestamp","desc")
    .onSnapshot(snapshot =>{
        setMessages(snapshot.docs.map(doc =>({id:doc.id,message:doc.data()})))
    })
  },[])

  useEffect(()=>{
    //directly using the setUser using promt rather 
    //than declaring var and assing back an calling function

    setUser(prompt("Hi Welcome!! Please provide your name to start Conversation !!"));
  },[])
  return (
    <div className="App">
      <img src="data:image/png;base64,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" />
      
      <h1>Hello {username?username:"Anonymous"} welcome!! </h1>

   

      <form className="app__form">
      <FormControl className="app__formControl">
        
        <Input className="app__input" placeholder="Enter a message..." value={input} type="text" onChange={(event => setInput(event.target.value))} />
        
        <IconButton className="app__iconBitton" disabled={!input} variant ="contained" color="primary" type="submit" onClick={sendMessage}>
          <SendIcon />
        </IconButton>  
        
      </FormControl>
        
      </form>
    <Flipmove>
     {messages.map( ({id,message}) =>{
        return <Message key={id} username={username} message={message}/>
     })}
    </Flipmove>

    </div>
  );
}
