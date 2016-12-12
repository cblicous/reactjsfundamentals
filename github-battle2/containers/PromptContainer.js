var React = require('react');
var transparentBg = require('../styles').transparentBg;
var PromptContainer = React.createClass({
  render: function () {
    return (
      <div className='jumbotron col-sm-6 col-sm-offeset-3 text-center' style={transparentBg}>
        <h1>SOME HEADER TEST</h1>
        <div className="col-sm-12">
          <form>
            <div className="form-group">
            <input
             className="form-control"
             placeholder="Github USername"
             type="text" />
             </div>
          </form>
        </div>
        <div className="form-group col-sm-4 col-sm-offeset-4">
          <button
              className="btn btn-block btn-success"
              type="submit"/>
        </div>
      </div>
    )
  }
});

module.exports = PromptContainer;
