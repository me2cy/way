import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'import': 'url('https://fonts.googleapis.com/css?family=Bebas+Neue|Black+Ops+One|Lato&display=swap')',
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'body': {
    'backgroundColor': 'rgb(4, 4, 145)',
    'backgroundClip': 'url'
  },
  'startup-page': {
    'padding': [{ 'unit': 'rem', 'value': 4 }, { 'unit': 'rem', 'value': 4 }, { 'unit': 'rem', 'value': 4 }, { 'unit': 'rem', 'value': 4 }],
    'maxWidth': [{ 'unit': 'px', 'value': 534 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  'starter-text': {
    'display': 'block',
    'fontSize': [{ 'unit': 'em', 'value': 3 }],
    'color': '#fff',
    'opacity': '0',
    'letterSpacing': [{ 'unit': 'px', 'value': 6 }],
    'fontFamily': ''Bebas Neue''
  },
  'starter-text__tab': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.2 }]
  },
  'starter-text:nth-of-type(1)': {
    'animation': 'fadeIn 2s forwards'
  },
  'starter-text:nth-of-type(2)': {
    'animation': 'fadeIn 2s 1s forwards'
  },
  'starter-text:nth-of-type(3)': {
    'animation': 'fadeIn 2s 2s forwards'
  },
  'starter-text:nth-of-type(4)': {
    'animation': 'fadeIn 2s 4s forwards'
  },
  'main-container': {
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'fontFamily': ''Lato',sans-serif',
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-50%)',
    'display': 'none'
  },
  'heading-primary': {
    'fontFamily': ''Reem Kufi'',
    'textTransform': 'uppercase',
    'letterSpacing': [{ 'unit': 'px', 'value': 8 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'color': '#1ed5ad',
    'textAlign': 'center'
  },
  'heading-primary--sup': {
    'fontSize': [{ 'unit': 'em', 'value': 1.3 }]
  },
  'heading-primary--sub': {
    'fontSize': [{ 'unit': 'em', 'value': 1.6 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 10 }],
    'display': 'block'
  },
  'heading-title': {
    'color': '#e4e4e4',
    'textAlign': 'center',
    'fontFamily': ''avenir next'',
    'letterSpacing': [{ 'unit': 'px', 'value': 4 }],
    'fontWeight': 'bolder',
    'marginBottom': [{ 'unit': 'rem', 'value': 1 }]
  },
  'clock': {
    'backgroundColor': 'rgb(255, 79, 9)',
    'backgroundImage': 'linear-gradient(106deg,rgb(255, 255, 255) 50%,transparent 50%)',
    'borderRadius': '4px 4px 0 0',
    'textTransform': 'uppercase',
    'color': 'rgb(4, 4, 134)',
    'letterSpacing': [{ 'unit': 'px', 'value': NaN }],
    'display': 'flex',
    'justifyContent': 'space-between',
    'alignItems': 'center',
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'rem', 'value': 2 }]
  },
  'clock > *': {
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }],
    'marginTop': [{ 'unit': 'rem', 'value': 1 }]
  },
  'heading-seconday': {
    'fontSize': [{ 'unit': 'rem', 'value': 0.6 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'heading-seconday--ls': {
    'letterSpacing': [{ 'unit': 'px', 'value': 2 }]
  },
  'Result-declare': {
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }],
    'backgroundColor': 'rgb(255, 79, 9)',
    'textAlign': 'center',
    'borderRadius': '0 0 4px 4px',
    'marginBottom': [{ 'unit': 'rem', 'value': 2 }],
    'color': 'blue',
    'fontSize': [{ 'unit': 'rem', 'value': 2 }]
  },
  'text-bold': {
    'textTransform': 'uppercase',
    'fontSize': [{ 'unit': 'rem', 'value': 1.2 }],
    'fontWeight': 'bolder'
  },
  'rules': {
    'color': 'rgb(209, 206, 206)'
  },
  'rules__list': {
    'listStyle': 'square',
    'paddingLeft': [{ 'unit': 'rem', 'value': 1.2 }]
  },
  'rules__item': {
    'padding': [{ 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }, { 'unit': 'rem', 'value': 0.5 }]
  },
  'heading-Tertiary': {
    'color': '#f6d849',
    'textTransform': 'uppercase',
    'letterSpacing': [{ 'unit': 'px', 'value': 2 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.6 }],
    'fontFamily': ''Black Ops One', cursive'
  },
  'copy-right': {
    'color': '#fafafa',
    'textDecoration': 'none',
    'display': 'block',
    'padding': [{ 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }, { 'unit': 'rem', 'value': 1 }],
    'textAlign': 'center',
    'borderTop': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7d88d' }],
    'marginTop': [{ 'unit': 'rem', 'value': 1 }]
  },
  'a': {
    'color': 'orangered',
    'textDecoration': 'none'
  }
});
