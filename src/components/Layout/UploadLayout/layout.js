import Header from "../DefaultLayout/header/index";
import Upload from "~/pages/Upload/index";

function UploadLayout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Upload />
      </div>
    </div>
  );
}
export default UploadLayout;
