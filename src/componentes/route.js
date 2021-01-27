import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
    useEffect(() => {
        const onLocationChange = () => {
            console.log(currentPath, 'cambio la URL')
            setCurrentPath(window.location.pathname)
            console.log(currentPath)
        };
        window.addEventListener('popstate', onLocationChange);
        return () => {
            window.removeEventListener('popstate', onLocationChange)
        };
    }, []);

    return currentPath === path ? children : null
};

export default Route;