import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class MyApp extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-primary">hello word</button>
      </div>
    )
  }
}

ReactDOM.render(<MyApp />, document.getElementById('app'));