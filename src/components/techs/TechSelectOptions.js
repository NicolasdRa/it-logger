import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getTechs } from '../../store/actions/techActions'

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs()
    // eslint-disable-next-line
  }, [])

  return (
    !loading &&
    techs !== null &&
    techs.map(te => (
      <option key={te.id} value={`${te.firstName} ${te.lastName}`}>
        {te.firstName} {te.lastName}
      </option>
    ))
  )
}

TechSelectOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechSelectOptions)
