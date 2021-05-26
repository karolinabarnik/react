import React from 'react';
import styles from './List.scss';
import App from '../App/App.js';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import columnStyles from '../Column/Column.scss'
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';


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
                key: state.columns.length ? state.columns[state.columns.length
                title,
                icon: 'list-alt',
                cards: []
      } ]
      } ));
      }

    render() {
        const {title, image, description, columns, addColumn} = this.props;

        return (
            <section className={styles.component}>
            
            <Hero titleText={this.props.title}
            imageHero={this.props.sourceImg} />
                <div className={styles.description}>
                    {ReactHtmlParser(this.props.description)}
                </div>
            
            <div className={styles.columns}>
            {columns.map(columnData => (
            <   Column key={columnData.id} {...columnData} />
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