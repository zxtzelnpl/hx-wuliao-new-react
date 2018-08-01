import React, {Component} from 'react'

class NotFound extends Component {
  render() {
    return (
      <div>
        <p>NotFound : {this.props.location.pathname}</p>
        <p>{process.env.NODE_ENV}</p>
      </div>
    )
  }
}

export default NotFound
