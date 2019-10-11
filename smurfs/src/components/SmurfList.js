import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../states/actionCreators";

export function SmurfList({ fetchSmurfAPI, api, state, name}) {
    // debugger
    useEffect(() => {
        fetchSmurfAPI();
    }, []);
    console.log(api[0]);
    return (<>
       {
				api.length ? api.map(api => (
					<div className="smurf">
						<div className="smurf_name">Name: {api.name}</div>
						<div className="smurf_age">Age: {api.age}</div>
						<div className="smurf_height">Height: {api.height}</div>
					</div>
				)) : "No smurfs found"
			}
      {}</>
    );
  }
  
  export default connect(
    // state => state.api,
    function mapStateToProps(state) {
        // console.log(state.api[0]);
        return {
          api: state.api
        };
      },
    actionCreators
  )(SmurfList);
//   {this.state.player.map(player => {
//     return (
//       <table>
//         <tbody>
//           <tr>
//             <td> {player.id}</td>
//             <td> {player.name}</td>
//             <td> {player.country}</td>
//             <td> {player.searches}</td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   })}