const React = require('react');
const Rooms = require('./inputs/rooms');
const Beds = require('./inputs/beds');

class searchApartment extends React.Component {

  searchGueshouses = (e) => {
    console.log("searching guest houses");
  }

  onRoomsChange = (e) => {
    console.log("Rooms selection changed");
  }

  onBedsChange = (e) => {
    console.log("Rooms selection changed");
  }

  render() {
    const {parentClassName, wrapInContainer} = this.props;

    return (
      <div className={parentClassName}>
        <div className={wrapInContainer}>
            <div className="row">
                <div className="col-md-3">
                  <h2 className="mg-bn-title">Guest Houses <span className="mg-bn-big">For rates & availability</span></h2>
                </div>

                <div className="col-md-9">
                  <div className="mg-bn-forms">
                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-6">
                          <div className="input-group date mg-check-in">
                            <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
                              <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Check In"/>
                            </div>
                          </div>

                          <div className="col-md-3 col-sm-6 col-xs-6">
                            <div className="input-group date mg-check-out">
                              <div className="input-group-addon"><i className="fa fa-calendar"></i></div>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Check Out"/>
                              </div>
                            </div>

                            <div className="col-md-3">
                              <div className="row">
                                <div className="col-xs-6">
                                  <Rooms className="cs-select cs-skin-elastic" onChange={this.onRoomsChange}/>
                                </div>
                                <div className="col-xs-6">
                                  <Beds className="cs-select cs-skin-elastic" onChange={this.onBedsChange} />
                                </div>

                              </div>
                            </div>
                            <div className="col-md-3">
                              <button onClick={this.searchGueshouses}  className="btn btn-main btn-block">Check Now</button>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

module.exports = searchApartment;
