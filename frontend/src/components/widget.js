import React from 'react';

const widget = (props) => {
    return (
        <div className="widget">
            <div className="row">
                <div className="left">
                    <img src="/assets/images/animated/cloudy-day-1.svg" className="icon"></img>
                    <h5 className="weather-status">Partly Cloud</h5>
                </div>
                <div className="right">
                    <h5 className="city">Singapore</h5>
                    <h5 className="degree">25&#176;c</h5>
                </div>
            </div>
            <div className="row">
                <div className="bottom">
                    <div className="col">
                        Wind Speed <span>22Kmph</span>
                    </div>
                    <div className="col">
                        Cloud Cover <span>22%</span>
                    </div>
                    <div className="col">
                        Pressure <span>1010 mb</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default widget