import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Forecast_Context } from "./Context";
import { sizing } from "@material-ui/system";

const AutoCompleteSearch = () => {
  const [data, setData] = useState([]);
  const { setCityName, setCityKey } = useContext(Forecast_Context);
  const reason = "clear";

  async function fetch_autoComplete(e) {
    if (e.target.value !== "") {
      const url =
        "https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Zfo3zMIGUFpf44SjmscYCEAFZRoCbLY8";
      const search_value = e.target.value;
      const q = "&q=";
      const fetched_data = await fetch(url + q + search_value);
      const jsoned = await fetched_data.json();
      setData(jsoned);
    }
  }

  const updateCity = (e, value, reason) => {
    if (value !== null) {
      setCityName(value.LocalizedName.replace(" ", "+"));
      setCityKey(value.Key);
    }
  };

  return (
    <Autocomplete
      id="autocomplete search"
      options={data}
      loadingText="Loading..."
      getOptionLabel={option => option.LocalizedName}
      style={{ width: "80%" }}
      size="small"
      onInputChange={fetch_autoComplete}
      onChange={updateCity}
      renderInput={params => (
        <TextField
          style={{ width: "100%" }}
          placeholder="Select City"
          {...params}
          label=""
          variant="outlined"
        />
      )}
    />
  );
};

export default AutoCompleteSearch;
