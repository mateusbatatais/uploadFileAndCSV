import NavMenu from "../../components/molecules/NavMenu";

const Images = () => {
  const imgs = JSON.parse(localStorage.getItem("images") || "[]");
  return (
    <>
      <NavMenu />
      <div className="container">
        <div className="row">
          {imgs.length ? (
            imgs.map((src: string) => (
              <div className="col-6 col-sm-3" key={src}>
                <img src={src} alt="list itens" className="w-100 mb-3" />
              </div>
            ))
          ) : (
            <p className="container">No images</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Images;
