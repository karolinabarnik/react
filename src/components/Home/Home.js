import React from 'react';
import styles from './Home.scss';
import PropTypes from 'prop-types';
import ListLink from '../ListLink/ListLink';
import Search from '../Search/SearchContainer';

class Home extends React.Component {
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <Search/>
        <h1 className={styles.title}>{this.props.title}</h1>
        <h2 className={styles.subtitle}>{this.props.subtitle}</h2>
        
        
        {lists.map(listData => (
          <ListLink key={listData.id} {...listData} />
          ))}
      </main>
       
    );
  }

  static PropTypes ={
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }


}

export default Home;