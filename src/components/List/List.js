import React from 'react';
import styles from './List.scss';
import App from '../App/App.js';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import columnStyles from '../Column/Column.scss'
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';


class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
      }
    static defaultProps = {
        description: settings.defaultListDescription,
    }  
    render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title}
         imageHero={this.props.sourceImg} />
        <div className={styles.description}>
            {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
            <column className={columnStyles.component}><h4>Animals</h4></column>
            <column className={columnStyles.component}><h4>Plants</h4></column>
            <column className={columnStyles.component}><h4>Minerals</h4></column>
        </div>
      </section>
    )
  }
}

export default List;