import type {IProduct, IReviews} from "../../models/IProduct.ts";
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
                    <p>Tags:</p>
                    {tags.map((tag: string, index: number) => (
                        <li key={index}>- {tag}</li>
                    ))}
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
            <div className='flex flex-col'>
                <p className='font-bold ml-150 mb-10'>Reviews:</p>
                <div className='flex gap-3 justify-between'>
                    {reviews.map((review: IReviews, index: number) => (
                        <ul key={index}>
                            <p className='font-sans'>Review {index + 1}</p>
                            <li>- Rating: {review.rating}</li>
                            <li>- Reviewer Name: {review.reviewerName}</li>
                            <li>- Reviewer Email: {review.reviewerEmail}</li>
                            <li>- Date: {review.date}</li>
                            <li>- Comment: {review.comment}</li>
                        </ul>
                    ))}
                </div>
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
                    {images.map((img, index) => (
                        <img key={index} src={img} alt="img"/>
                    ))}
                    <img src={thumbnail} alt="thumb"/>
                </div>
            </div>
        </div>
    );
};
