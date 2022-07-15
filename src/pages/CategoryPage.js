import ProductItem from "../shared/components/ProductItem";
const CategoryPage = () => {
    return(
        <>
            <div class="products">
                <h3>Rượu Vang (hiện có 186 sản phẩm)</h3>
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
        </>
                   
    )
}
export default CategoryPage