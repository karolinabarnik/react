import React from 'react';
import styles from './List.scss';
import App from '../App/App.js';
import Hero from '../Hero/Hero.js';

class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} />
      </section>
    )
  }
}

export default List;