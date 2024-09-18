import React,{useState} from 'react';


export default function TextForm(props) {

const handleUpClick = ()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
}
const handleLoClick = ()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");

}
const ClearText = ()=>{
    let newText="";
    setText(newText);
    props.showAlert("Text Cleared","success");

}

const handleOnChange = (event)=>{
    setText(event.target.value);
}
const[text,setText]=useState("Enter text here");
// setText("new text");
return(
    <>
<div className='container' style={{color: props.Mode==='dark'?'white':'black'}}>

<div className="mb-3" >
    <h1>{props.heading}</h1>
 <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  <div disabled={text.length===0} className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Conver to UpperCase</div>
  <div disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Conver to LowerCase</div>
  <div disabled={text.length===0} className="btn btn-primary my-3 mx-1 " onClick={ClearText}>Clear Text</div>


</div>


</div>
<div className="container my-3" style={{color: props.Mode==='dark'?'white':'black'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length }Minutes read</p>
    <h2>Preview</h2>  
    <p>{text}</p>
</div>
</>
);

}