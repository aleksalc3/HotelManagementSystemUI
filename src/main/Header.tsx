import React from "react";

type Args={
    subtitle:string
}
const Header = ({subtitle}:Args)=>{
    return (
        <header className="row mb-4">
            <div className="col-5">Hotel Management System</div>
            <div className="col-7 mt-5">{subtitle}</div>
        </header>
    )

}
export default Header;