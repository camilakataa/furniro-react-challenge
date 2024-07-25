const handleOnClick = () => {
  window.location.href = './Shop'
}

const ShowMoreButton = () => {
  return (
      <button onClick={handleOnClick} className="w-[245px] h-[48px] border-solid border border-yellow-dark text-yellow-dark font-semibold text-base hover:bg-gray-100">
          Show More
      </button>
  )
}

export default ShowMoreButton