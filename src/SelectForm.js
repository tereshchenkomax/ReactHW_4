import React, { Component } from "react";

class SelectForm extends Component {
  static formOptions = ["apple", "cherry", "grape", "orange", "pear", "peach"];

  state = { multiline: "", commaSeparated: "", multiSelect: [] };

  handleCommaSeparateChange = e => {
    console.log("handleCommaSeparateChange");
  };
  handleMiltilineChange = e => {
    console.log("handleMultilineChange");
  };
  handleMiltiselectChange = e => {
    console.log("handleMultiselectChange");
  };

  render() {
    return (
      <div className="container">
        <form>
          <div>
            <label>Comma separated values</label>
            <input
              onChange={this.handleCommaSeparateChange}
              type="text"
              className="form-control"
            />
          </div>

          <div>
            <label>Multiline values</label>
            <textarea
              className="form-control"
              rows={SelectForm.formOptions.length}
              onChange={this.handleMiltilineChange}
            />
          </div>
          <div>
            <select
              multiple
              size={SelectForm.formOptions.length}
              onChange={this.handleMiltiselectChange}
            >
              {SelectForm.formOptions.map((el, i) => (
                <option value={el} key={i}>
                  {el}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default SelectForm;
