import React,{useState} from 'react'




export default function Textform(props) {
    const [text , setText] = useState('');
    const handleUpclick = ()=>{
       // console.log("clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowclick = ()=>{
      // console.log("clicked");
       let newText = text.toLowerCase();
       setText(newText);
   }
   const handleClearclick = ()=>{
    // console.log("clicked");
     let newText ="";
     setText(newText);
 }
 const handleCopyclick =()=>{

  let text = document.getElementById("mybox");
  text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
 }
 const handleRemoveSpaceclick =()=>{
    let text1 = text.split(/[ ]+/);
    setText(text1.join(" "))

 }
    
    const handleUpchange = (event)=>{
      //  console.log("changed");
        setText(event.target.value);
    }
    //setText("bhh");
    
  return (
     <>
    <div className="container" style={{color : props.mode==='dark'?'white':'#0a0d7a'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'#0a0d7a'}} onChange={handleUpchange} id="mybox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpclick}>Convert to upparcase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowclick}>Convert to lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleClearclick}>Clear text</button>
            <button className='btn btn-primary mx-1' onClick={handleCopyclick}>Copy text</button>
            <button className='btn btn-primary mx-1' onClick={handleRemoveSpaceclick}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'#0a0d7a'}}>
      <h1>Your text summary </h1>
      <p>{text.split(" ").length } words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length } minutes to Read</p>
      <h3>Preview</h3>
          <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
      </> 
  )
}
