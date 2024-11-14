import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us On</h2>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn text-[#1877F2] join-item justify-start">
                    <FaFacebook></FaFacebook> Facebook
                </button>
                <button className="btn text-[#1DA1F2] join-item justify-start">
                    <FaTwitter></FaTwitter>Twitter</button>
                <button className="btn text-[#c32aa3] join-item justify-start">
                    <FaInstagram></FaInstagram> Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;