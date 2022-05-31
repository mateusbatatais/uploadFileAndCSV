import { useState } from "react";
import getBase64 from "../../../utils/getBase64";

const UploadImage = () => {
  const initialValues = JSON.parse(localStorage.getItem("images") || "[]");
  const [preview, setPreview] = useState<any>();
  const [list, setList] = useState(initialValues || []);

  const submit = (event: any) => {
    event.preventDefault();
    const newList = [...list];
    if (preview) {
      newList.push(preview);
    }
    setList(newList);
    localStorage.setItem("images", JSON.stringify(newList));
  };

  const onChange = (e: any) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      setPreview(base64);
    });
  };

  return (
    <form onSubmit={submit}>
      <div className="mb-3">
        <label className="form-label">Upload a image</label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={onChange}
        />
      </div>
      {preview && (
        <img src={preview} width="200" alt="preview" className="mb-3" />
      )}

      <button type="submit" className="btn btn-primary d-flex">
        SEND
      </button>
    </form>
  );
};

export default UploadImage;
