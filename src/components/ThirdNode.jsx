import React from "react";
import { format } from 'date-fns';

/**
* Louis Abid
* Version 1.0
*/
export class ThirdNode extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            today : new Date()
        }
    }

    render() {
      return (
        <p className={this.props.class}>{format(this.state.today, 'dd/MM/yyyy')}</p>
      );
    }
  }
  