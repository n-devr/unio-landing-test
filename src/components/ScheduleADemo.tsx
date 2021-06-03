import React, { useEffect } from 'react';

interface ScheduleADemoProps {
    meetingsURL: string,
    embedScriptURL: string
}

const ScheduleADemo: React.FC<ScheduleADemoProps> = ({ meetingsURL, embedScriptURL }) => {

    // create the HubSpot script element and append it to the body
    useEffect(() => {

        const script: HTMLScriptElement = document.createElement('script');
        script.src = embedScriptURL;
        document.body.appendChild(script);

    }, [embedScriptURL]);

    return (
        <div>
            <div className="meetings-iframe-container" data-src={meetingsURL}></div>
        </div>
    );
};

export default ScheduleADemo;
