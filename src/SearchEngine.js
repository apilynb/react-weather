import React from "react";
import "./App.css";



export default function SearchEngine () {
return (
  <div className="SearchEngine">
    <div className="row">
        <div className="col-10">
          <form id="city-search"  >
            <div className="input-group mb-3">
              <input
                id="city-input"
                type="text"
                autoComplete="on"
                className="form-control searchBar shadow-sm"
                placeholder="Change City"
              />
              <input
                className="btn btn-outline-secondary shadow-sm"
                type="submit"
                id="button-addon2"
              />
            </div>
          </form>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-dark current">
            Current
          </button>
        </div>
     </div>
  </div>

);

}