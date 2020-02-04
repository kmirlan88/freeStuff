import React from 'react';

function Form() {
  return (
    <div class="ui form">
        <div class="three fields">
            <div class="field">
            <label>Street Address</label>
            <input type="text" placeholder="Street Address" />
      </div>
      <div class="field">
        <label>State</label>
        <input type="text" placeholder="State" />
      </div>
      <div class="field">
        <label>Country</label>
        <input type="text" placeholder="Country" />
      </div>
    </div>
    <img class="ui medium rounded image" src="https://semantic-ui.com/images/wireframe/square-image.png"></img>
    <div class="field">
            <label>Descripton:</label>
            <textarea></textarea>
        </div>
        <button class="ui primary button">
            Post
            </button>
  </div>
  );
}

export default Form;