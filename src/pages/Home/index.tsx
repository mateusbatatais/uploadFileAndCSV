import NavMenu from "../../components/molecules/NavMenu";
import UploadImage from "../../components/molecules/UploadImage";
import UploadCSV from "../../components/molecules/UploadCSV";

const Home = () => {
  return (
    <>
      <NavMenu />
      <div className="container">
        <UploadImage />
        <UploadCSV />
      </div>
    </>
  );
};

export default Home;
