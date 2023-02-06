import { useState } from 'react';
import FloatingAction from './floatingaction';
import NewWordForm from './newwordform';

// Floating action button
export default function NewWordDialog() {
    // Decides whether to display a floating action button or new word form
    const [isButton, setIsButton] = useState(true);

    const handleClick = () => {
        setIsButton(isButton => !isButton);
    }
    if (isButton) {
        return <FloatingAction handleClick={handleClick} />
    } else {
        return <NewWordForm handleClick={handleClick} />
    }

}