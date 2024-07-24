import CardProduct from "./CardProduct"
import ShowMoreButton from "./UI/ShowMoreButton"

const ProductsSection = () => {
  return (
    <>
        <div className="flex flex-col justify-center items-center gap-10 p-10">
            <div>
                <CardProduct />
            </div>
        <ShowMoreButton />
        </div>
    </>
  )
}

export default ProductsSection