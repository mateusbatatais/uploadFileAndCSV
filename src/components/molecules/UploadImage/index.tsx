import { useState } from "react";
import getBase64 from "../../../utils/getBase64";
import Toast from "../../atom/Toast";

const UploadImage = () => {
  const initialValues = JSON.parse(localStorage.getItem("images") || "[]");
  const [preview, setPreview] = useState<any>();
  const [list, setList] = useState(initialValues || []);
  const [toast, setToast] = useState(false);
  const [type, setType] = useState("");
  const [msg, setMsg] = useState("");

  const submit = (e: any) => {
    e.preventDefault();
    const newList = [...list];
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 3000);

    if (preview) {
      newList.push(preview);
      setList(newList);
      localStorage.setItem("images", JSON.stringify(newList));
      setType("success");
      setMsg("Image successfully added");
    } else {
      setType("warning");
      setMsg("You need to add a image");
    }
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
        SEND IMAGE
      </button>
      <Toast msg={msg} state={toast} type={type} />
    </form>
  );
};

export default UploadImage;
