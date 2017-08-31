import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../../redux/basic/actions'
import Link from '../Link'

const mapStateToProps = (state, ownProps) => { // ovaj state je iz stora
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => { // mogucnost da dispecuje neku od akcija iz stora
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink