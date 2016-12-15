var React = require('react');
var PropTypes = React.PropTypes;

var Results = React.createClass({
   dump: function (obj) {
    return <pre>{JSON.stringify(obj, null, ' ')}</pre>
  },
  render: function (props) {
    return (
       <div>{this.dump(props)}</div>
    )
  }

});

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired
}

module.exports = Results;
