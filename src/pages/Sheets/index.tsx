import NavMenu from "../../components/molecules/NavMenu";

interface Item {
  name: string;
  data: string[];
}

const Sheets = () => {
  const csvs = JSON.parse(localStorage.getItem("csv") || "[]");

  return (
    <>
      <NavMenu />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">File name</th>
              <th scope="col">total</th>
            </tr>
          </thead>
          <tbody>
            {csvs.length ? (
              csvs.map((item: Item, i: number) => (
                <tr key={item.name}>
                  <th scope="row">{i + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.data.length}</td>
                </tr>
              ))
            ) : (
              <p className="container">no csv to display</p>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Sheets;
