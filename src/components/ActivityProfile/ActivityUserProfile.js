/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

import React, { Component, PropTypes } from 'react';
import { PeerInfo } from '../../PropTypes';
import classNames from 'classnames';
import PeerAvatar from '../PeerAvatar/PeerAvatar';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import styles from './ActivityProfile.css';

class ActivityUserProfile extends Component {
  static propTypes = {
    className: PropTypes.string,
    peerInfo: PeerInfo.isRequired,
    children: PropTypes.node,
    onAboutAdd: PropTypes.func
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.peerInfo !== this.props.peerInfo ||
           nextProps.className !== this.props.className ||
           nextProps.children !== this.props.children ||
           nextProps.onAboutAdd !== this.props.onAboutAdd;
  }

  renderAvatar() {
    const { peerInfo: { name, avatarBig, placeholder } } = this.props;

    return (
      <PeerAvatar
        peer={{
          title: name,
          avatar: avatarBig,
          placeholder
        }}
        size="big"
        className={styles.avatar}
      />
    );
  }

  renderName() {
    const { peerInfo: { name } } = this.props;

    if (!name) {
      return null;
    }

    return (
      <div className={styles.name}>{name}</div>
    );
  }

  renderNick() {
    const { peerInfo: { nick } } = this.props;

    if (!nick) {
      return null;
    }

    return (
      <div className={styles.nick}>{`@${nick}`}</div>
    );
  }

  renderPresence() {
    const { peerInfo: { presence } } = this.props;

    if (!presence) {
      return null;
    }

    return (
      <div className={styles.presence}>{presence}</div>
    );
  }

  renderAbout() {
    const { peerInfo: { about }, onAboutAdd } = this.props;

    if (!about) {
      return (
        <div className={styles.about}>
          <Button theme="link" onClick={onAboutAdd} className={styles.aboutButton}>
            <Icon glyph="add_circle_outline" className={styles.aboutAddIcon} />
            Add About
          </Button>
        </div>
      );
    }

    return (
      <div className={styles.about}>{about}</div>
    );
  }

  renderChildren() {
    const { children } = this.props;

    if (!children) {
      return null;
    }

    return (
      <div className={styles.actions}>{children}</div>
    );
  }


  renderProfileContacts() {
    const { peerInfo } = this.props;

    const phones = peerInfo.phones.map((phone, index) => (
      <div key={index}>
        <div className={styles.contactTitle}>{phone.title}</div>
        <div className={styles.contactContent}>{phone.number}</div>
      </div>
    ));

    const emails = peerInfo.emails.map((email, index) => (
      <div key={index}>
        <div className={styles.contactTitle}>{email.title}</div>
        <div className={styles.contactContent}>{email.email}</div>
      </div>
    ));

    return (
      <div className={styles.contacts}>
        {phones}
        {emails}
      </div>
    );
  }

  render() {
    const { className } = this.props;
    const userProfileClassName = classNames(styles.root, className);

    return (
      <div className={userProfileClassName}>
        {this.renderAvatar()}
        {this.renderName()}
        {this.renderNick()}
        {this.renderPresence()}
        {this.renderAbout()}
        {this.renderChildren()}
        {this.renderProfileContacts()}
      </div>
    );
  }
}

export default ActivityUserProfile;
