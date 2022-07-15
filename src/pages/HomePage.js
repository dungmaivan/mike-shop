import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../shared/components/ProductItem";
const HomePage = () => {
    const name = useSelector(function (state) {
        console.log("12345", state)
        return state.name;
    })
    return(
        <>
                            {/* Feature Product	 */}
            <div class="products">
                <p>Chào {name}</p>
                <h3>Sản phẩm nổi bật </h3>
                <div class="product-list card-deck">
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                </div>
                <div class="product-list card-deck">
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    
                </div>
            </div>
            {/* End Feature Product	 */}
            
            
                {/* Latest Product	 */}
            <div class="products">
                <h3>Sản phẩm mới</h3>
                <div class="product-list card-deck">
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                </div>
                <div class="product-list card-deck">
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                    <ProductItem></ProductItem>
                </div>
            </div>
            {/* End Latest Product	 */}        
        </>
    )
}
export default HomePage