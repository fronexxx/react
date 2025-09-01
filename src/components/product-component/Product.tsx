import type {IProduct} from "../../models/IProduct.ts";
import type {FC} from "react";
import './Product.css';

interface ProductProps {
    product: IProduct
}

export const Product: FC<ProductProps> = ({
                                              product:
                                                  {
                                                      id,
                                                      title,
                                                      description,
                                                      category,
                                                      price,
                                                      brand,
                                                      availabilityStatus,
                                                      images,
                                                      meta,
                                                      discountPercentage,
                                                      rating,
                                                      sku,
                                                      minimumOrderQuantity,
                                                      reviews,
                                                      shippingInformation,
                                                      warrantyInformation,
                                                      stock,
                                                      tags,
                                                      dimensions,
                                                      weight,
                                                      thumbnail,
                                                      returnPolicy
                                                  }
                                          }) => {
    return (
        <div className='m-5 flex flex-col gap-8 border-2 p-2.5'>
            <div className='flex flex-col gap-3'>
                <h2 className='text-2xl font-bold font-sans'>{id}. {title}</h2>
                <p>{description}</p>
                <p className='text-sm'><span>Category: {category};</span> <span>Price: {price}$</span></p>
                <p>Discount Percentage: {discountPercentage}</p>
                <p>Rating: {rating}</p>
                <p>Stock: {stock}</p>
                <ul>
                    Tags:
                    <li>- {tags[0]}</li>
                    <li>- {tags[1]}</li>
                </ul>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='font-bold'>Brand: {brand}</p>
                <p>Sku: {sku}</p>
                <p>Weight: {weight}</p>
                <ul>
                    Dimensions:
                    <li>- Width: {dimensions.width}</li>
                    <li>- Height: {dimensions.height}</li>
                    <li>- Depth: {dimensions.depth}</li>
                </ul>
                <p>Warranty Information: {warrantyInformation}</p>
                <p>Shipping Information: {shippingInformation}</p>
                <p>Availability Status: {availabilityStatus}</p>
            </div>
            <p className='font-bold'>Reviews:</p>
            <div className='flex gap-3 justify-between'>
                <ul>
                    <p className='font-sans'>Review 1</p>
                    <li>- Rating: {reviews[0].rating}</li>
                    <li>- Reviewer Name: {reviews[0].reviewerName}</li>
                    <li>- Reviewer Email: {reviews[0].reviewerEmail}</li>
                    <li>- Date: {reviews[0].date}</li>
                    <li>- Comment: {reviews[0].comment}</li>
                </ul>
                <ul>
                    <p className='font-sans'>Review 2</p>
                    <li>- Rating: {reviews[1].rating}</li>
                    <li>- Reviewer Name: {reviews[1].reviewerName}</li>
                    <li>- Reviewer Email: {reviews[1].reviewerEmail}</li>
                    <li>- Date: {reviews[1].date}</li>
                    <li>- Comment: {reviews[1].comment}</li>
                </ul>
                <ul>
                    <p className='font-sans'>Review 3</p>
                    <li>- Rating: {reviews[2].rating}</li>
                    <li>- Reviewer Name: {reviews[2].reviewerName}</li>
                    <li>- Reviewer Email: {reviews[2].reviewerEmail}</li>
                    <li>- Date: {reviews[2].date}</li>
                    <li>- Comment: {reviews[2].comment}</li>
                </ul>
            </div>
            <div className='flex flex-col gap-3'>
                <p>Return Policy: {returnPolicy}</p>
                <p>Minimum OrderQuantity: {minimumOrderQuantity}</p>
                <ul>
                    <p className='font-bold'>Meta:</p>
                    <li>- Created At: {meta.createdAt}</li>
                    <li>- Updated At: {meta.updatedAt}</li>
                    <li>- Barcode: {meta.barcode}</li>
                    <li>- QR Code: {meta.qrCode}</li>
                </ul>

                <div className='flex justify-around'>
                    <img src={images[0]} alt="img"/>
                    <img src={thumbnail} alt="thumb"/>
                </div>
            </div>
        </div>
    );
};
