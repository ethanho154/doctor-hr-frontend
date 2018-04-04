import React from 'react';
import axios from 'axios';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

var styles = {
	"dataStyle": {
		"marginTop": "20px",
		"marginBottom": "20px",
		"color": "blue",
	}
}

class FetchData extends React.Component {
	constructor() {
		super();
		this.state = {
			"data": ["Nothing yet"],
    	"nameTextField": "",
		};
	}

  onNameTextFieldChange = (event) => {
    // Update the nameTextField state whenever the text field is changed or perturbed in any way:
    this.setState({"nameTextField": event.target.value});
  }

  onButtonClick = (event) => {
		console.log(this.state.nameTextField); // log the current nameTextField content
	}

	getData = () => {
    var db = "http://vcm-3591.vm.duke.edu:5000/api/heart_rate/"
    var email = this.state.nameTextField
		axios.get(db+email).then( (response) => {
			console.log(response);
			console.log(response.status);
      var str = JSON.stringify(response.data)
			this.setState({"data": str});
		})
	}

	render() {
		return (
			<div>
        <TextField
          value={this.state.nameTextField}
          onChange={this.onNameTextFieldChange}/>

        <Button variant="raised" onClick={this.getData}>
					Get Data
				</Button>

				<div style={styles.dataStyle}>
					{this.state.data}
				</div>
			</div>
		)
	}
}

export default FetchData;
