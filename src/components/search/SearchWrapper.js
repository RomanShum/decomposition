import MenuItem from "./MenuItem";
import SearchMenuWrapper from "./SearchMenuWrapper";
import InputForm from "./InputForm";
import SearchSubTitle from "./SearchSubTitle";
import { v1 as uuidv1 } from "uuid";

function SearchWrapper({ menu, subtitle }) {
  const items = menu.map((item) => <MenuItem key={uuidv1()} data={item} />);
  return (
    <div>
      <SearchMenuWrapper>{items}</SearchMenuWrapper>
      <InputForm />
      <SearchSubTitle subtitle={subtitle} />
    </div>
  );
}

export default SearchWrapper;
