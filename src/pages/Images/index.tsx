import NavMenu from "../../components/molecules/NavMenu";

const Images = () => {
  const imgs = JSON.parse(localStorage.getItem("images") || "[]");
  return (
    <>
      <NavMenu />
      <div className="container row">
        {imgs.map((src: string) => (
          <div className="col-3">
            <img key={src} src={src} alt="list itens" className="w-100" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Images;
