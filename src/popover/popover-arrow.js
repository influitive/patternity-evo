import React, { Component, PropTypes } from 'react';
import styles from './styles.css';
import cn from 'classnames';

class PopoverArrow extends Component {
  static propTypes = {
    position:          PropTypes.oneOf([
      'top',
      'bottom',
      'left',
      'right'
    ]),
    shouldHaveBorder:  PropTypes.bool.isRequired,
    style: PropTypes.shape({
      background:  PropTypes.string.isRequired,
      borderColor: PropTypes.string.isRequired
    })
  }

  static defaultProps = {
    position: 'top',
    style:    {
      borderColor: '#ccc',
      background:  'white'
    }
  }


  render() {
    const { position, style, shouldHaveBorder } = this.props;
    let { borderColor, background } = style;

    if (!shouldHaveBorder) borderColor = 'transparent';

    const borderPos = position.charAt(0).toUpperCase() + position.substr(1);

    return <div className={cn(styles.arrowContainer, styles[position])}>
      <span className={styles.arrow} style={{[`border${borderPos}Color`]: borderColor}}>
        <span className={cn(
            styles.inner,
            styles.arrow,
            { [`${styles.noBorder}`] : !shouldHaveBorder})}
          style={{[`border${borderPos}Color`]: background }}>
        </span>
      </span>
    </div>;
  }

}

export default PopoverArrow;
