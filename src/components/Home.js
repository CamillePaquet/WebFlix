import InputSearch from "./InputSearch";
import GridCards from "./GridCards";
import films from "../films.json";
import { useState } from "react";

function Home() {
  const [value, setValue] = useState();
  const onChange = (event) => setValue(event.target.value);

  return (
    <div>
      <InputSearch value={value} onChange={onChange}></InputSearch>
      <GridCards data={films}></GridCards>
    </div>
  );
}

export default Home;
