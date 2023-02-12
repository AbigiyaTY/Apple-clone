    import React from 'react';
    import AlertLink from "./AlertLink"


    const Alert = () => {
        return (
            <div>
        <section className="alert-section top-50">
        <div className="container">
            <AlertLink linkUrl ="alert-title" linkName="We’re open for you."/>
            <div className="alert-text">
                Our retail stores are closed, but you can buy our products here online and get fast, free delivery. If you need help finding the right product or have a question on your order, chat online with a Specialist or call 1-800-MY-APPLE.<br/>
                For service and support, visit <a href="https://support.apple.com/">support.apple.com</a>.
            </div>
        </div>
    </section>  
</div>
        );
    }

    export default Alert;

