import React, { useEffect } from 'react';

const ScheduleADemo: React.FC = () => {

    // create the HubSpot script element and append it to the body
    useEffect(() => {

        const script: HTMLScriptElement = document.createElement('script');
        script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
        document.body.appendChild(script);

    }, []);

    return (
        <div>
            <div className="meetings-iframe-container" data-src="https://meetings.hubspot.com/rae-morales?embed=true"></div>
        </div>
    );
};

export default ScheduleADemo;
