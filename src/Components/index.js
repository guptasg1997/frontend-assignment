import React, { Component } from 'react'
import { connect } from 'react-redux'
import { storeProjectDetails } from '../actions/action'
import Projects from './Projects'

class Components extends Component {
    constructor(props) {
      super(props)
      this.state = {}
    }

    componentDidMount() {
      this.props.storeProjectDetails()
    }

    
  render() {
    return (
      <div>
        <Projects />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  projectData: state.projectData.data,

});

  
export default connect(mapStateToProps, {
  storeProjectDetails
})(Components)