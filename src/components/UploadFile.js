import react from "react";

export default function UploadFile(){
  const onChange = (e) => {
    let files = e.target.files;
    console.warn("data file, ", files);
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      console.warn("file data ", e.target.result)
    }
  }
  
  return(
    <div >
      <input tye="file" name="file" onChange={(e)=>onChange(e)}/>

    </div>
  )
}