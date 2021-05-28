import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Column from '../Column/Column.js';


class List extends React.Component {
    state = {
      columns: this.props.columns || [],
    }

    static propTypes = {
      title: PropTypes.node.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array,
      image: PropTypes.node,
      addColumn: PropTypes.func,
      sourceImg: PropTypes.node,
    }

    static defaultProps = {
      description: settings.defaultListDescription,
    }  

    addColumn(title){
      this.setState(state => (
        {
          columns: [
            ...state.columns,
            {
              key: state.columns.length ? state.columns[state.columns.length-1]:
                title,
              icon: 'list-alt',
              cards: [],
            } ],
        } ));
    }
    

    render() {
      const {columns, addColumn} = this.props;

      return (
        <section className={styles.component}>
            
          <Hero titleText={this.props.title}
            imageHero={this.props.sourceImg} />
          <div className={styles.description}>
            {ReactHtmlParser(this.props.description)}
          </div>
            
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>

          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn}/>
          </div>

        </section>
      );
    }
}

export default List;