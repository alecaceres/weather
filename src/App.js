import { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
  // form state
  const [search, setSearch] = useState({
      city: "",
      country: ""
  });
  
  const [query, setQuery] = useState(false);
  const [result, setResult] = useState({});
  
  const { city, country } = search;

  useEffect( () => {
    const queryAPI = async () => {
      if (query){
        const APIkey = "aff4569e4c8bdfbaad815ed184006aa6";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appId=${APIkey}`
        const resp = await fetch(url);
        const result = await resp.json();
        setResult(result);
      }
    }
    queryAPI();
    setQuery(false);
  },
  [query])

  return (
    <Fragment>
      <Header
        title="React App Weather"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setQuery={setQuery}
                />
            </div>
            <div className="col m6 s12">
              <Weather
                result={result}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
