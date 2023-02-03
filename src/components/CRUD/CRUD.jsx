import Create from "./Create/Create";
import Delete from "./Delete/Delete";
import Read from "./Read/Read";
import Update from "./Update/Update";
const CRUD = () => {
  return (
    <div>
      <Read />
      <Create />
      <Update/>
      <Delete/>
    </div>
  );
};

export default CRUD;
