/*
 * Copyright 2019 dialog LLC <info@dlg.im>
 * @flow
 */

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { Text } from '@dlghq/react-l10n';
import Icon from '../Icon/Icon';
import styles from './Dragndrop.css';

export type Props = {
  className?: string,
};

class Dragndrop extends PureComponent<Props> {
  render() {
    const className = classNames(styles.container, this.props.className);

    return (
      <section className={className}>
        <Icon glyph="arrow_up" className={styles.arrow} size={80} />
        <Text id="Dragndrop.title" className={styles.title} />
        <Text id="Dragndrop.subtitle" className={styles.subtitle} />
      </section>
    );
  }
}

export default Dragndrop;
