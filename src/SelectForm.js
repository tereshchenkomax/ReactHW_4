import React, { Component } from "react";

class SelectForm extends Component {
  static formOptions = ["apple", "cherry", "grape", "orange", "pear", "peach"];
  state = { multiline: "", commaSeparated: "", multiSelect: [] };

  handleCommaSeparateChange = ({ target }) => {
    let opt = SelectForm.formOptions;
    let match = target.value.split(",").filter(item => {
      return opt.indexOf(item) > -1;
    });
    this.setState({
      commaSeparated: target.value,
      multiline: match.map(i => (i = i + "\n")).join(""),
      multiSelect: match
    });
  };

  handleMiltilineChange = ({ target }) => {
    let opt = SelectForm.formOptions;
    let match = target.value.split("\n").filter(item => {
      return opt.indexOf(item) > -1;
    });

    this.setState({
      multiline: target.value,
      commaSeparated: match,
      multiSelect: match
    });
  };

  handleMiltiselectChange = ({ target }) => {
    let { multiSelect } = this.state;
    if (multiSelect.indexOf(target.value) > -1) {
      this.setState({
        multiSelect: multiSelect.filter(item => item !== target.value),
        multiline: multiSelect.filter(item => item !== target.value),
        commaSeparated: multiSelect.filter(item => item !== target.value)
      });
    } else {
      this.setState({
        multiSelect: [...multiSelect, target.value],
        multiline: [...multiSelect, target.value]
          .map(i => (i = i + "\n"))
          .join(""),
        commaSeparated: [...multiSelect, target.value]
      });
    }
  };

  render() {
    let { multiline, commaSeparated, multiSelect } = this.state;
    return (
      <div className="container">
        <form>
          <div>
            <label>Comma separated values</label>
            <input
              onChange={this.handleCommaSeparateChange}
              type="text"
              className="form-control"
              value={commaSeparated}
            />
          </div>

          <div>
            <label>Multiline values</label>
            <textarea
              className="form-control"
              rows={SelectForm.formOptions.length}
              onChange={this.handleMiltilineChange}
              value={multiline}
            />
          </div>
          <div>
            <select
              multiple
              size={SelectForm.formOptions.length}
              onChange={this.handleMiltiselectChange}
              value={multiSelect}
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
