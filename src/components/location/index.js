import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 

                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2018.3301429176875!2d16.542261251900058!3d59.61086558166874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e613f2dee9961%3A0x2c9bdd706f58d721!2sSmedjegatan%2017%2C%20722%2013%20V%C3%A4ster%C3%A5s!5e0!3m2!1ssv!2sse!4v1587370175031!5m2!1ssv!2sse"
                width="100%" 
                height="500" 
                frameBorder="0" 
                allowfullscreen=""  
               ></iframe>

               <div className="location_tag">
                   <div>Location</div>
               </div>
        </div>
    );
};

export default Location;