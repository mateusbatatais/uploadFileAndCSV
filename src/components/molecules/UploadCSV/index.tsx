const UploadCSV = () => {
  const submit = (event: any) => {};
  const onChange = (e: any) => {};
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
      <button type="submit" className="btn btn-primary">
        SEND
      </button>
    </form>
  );
};

export default UploadCSV;
