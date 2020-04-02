import React, { useState, useContext, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Forecast_Context } from "./Context";
import { sizing } from "@material-ui/system";
import { debounce } from "lodash";

const AutoCompleteSearch = () => {
  const [data, setData] = useState([]);
  const { setCityName, setCityKey } = useContext(Forecast_Context);
  const [isLoading, set_isLoading] = useState(false);
  const reason = "Clear";

  const fetch_autoComplete = text => {
    set_isLoading(true);
    const fetchData = debounce(async text => {
      if (text !== "") {
        const url =
          "https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=Zfo3zMIGUFpf44SjmscYCEAFZRoCbLY8";
        const search_value = text;
        const q = "&q=";
        const fetched_data = await fetch(url + q + search_value);
        const jsoned = await fetched_data.json();
        setData(jsoned);
        set_isLoading(false);
      } else setData([]);
    }, 1200);
    fetchData(text);
  };

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
      loading={isLoading}
      loadingText="Loading..."
      selectOnFocus={true}
      getOptionLabel={option => option.LocalizedName}
      style={{ width: "80%" }}
      size="small"
      onInputChange={e => fetch_autoComplete(e.target.value)}
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
