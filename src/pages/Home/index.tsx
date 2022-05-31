import NavMenu from "../../components/molecules/NavMenu";

const Home = () => {
  const submit = (event: any) => {};
  const onChange = (e: any) => {};
  return (
    <>
      <NavMenu />
      <div className="container pt-3">
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

          <div className="mb-3">
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
      </div>
    </>
  );
};

export default Home;
