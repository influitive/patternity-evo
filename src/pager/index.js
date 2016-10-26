import React, { Component, PropTypes } from 'react';
import { Icon } from 'infl-icons';
import classnames from 'classnames';
import jss from 'jss';
import nested from 'jss-nested';

import styles from './pager.css';
import { connectTheme } from 'gild';

import mapping from './theme';
jss.use(nested());

import _ from 'lodash';

const MOVING_WINDOW_SIZE = 5;
const EDGE_WINDOW_SIZE = 2;

class Pager extends Component {

  static propTypes = {
    /**
     * The current page number (starting at 1).
     */
    currentPage: PropTypes.number.isRequired,
    /**
     * The number of items that are displayed in each page.
     */
    perPage: PropTypes.number,
    /**
     * The total number of items that are available.
     */
    totalItemCount: PropTypes.number.isRequired,
    /**
     * This callback is called when the user navigates to a different page. It
     * has a single argument which is the new page number.
     */
    onPageChangeCallback: PropTypes.func.isRequired,
    /**
     * The classname of the page element that is currenting displayed.
     */
    selectedClassName: PropTypes.string,
    /**
     * The theme provided by gild.
     */
    theme: PropTypes.object
  };

  static defaultProps = {
    perPage:           10,
    selectedClassName: '',
    theme:             {}
  };

  render() {
    const { currentPage, theme } = this.props;
    const totalPageCount = this._getTotalPageCount();
    return (
      <div className={theme.default}>
        <span className={classnames(styles.previousPage, { disabled: currentPage === 1 })}
          onClick={this._handleClick.bind(null, currentPage - 1)}>
          <Icon icon='chevron-left'/>
        </span>
        {this._getPageNumbers()}
        <span className={classnames(styles.nextPage, { disabled: currentPage === totalPageCount })}
          onClick={this._handleClick.bind(null, currentPage + 1)}>
          <Icon icon='chevron-right'/>
        </span>
      </div>
    );
  }

  _getPageNumbers = () => {
    const { currentPage } = this.props;
    const totalPageCount = this._getTotalPageCount();
    const simulatedCurrentPage = this._getSimulatedCurrentPage(currentPage, totalPageCount);
    const leftSideOfWindow = Math.max(1, simulatedCurrentPage - Math.floor(MOVING_WINDOW_SIZE / 2));
    let pagesWindow = _.range(leftSideOfWindow, Math.min(leftSideOfWindow + MOVING_WINDOW_SIZE, totalPageCount + 1));

    const numbersLeftOfWindow = this._getNumbersLeftOfWindow(_.first(pagesWindow));

    const numbersRightOfWindow = this._getNumbersRightOfWindow(_.last(pagesWindow), totalPageCount);

    if (_.first(pagesWindow) > _.last(numbersLeftOfWindow) + 1) {
      numbersLeftOfWindow.push(-1);
    }

    if (_.last(pagesWindow) < _.first(numbersRightOfWindow) - 1) {
      numbersRightOfWindow.unshift(-1);
    }

    return numbersLeftOfWindow.concat(pagesWindow).concat(numbersRightOfWindow).map(
      (page, index) => {
        // If it's -1, it's an ellipsised section.
        if (page === -1) {
          return this._getEllipsis(index);
        }
        return this._getSpanForPage(page);
      });
  }

  _getNumbersLeftOfWindow = (firstPageOfWindow) => {
    return _.range(1, Math.min(EDGE_WINDOW_SIZE + 1, firstPageOfWindow));
  }

  _getNumbersRightOfWindow = (lastPageOfWindow, totalPageCount) => {
    const startPage = Math.max(lastPageOfWindow, totalPageCount - EDGE_WINDOW_SIZE) + 1;
    return _.range(startPage, totalPageCount + 1);
  }

  _getSimulatedCurrentPage = (currentPage, totalPageCount) => {
    // The simulated current page is required to make sure that we always show at least 5 numbers around
    // the current page (even if current page is in the extremes)
    let simulatedCurrentPage = currentPage;
    if (currentPage < EDGE_WINDOW_SIZE + 1) {
      simulatedCurrentPage = EDGE_WINDOW_SIZE + 1;
    }
    else if (currentPage > totalPageCount - EDGE_WINDOW_SIZE) {
      simulatedCurrentPage = totalPageCount - EDGE_WINDOW_SIZE;
    }
    return simulatedCurrentPage;
  }

  _getSpanForPage = (pageNum) => {
    const { currentPage, selectedClassName } = this.props;
    const isCurrentPage = currentPage === pageNum;
    const classes = classnames(
      styles.pageElement,
      isCurrentPage && styles.disabled,
      isCurrentPage && selectedClassName
    );

    return (
      <span
        key={`page-${pageNum}`}
        className={classes}
        onClick={this._handleClick.bind(null, pageNum)}>
        {pageNum}
      </span>
    );
  }

  _getEllipsis(index) {
    return (<span key={`ellipsis-${index}`}>...</span>);
  }

  _handleClick = (pageNum) => {
    const { currentPage } = this.props;
    const shouldChange = pageNum > 0 &&
      pageNum <= this._getTotalPageCount() &&
      pageNum !== currentPage;

    if (shouldChange) {
      this.props.onPageChangeCallback(pageNum);
    }
  }

  _getTotalPageCount = () => {
    const { totalItemCount, perPage } = this.props;
    return Math.ceil(totalItemCount / perPage);
  }
}

export default connectTheme(mapping)(Pager);
