const React = require('react');
const Header = require('../shared/header');


class Carousel extends React.Component {

    render() {
        return (
            <div id="mega-slider" className="carousel slide " data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#mega-slider" data-slide-to="0" className="active"></li>
                    <li data-target="#mega-slider" data-slide-to="1"></li>
                    <li data-target="#mega-slider" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" role="listbox">
                    <div className="item beactive">
                        <img src="images/slide-4.png" alt="..."/>
                        <div className="carousel-caption">
                            <img src="images/stars.png" alt=""/>
                            <h2>Guest Houses in Uganda</h2>
                            <p>Uganda has many guesthouses. They are home away from home.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/slide-2.png" alt="..."/>
                        <div className="carousel-caption">
                            <img src="images/stars.png" alt=""/>
                            <h2>Feel Like Your Home</h2>
                            <p>Uganda has many guesthouses. They are home away from home.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src="images/slide-3.png" alt="..."/>
                        <div className="carousel-caption">
                            <img src="images/stars.png" alt=""/>
                            <h2>Perfect Place for Group of People</h2>
                            <p>Uganda has many guesthouses. They are home away from home.</p>
                        </div>
                    </div>
                </div>


                <a className="left carousel-control" href="#mega-slider" role="button" data-slide="prev"></a>
                <a className="right carousel-control" href="#mega-slider" role="button" data-slide="next"></a>
            </div>
        );
    }
};

module.exports = Carousel;