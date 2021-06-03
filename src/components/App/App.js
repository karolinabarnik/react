import React from 'react';
import styles from './App.scss';
import PropTypes from 'prop-types'
import List from '../List/ListContainer.js';
import Search from '../Search/SearchContainer';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{this.props.title}</h1>
        <h2 className={styles.subtitle}>{this.props.subtitle}</h2>
        {this.props.lists.map(list => <List key={list.id} {...list} />)}
      </main>
    );
  }

  static PropTypes ={
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array
  }


}

export default App;