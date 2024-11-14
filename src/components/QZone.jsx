import Swimming from '../assets/swimming.png'
import Class from '../assets/class.png'
import Play from '../assets/playground.png'
import Bg from '../assets/bg.png'
const QZone = () => {
    return (
        <div className="bg-[#F3F3F3] p-4">
            <h2 className="font-semibold mb-3">Q-Zone</h2>
            <div className='flex justify-center items-center flex-col space-y-5'>
                <img className='w-full' src={Swimming} alt="" />
                <img className='w-full' src={Class} alt="" />
                <img className='w-full' src={Play} alt="" />
                <img className='w-full' src={Bg} alt="" />

            </div>
        </div>
    );
};

export default QZone;