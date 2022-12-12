import React from 'react'

const useKeyboard = () => {

    const keyPressed = document.querySelector('.p')
    const meta = document.createElement("div")
    meta.id = "meta"
       const ctrl = document.createElement("div")
    ctrl.id="ctrl"
    const Shift = document.createElement("div")
    Shift.id="shift"
    const alt = document.createElement("div")
    alt.id = "alt"
    
    window.addEventListener('keydown', function (e) {    
        if (keyPressed !== null) {
            keyPressed.innerHTML = `You pressed: ${e.key}, Code: ${e.keyCode}, `;
            if (
                (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey) ||
                e.key === 'Meta' ||
                e.key === 'Shift' ||
                e.key === 'Control' ||
                e.key === 'Alt'
            ) {
                return;
            }
            
            // e.altKey ? alt.classList.remove('hidden') : alt.classList.add('hidden');
            // e.shiftKey ? shift.classList.remove('hidden') : shift.classList.add('hidden');
            // e.metaKey ? meta.classList.remove('hidden') : meta.classList.add('hidden');
            // e.ctrlKey ? ctrl.classList.remove('hidden') : ctrl.classList.add('hidden');
            // keyPressed.classList.add('hidden');
            // keyPressed.classList.remove('hidden');
            keyPressed.innerHTML = e.key;
        }
    }, false);
    
    return (
        keyPressed
    )
}

export default useKeyboard