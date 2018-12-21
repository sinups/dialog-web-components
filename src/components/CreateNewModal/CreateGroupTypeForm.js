/*
 * Copyright 2018 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from 'react';
import { Text } from '@dlghq/react-l10n';
import Radio from '../Radio/Radio';
import RadioGroup from '../Radio/RadioGroup';
import styles from './CreateNewModal.css';

type Props = {
  id: string,
  maxGroupSize: number,
  type: 'group' | 'channel',
  onSubmit: (event: SyntheticEvent<>) => void,
  onChange: (value: string, event: SyntheticInputEvent<>) => void,
};

class CreateGroupTypeForm extends PureComponent<Props> {
  handleSubmit = (event: SyntheticEvent<>) => {
    event.preventDefault();

    this.props.onSubmit(event);
  };

  render() {
    return (
      <form
        id={this.props.id}
        className={styles.type}
        onSubmit={this.handleSubmit}
      >
        <RadioGroup
          name="type"
          value={this.props.type}
          onChange={this.props.onChange}
        >
          <Radio value="group" htmlAutoFocus id={`${this.props.id}_type_group`}>
            <Text
              id="CreateNewModal.group.type.title"
              className={styles.typeLabel}
            />
          </Radio>
          <Text
            className={styles.typeHint}
            id="CreateNewModal.group.type.hint"
            values={{ count: String(this.props.maxGroupSize) }}
            tagName="div"
          />
          <br />
          <Radio value="channel" id={`${this.props.id}_type_channel`}>
            <Text
              id="CreateNewModal.channel.type.title"
              className={styles.typeLabel}
            />
          </Radio>
          <Text
            className={styles.typeHint}
            id="CreateNewModal.channel.type.hint"
            tagName="div"
          />
        </RadioGroup>
      </form>
    );
  }
}

export default CreateGroupTypeForm;
