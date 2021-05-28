import React from 'react';
import styles from './App.scss';
//import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
       {/* 
       <List {...listData} />
       */}
      </main>
    );
  }
  static PropTypes ={
  title: PropTypes.node,
  subtitle: PropTypes.node,
  }

   
}

export default App;
