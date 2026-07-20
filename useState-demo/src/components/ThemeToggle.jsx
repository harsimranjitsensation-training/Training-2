import { useState } from "react";

function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    return (
        <>
            <div style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black',
            }}>

                <button onClick={() => setIsDark(!isDark)}>Toggle</button>

            </div>
        </>
    )
}

export default ThemeToggle;