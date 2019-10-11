// import React from 'react';
// import { connect } from 'react-redux';
// import * as actionCreators from '../states/actionCreators';

// export function Smurf({ formValues, changeInput }) {
//   const onValueChange = event => {
//     changeInput(event.target);
//   };

//   const onFormSubmit = event => {
//     event.preventDefault();
//     alert(`submitting ${formValues.lname}, ${formValues.fname}`);
//   };

//   return (
//     <form className='component' onSubmit={onFormSubmit}>
//       <label>Name
//         <input value={formValues.fname} onChange={onValueChange} name='fname' placeholder="Name"/>
//       </label><br />

//       <label>Height
//         <input value={formValues.lname} onChange={onValueChange} name='lname'  placeholder="Height"/>
//       </label><br />

//       <label>Height
//         <input value={formValues.lname} onChange={onValueChange} name='lname'  placeholder="Height"/>
//       </label><br />

//       <input type='submit' />
//     </form>
//   );
// }

// export default connect(
//   state => state,
//   actionCreators,
// )(Smurf);

import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../states/actionCreators";

export function SmurfForm(props) {
  const { getFormValue, postSmurfs, smurfForm } = props;

  const submit = smurfForm => event => {
    event.preventDefault();
    postSmurfs(smurfForm);
  };

  return (
    <form className="smurf-form">
      <input
        value={props.name}
        onChange={getFormValue}
        name="name"
        type="text"
        placeholder="name"
      />
      <br />

      <input
        value={props.age}
        onChange={getFormValue}
        name="age"
        type="text"
        placeholder="age"
      />
      <br />

      <input
        value={props.height}
        onChange={getFormValue}
        name="height"
        type="text"
        placeholder="height"
      />
      <br />
      <button onClick={submit(smurfForm)}>Submit</button>
    </form>
  );
}

export default connect(
  state => state,
  actionCreators
)(SmurfForm);
