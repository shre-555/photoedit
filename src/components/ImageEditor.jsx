import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Dropzone from "./Dropzone"
import './ImageEdit.css'
function NavigationBar(){
    return(
        <>
        <nav>
            <img src="Logo.svg" alt="edit4Me" height="70" className='logo'/>
            <div className='options'>
                <button className='nav2'>
                    <img src="Undo.png" alt="undo" height="25"/>
                </button>
                <button className='nav2'>
                    <img src="Undo-1.png" alt="redo" />
                </button>
                <button className='nav2'>
                    <img src="Upscale Sparkle.png" alt="undo" />
                </button>
                
            </div>
        </nav>
        </>
        
    )
}

function SidePanel(){
    return(
        <>
            <aside className='sidepanel'>
                <div className='mainpanel'>
                    <button id="crop">
                        <img src="Crop 01.svg" alt="crop"/>
                    </button>
                    <button>
                        <img src="Adjust.svg" alt="adjust"/>
                    </button>
                </div>
            </aside>
        </>
    )
}

function ImageEditor(){
    return(
    <>
    <NavigationBar />
    <br/>
    <Dropzone />
    <SidePanel />
    </>
    );
}

export default ImageEditor;