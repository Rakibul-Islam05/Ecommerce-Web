import React from 'react';

const Maps = () => {
    return (
        <div className='container mb-10'>
            <div className=''>
                <iframe className='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0888850378537!2d89.83078717589383!3d23.601144994488955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe3bf8ae8128cb%3A0x7eaf5a304b5357be!2sFaridpur%20New%20Market!5e0!3m2!1sen!2sbd!4v1716756098043!5m2!1sen!2sbd" height="450" allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default Maps;