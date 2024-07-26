import Sofa1 from '../assets/sofas (1).png';
import Sofa2 from  '../assets/sofas (2).png';

const DescriptionSection = () => {
  return (
    <div className='border-solid border-x-0 border-b-0 border-t border-gray-300 pt-12'>
        <div className='flex justify-evenly items-center pb-12'>
            <p className='font-bold text-xl'>Description</p>
            <p className='font-normal text-xl text-gray-400'>Additional Information</p>
        </div>
        <p className='text-justify px-6 md:px-10 lg:px-60 text-gray-400 pb-10'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. <br></br><br></br>
        Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        <div className='flex flex-col justify-center items-center gap-4 xl:flex-row pb-16'>
            <img src={Sofa1} alt="product" />
            <img src={Sofa2} alt="product" />
        </div>
    </div>
  )
}

export default DescriptionSection