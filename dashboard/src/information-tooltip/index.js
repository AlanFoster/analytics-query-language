import React from 'react';
import {Tooltip} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import './index.css';

class InformationTooltip extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    const id = "foo";

    return (
      <span className={`information-tooltip ${isOpen ? 'information-tooltip--open' : ''}`}>
        <div id={id} className='information-tooltip__call-to-action'>
          <FontAwesomeIcon icon={faQuestionCircle} color='#3eb4d4' />
        </div>
        <Tooltip
          placement={'top'}
          autohide={false}
          isOpen={isOpen}
          target={id}
          toggle={this.toggle}>
          {children}
        </Tooltip>
      </span>
    );
  }
}

export default InformationTooltip;
