import logo from '../stackline_logo.svg';
import { Space } from "antd";

export const Header = () => {
    return (
        <div className='app-header'>
            <img src={logo} className="stackline-logo" alt="logo" />
        </div>
    );
};