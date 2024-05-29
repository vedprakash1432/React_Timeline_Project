import React from "react";
import TimeLine from './TimeLine';
import Header from './header';
import Clock from './clock';
import Footer from './footer';
class Container extends React.Component {

    render() {

        return (
            <div className="container-fluid">
                <div className='notificationsFrame'>
                    <div className='panel'>
                        < Header title="vedprakash" />
                        <div className="digital">
                            <h3 className="">{<Clock />}</h3>
                        </div>
                        < TimeLine />
                        < Footer />
                    </div>
                </div>
            </div>
        )
    }
}
export default Container;