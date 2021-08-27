import React, {Component} from 'react';
import './post-status-filter.css';
import { Button } from 'reactstrap';

class PostStatusFilter extends Component {
  constructor(props) {
    super(props);
    this.buttons = [
      {name: 'all', label: 'все'},
      {name: 'like', label: 'понравилось'},

    ]
  }
  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const {filter, onFilterSelect} = this.props;
      const active = filter === name;
      const cl = active ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button
          className={`btn ${cl}`}
          type="button"
          key={name}
          onClick={() => onFilterSelect(name)}
        >
            {label}
        </button>
        // <Button outline color='info'>Все</Button>
      )
    });
    return (
      <div className="btn-group">
        {buttons}
      </div>
    )
  }
}

export default PostStatusFilter;
