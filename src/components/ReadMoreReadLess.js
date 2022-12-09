import React, { useEffect, useState } from "react";
import "../App.css";

const Content = () => {

  const [readMore, setReadMore] = useState(true);
  const [click ,setClick]=useState()
  const [test, setTest] = useState("");
  const [value, setValue] = useState(false);

 
  const data = "    Lorem ipsum dolor sit amet consectetur adipiijjjjjjjjjjjisicinghkhkhhkkhhhhlkkirrnnn hkhkhhkhkhkhhkhhkhkhkhhkhkhhkhkhkhkhkhkhkhkjjhkhkhkhkhhkhjjjjjkhkhkhkj";
  const word = data.slice(0, 150 ) + "...";
  // console.log(word);
  console.log(data.length);
  //   const handleReadmore = ()=>{
  // if(data.length<150){
  //   setValue(word+"...")
  // }else{
  //   setValue(data)
  // }

  // }
  const handleClick = ()=>{
   setReadMore(!readMore);
    
  }
 

  useEffect(() => {
    
    if (data.length < 150) {
     
      setValue(true);
    
      setTest(data)
    }  if(data.length ===150) {
      setValue(false)
    setTest(word)
    }else{
     setValue(true)
      setTest(data)
    }
  
    
    // console.log(value);
  }, [data]);

  // console.log(text);

  return (
    <div className="container">
      {value===false && readMore ? <>{word}</> : test}
     
       <span onClick={handleClick}>
       {readMore?(" read-More"): ("read-less")}
      </span> 
    </div>
  );
};

export default Content;
