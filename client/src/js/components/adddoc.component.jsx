import React, { Component } from 'react';
import { Link } from 'react-router';
import CreateDocument from './docs/docForm.component'

class AddDoc extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    $('.modal').modal({
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      // ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      //   alert("Ready");
      //   console.log(modal, trigger);
      // },
      complete: function () { alert('Closed'); } // Callback for Modal close
    });
  }
  render() {
    return (
      <div className="inline">
        <Link data-target="modal" id="createDoc" className="waves-effect waves-light btn-large">
          <i className="material-icons left">add_circle_outline</i>
          Add Documents
          </Link>
        <div id="modal" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4>Create a Document</h4>
            <CreateDocument />
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat ">Done</a>
          </div>
        </div>
      </div>
    )
  }
}

export default AddDoc;