import react from "react";
import axios, {post} from "axios";

export default function UploadFile(){
  const onChange = (e) => {
    let files = e.target.files;
    console.warn("data file, ", files);
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      console.warn("file data ", e.target.result);
      const url = "http://127.0.0.1:3000/api/service";
      const formData = {file: e.target.result}
      return post(url, formData)
        .then(response => console.warn("result: ", response))
    }
  }
  
  return(
    <div >
      <input type="file" name="file" onChange={(e)=>onChange(e)}/>
    </div>
  )
}