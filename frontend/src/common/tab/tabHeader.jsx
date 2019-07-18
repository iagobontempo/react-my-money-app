import React, { Component } from 'react';

// import { Container } from './styles';

export default class TabHeader extends Component {
  render() {
    return (
        <li>
            <a href='javascript:;' //Cancelando Click no tabHeader...
                data-toggle="tab"
                data-target={this.props.target}>
                <i className={`fa fa-${this.props.icon}`} /> {this.props.label}
            </a>
        </li>
    )
  }
}
