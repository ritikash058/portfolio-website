import React from "react";
import {
    GitHubIcon,
    LinkedInIcon,
    EmailIcon,
} from "@/utils/icon";
import ContactInfoItem from "./ContactInfo";
const Footer = () => {
    return(
        <footer id="contact" className="footer border-t border-gray-200 py-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-gray-600">
                        &copy; {new Date().getFullYear()} Ritika Shrestha. All rights reserved.
                    </p>
                </div>
                <div className="flex items-center gap-4" >
                    <ContactInfoItem icon={<EmailIcon />}  value="ritikashrestha05@gmail.com" link="mailto:ritikashrestha058@gmail.com" />
                    <ContactInfoItem icon={<GitHubIcon />}  value="github.com/ritikash058" link="https://github.com/ritikash058" />
                    <ContactInfoItem icon={<LinkedInIcon />}  value="linkedin.com/in/ritika-shresth" link="https://linkedin.com/in/ritika-shresth" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;