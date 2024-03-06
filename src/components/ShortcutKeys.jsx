import React, { useState } from 'react'
import './componentsSyles/ShortcutKeys.css'
const ShortcutKeys = ({ isOpen, handleShortcutKeysClose }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseDown = (e) => {
        setIsDragging(true);
        const offsetX = e.clientX - position.x;
        const offsetY = e.clientY - position.y;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        function handleMouseMove(e) {
            setPosition({
                x: e.clientX - offsetX,
                y: e.clientY - offsetY,
            });
        }

        function handleMouseUp() {
            setIsDragging(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
    };

    const handleDoubleClick = () => {
        // Reset the position when double-clicked
        setPosition({ x: 0, y: 0 });
    };

    if (!isOpen) return null;

    const shortcutKeyStyles = {
        transform: `translate(${position.x}px, ${position.y}px)`,
    };
    if (!isOpen) return null;
    return (
        <div
            className='shortcut-key-holder'
            style={shortcutKeyStyles}
            onMouseDown={handleMouseDown}
            onDoubleClick={handleDoubleClick}
        >
            <table>
                <tr>
                    <th colSpan={1}>Shortcuts</th>
                    <th colSpan={3}>Actions</th>
                </tr>
                <tr>
                    <td>Ctrl + M</td>
                    <td>Make a sale</td>
                </tr>
                <tr>
                    <td>Ctrl + P</td>
                    <td>Open Profile Menu</td>
                </tr>
                <tr>
                    <td>Ctrl + F</td>
                    <td>Activate Sales Search Cusor</td>
                </tr>
                <tr>
                    <td>Ctrl + Alt + D</td>
                    <td>Toggle Dark Mode</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <div className="buttons">
                <button onClick={handleShortcutKeysClose}>Exit</button>
            </div>

        </div>
    )
}

export default ShortcutKeys