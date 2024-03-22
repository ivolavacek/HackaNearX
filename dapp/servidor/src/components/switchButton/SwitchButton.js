import React, { useContext } from 'react';
import ModeContext from '../context/ModeContext';
import './SwitchButton.css';


const SwitchButton = () => {
    const { mode, toggleMode } = useContext(ModeContext);
  
    return (
        <div className="mode-info">
            <label className="switch">
                <input type="checkbox" id="mode-switch" onClick={toggleMode} checked={mode === 'Dark'}/>
                <span className={`slider ${mode}`}></span>
            </label>
            <span>{mode}</span>
        </div>
    );
};

export default SwitchButton;