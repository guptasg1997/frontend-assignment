import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'underscore';

class Projects extends Component {

constructor(props) {
  super(props)

  this.state = {
    page: 1
  }
}

  render() {
    let { projectData,status } = this.props
    if (status) {
      return (
        <div>
          Loading...
        </div>
      )
    }
    let { page } = this.state
    let len  = projectData.length
    let slicedprojectData = projectData.slice((page - 1) * 5 , (page - 1) * 5 + 5 > len ? len :  (page - 1) * 5 + 5)

    let tempVar = len%5 == 0 ?  0 : 1
    return (
      <div className="projects-data">
        <table className="projects-data-table">
          <tr>
            <th>S.No.</th>
            <th>Percentage funded</th>
            <th>Amount pledged</th>
          </tr>
          {
              _.map(slicedprojectData, project => {
                  return(
                      <tr>
                          <td>{project['s.no']}</td>
                          <td>{project['percentage.funded']}</td>
                          <td>{project['amt.pledged']}</td>
                      </tr>
                  )
              })
          }
        </table>
        <div className="pagination">
          <div
            className={`btn left-btn ${page <= 1 ? "disabled" : ''}`}
            onClick={() => {
              if (page > 1) {
                this.setState({
                  page: page - 1
                })
              }
            }}
          >
            {'<<'}
          </div>
          <div className="page-no">{page}</div>
          <div className="of-text">of</div>
          <div className="page-limit">{parseInt(len/5) + tempVar}</div>
          <div
            className={`btn right-btn ${page >= parseInt(len/5) + tempVar ? "disabled" : ''}`}
            onClick={() => {
              if (page < parseInt(len/5) + tempVar) {
                this.setState({
                  page: page + 1
                })
              }
            }}
          >
            {'>>'}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    projectData: state.projectData.data,
    status: state.projectData.fetching,

  });
  
    export default connect(mapStateToProps, {
    
  })(Projects)
