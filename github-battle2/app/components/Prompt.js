var React = require('react');
var ReactRouter = require('react-router');
var PropTypes = React.PropTypes;
var Link = ReactRouter.Link
var transparentBg = require('../styles/styles').transparentBg;

// thats ok just to have a function and not a class of you only render
// you can add the PropTypes to the function
function Prompt(props) {
  return (
      <div className="jumbotron col-sm-6 col-sm-offset-3 text-center">
        <h1>{props.header}</h1>
            <form onSubmit={props.onSubmitUser}>
              <div className="col-sm-12">

                  <div className="form-group">
                  <input
                   className="form-control"
                   placeholder="Github Username"
                   onChange={props.onUpdateUser}
                   value={props.username}
                   type="text" />
                   </div>
              </div>
              <div className="form-group col-sm-4 col-sm-offeset-4">
                <button
                    className="btn btn-block btn-success"
                    type="submit">
                    Continue
                </button>
              </div>
          </form>
      </div>
)
}


Prompt.propTypes = {
  onSubmitUser: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt;
