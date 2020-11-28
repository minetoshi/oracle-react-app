import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Button from '@material-ui/core/Button';


class EventsIndex extends Component {
  render() {
    const style = {
      // position: "fixed",
      // right: 12,
      // bottom: 12
    }

    return (
      <React.Fragment>
        <div>保険の契約は以下をクリックしてください</div>

        <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
          {/* <ContentAdd /> */}
          <Button variant="contained" color="secondary" containerElement={<Link to="/events/new" />}>
          契約
        </Button>    
        </FloatingActionButton> 
      </React.Fragment>
    )
  }
}



export default connect(null, null)(EventsIndex)
