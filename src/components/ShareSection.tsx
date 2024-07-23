import Mosaic from '../assets/mosaic.png'

const ShareSection = () => {
  return (
    <>
        <div className='py-10'>
            <div className='flex flex-col justify-center items-center lg:translate-y-6'>
                <p className='text-[20px] font-semibold'>Share your setup with</p>
                <h2 className='text-[40px] font-bold'>#FurniroFurniture</h2>
            </div>
            <img src={Mosaic} alt="" />
        </div>
    </>
  )
}

export default ShareSection