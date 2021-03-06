/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import styles from './SidebarUnread.css';

export type Props = {
  className?: string,
  position: 'top' | 'bottom',
  onClick: () => mixed,
};

class SidebarUnread extends PureComponent<Props> {
  renderArrow() {
    const { position } = this.props;

    if (position === 'top') {
      return <Icon glyph="keyboard_arrow_up" className={styles.icon} />;
    } else if (position === 'bottom') {
      return <Icon glyph="keyboard_arrow_down" className={styles.icon} />;
    }

    return null;
  }

  render() {
    const { position } = this.props;
    const className = classNames(
      styles.container,
      styles[position],
      this.props.className,
    );

    return (
      <div className={className} onClick={this.props.onClick}>
        <div className={styles.wrapper}>{this.renderArrow()}</div>
      </div>
    );
  }
}

export default SidebarUnread;
