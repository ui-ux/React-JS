import { useEffect, useState } from "react";

function MountedOnClick() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return <p>{isMounted && 'Child component mounted after the click.'}</p>;
}

function UseEffectComponent({nameButton}: {nameButton: string}) {
    const [isMounted, setIsMounted] = useState(false);
    const [showClickMessage, setShowClickMessage] = useState(false);
    const [showMountedComponent, setShowMountedComponent] = useState(false);
    const [trackedValue, setTrackedValue] = useState(0);
    const [effectMessage, setEffectMessage] = useState('');

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        setEffectMessage(`useEffect ran: tracked value is ${trackedValue}`);
        console.log(`useEffect ran: tracked value is ${trackedValue}`);
    }, [trackedValue]);

    return (
        <div>
            <p>{isMounted && 'useEffect: component mounted'}</p>

            <button onClick={() => console.log('Button clicked!')}>
               {nameButton}
            </button>

            <hr />

            <button onClick={() => setShowClickMessage((previous) => !previous)}>
                Toggle Message
            </button>
            {showClickMessage && <p>This message toggles through onClick without useEffect.</p>}

            <hr />

            <button onClick={() => setShowMountedComponent(true)}>
                Mount child component
            </button>
            {showMountedComponent && <MountedOnClick />}

            <hr />

            <p>Tracked value: {trackedValue}</p>
            <button onClick={() => setTrackedValue((value) => value + 1)}>
                Change tracked value
            </button>
            <p>{effectMessage}</p>
        </div>
    )
}

export default UseEffectComponent
