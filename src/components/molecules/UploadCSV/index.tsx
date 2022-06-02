import { useState } from "react";
import Toast from "../../atom/Toast";
import Papa from "papaparse";

const UploadCSV = () => {
  const initialValues = JSON.parse(localStorage.getItem("csv") || "[]");
  const [file, setFile] = useState<any>();
  const [list, setList] = useState(initialValues);

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

    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function (results: any) {
          newList.push({ name: file.name, data: results.data });
          const arrValues = results.data.map((item: any) => item.total);

          function onlyNumbers(array: any) {
            return array.every((element: any) => {
              const num = parseInt(element);
              return !isNaN(num);
            });
          }

          const valid = "total" in results.data[0] && onlyNumbers(arrValues);

          if (valid) {
            setList(newList);
            localStorage.setItem("csv", JSON.stringify(newList));
            setType("success");
            setMsg("csv successfully added");
          } else {
            setFile(undefined);
            setType("warning");
            setMsg("incorrect csv file");
          }
        },
      });
    } else {
      setType("warning");
      setMsg("You need to add a csv");
    }
  };
  const onChange = (e: any) => {
    const file = e.target.files[0];
    const parts = file.name.split(".");
    const ext = parts[parts.length - 1];
    if (ext !== "csv") {
      setType("danger");
      setMsg("Only csv files are accepted");
      setToast(true);
      setTimeout(() => {
        setToast(false);
      }, 3000);
      setFile(undefined);
    } else {
      setFile(file);
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="my-3">
        <label className="form-label">Upload a CSV</label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          onChange={onChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={!file}>
        SEND CSV
      </button>
      <Toast msg={msg} state={toast} type={type} />
    </form>
  );
};

export default UploadCSV;
