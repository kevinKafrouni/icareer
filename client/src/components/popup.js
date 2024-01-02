import React, { useState } from 'react';

function SimplePopup() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>Show Popup</button>
            {isVisible && <div className="popup-content">Hello from Popup!</div>}
        </div>
    );
}