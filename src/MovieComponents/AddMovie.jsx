import React, { useState } from "react";

const AddMovie = (props) => {
  //add a control component
  const [name, setName] = useState("");

  function submitAddMovieForm(e, props) {
    e.preventDefault();
    props.handleAddMovie(name); // invoke the parent method
    setName("");
  }

  return (
    <form onSubmit={(e) => submitAddMovieForm(e, props)}>
      <div className="row text-white">
        <div className="col-12 text-center py-1 h4 text-success">Add Movie</div>
        <div className="col-8 offset-1">
          <input
            type="text"
            className="form-control"
            placeholder="Movie Name..."
            value={name} //add a control component
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success form-control">Add</button>
        </div>
        <hr className="mt-3"></hr>
      </div>
    </form>
  );
};

export default AddMovie;
