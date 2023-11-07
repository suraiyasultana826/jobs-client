import { Link } from 'react-router-dom';
import TabComponents from '../../TabComponents/TabComponents';
import banner from '../../assets/banner.jpg'
import PostedCard from '../PostJob/PostedCard';
const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img  src={banner} className="w-1/2 rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">Start your Dream <br /> job from Here</h1>
            <p className="py-6">Total 6,500+ available jobs here, We are damn sure someone <br /> which fits you most. So, let grab the chance to get a dream job.</p>
            <Link to='/findJob'><button className="btn bg-blue-400">Get a job</button></Link>
           <Link to='/postJob'> <button className="btn btn-ghost ml-4">Post a job</button></Link>
          </div>
        </div>
      </div>
      <h1 className="text-5xl font-bold text-center mb-20">Popular Categories</h1>
      <div className=' flex justify-center'>
      <TabComponents></TabComponents>

      </div>
      
        </div>
    );
};

export default Home;