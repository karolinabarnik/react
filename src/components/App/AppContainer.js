import {connect} from 'react-redux';
import App from './App'; //<App />

const mapStateToProps = state => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists
});

export default connect(mapStateToProps)(App); //<App title={'My first React app'} subtitle={'tretretret'} lists={[...]}/>