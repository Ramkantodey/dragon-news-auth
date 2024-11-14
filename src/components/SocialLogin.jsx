import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Login With</h2>
            <div className="*:w-full space-y-2">
                <button className="btn  border-blue-500 text-[#4285F4]"><FaGoogle></FaGoogle> Login With Google</button>
                <button className="btn border-black"><FaGithub></FaGithub> Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;