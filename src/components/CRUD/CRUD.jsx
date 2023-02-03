import Create from "./Create/Create";
import Read from "./Read/Read";
import Update from "./Update/Update";
const CRUD = () => {
  return (
    <div>
      <Read />
      <Create />
      <Update/>
    </div>
  );
};

export default CRUD;
