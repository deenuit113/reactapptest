import React from 'react';
import './Alert.css';

const Alert = ({ text, type }) => {

    return (
        <div className={`alert alert-${type}`}>{text}</div>
    );
}

export default Alert;