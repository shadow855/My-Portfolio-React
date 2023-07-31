import React, { useEffect } from 'react'
import '../Css Folder/cursor.css';
import { initializeCursor } from '../Javascript Folder/cursor.js';

export const Cursor = () => {
    useEffect(() => {
        initializeCursor();
      }, []); // The empty dependency array ensures the code runs only once after the component mounts
    return (
        <div>
            <div id="cursor"></div>
            <div id="body"></div>
        </div>
    )
}
