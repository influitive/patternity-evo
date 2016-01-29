import React, { Component } from 'react';
import useSheet from './jss';
import defaultTheme from './default-theme';

export const createTheme = theme => ComposedComponent =>
  class ThemeContext extends Component {
    static childContextTypes = {
      themeMap: React.PropTypes.object
    };

    getChildContext() {
      return {
        themeMap: { ...defaultTheme, ...theme }
      };
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  };


export const ThemeComponent = (ComposedComponent, mappingFunc) =>
  class ThemeApply extends Component {
    static contextTypes = {
      themeMap: React.PropTypes.object
    };

    render() {
      if (!this.context || !this.context.themeMap) return <ComposedComponent {...this.props} />;
      return React.createElement(useSheet(ComposedComponent, mappingFunc(this.context.themeMap)), this.props);
    }
  };
