import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Dropzone from "./Dropzone"
import './ImageEdit.css'
function NavigationBar(){
    return(
        <nav>
        <img src="Logo.svg" alt="edit4Me" height="70"/>
    </nav>
    )
}


function ImageEditor(){
    return(
    <>
    <NavigationBar />
    <Dropzone />
    </>
    );
}

export default ImageEditor;