/*
Copyright 2018 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import classNames from 'classnames';
import React from 'react';

const propTypes = {
  placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  positionTop: React.PropTypes.oneOfType([
    React.PropTypes.number, React.PropTypes.string,
  ]),
  positionLeft: React.PropTypes.oneOfType([
    React.PropTypes.number, React.PropTypes.string,
  ]),
  arrowOffsetTop: React.PropTypes.oneOfType([
    React.PropTypes.number, React.PropTypes.string,
  ]),
  arrowOffsetLeft: React.PropTypes.oneOfType([
    React.PropTypes.number, React.PropTypes.string,
  ]),
  title: React.PropTypes.node,
};

const defaultProps = {
  placement: 'right',
};

class Popover extends React.Component {

  constructor(props) {
    super(props)
    this.onClose = this.onClose.bind(this);
  }

  onClose() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  renderTitle(title) {
    if (!title) {
      return null;
    }

    return (
      <h3 className="popover-title">
        {title}
        <i className="fa fa-times pull-right" aria-hidden="true" onClick={this.onClose}/>
      </h3>
    )
  }

  render() {
    const {
      placement,
      positionTop,
      positionLeft,
      arrowOffsetTop,
      arrowOffsetLeft,
      title,
      className,
      style,
      children,
    } = this.props;

    const classes = {
      'popover': true,
      [placement]: true,
    };

    const outerStyle = {
      display: 'block',
      top: positionTop,
      left: positionLeft,
      ...style,
    };

    const arrowStyle = {
      top: arrowOffsetTop,
      left: arrowOffsetLeft,
    };

    const $title = this.renderTitle(title);

    return (
      <div role="tooltip"
        className={classNames(className, classes)}
        style={outerStyle}>
        <div className="arrow" style={arrowStyle} />
        {$title}
        <div className="popover-content">
          {children}
        </div>
      </div>
    );
  }
}

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;