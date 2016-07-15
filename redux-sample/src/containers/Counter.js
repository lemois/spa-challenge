import { connect } from 'react-redux'
import { countUp, fetchRandom } from '../actions'
import Counter from '../components/Counter.jsx'

const mapStateToProps = (state, props) => {
  const x = state.counterByTarget[props.target];
  return x ? {
    count: x.value,
    loading: x.fetching
  } : {
    count: 0,
    loading: false
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: (id) => {
      dispatch(countUp(props.target))
    },
    onFetch: () => {
      dispatch(fetchRandom(props.target))
    }
  }
}

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default container
