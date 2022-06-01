import NavMenu from "../../components/molecules/NavMenu";

const Images = () => {
  const imgs = JSON.parse(localStorage.getItem("images") || "[]");
  return (
    <>
      <NavMenu />
      <div className="container">
        {imgs.length ? (
          imgs.map((src: string) => (
            <div className="col-6 col-sm-3">
              <img
                key={src}
                src={src}
                alt="list itens"
                className="w-100 mb-3"
              />
            </div>
          ))
        ) : (
          <p className="container">No images</p>
        )}
      </div>
    </>
  );
};

export default Images;
