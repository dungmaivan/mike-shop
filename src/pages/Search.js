import ProductItem from "../shared/components/ProductItem";
const SearchPage = () => {
    return(
        <>
            <div class="products">
                <div id="search-result">Kết quả tìm kiếm với <span>rượu simp</span></div>
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
export default SearchPage;