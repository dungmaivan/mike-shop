const ProductDetailPage = () => {
    return (
        <>
                <div id="product">
                	<div id="product-head" class="row">
                    	<div id="product-img" class="col-lg-6 col-md-6 col-sm-12">
                        	<img src="/images/product1.png" />
                        </div>
                        <div id="product-details" class="col-lg-6 col-md-6 col-sm-12">
                        	<h1>Rượu thuốc ngâm rắn</h1>
                            <ul>
                            	<li><span>Nồng độ cồn:</span> 50%</li>
                                <li><span>Mồi tặng kèm : </span> 10 nem chua, 1 đĩa lạc, 1 mực khô</li>
                                <li><span>Vị rượu:</span> Cay nồng vch</li>
                                <li><span>Khuyến Mại:</span> Mua 2 lit tặng 1 con mực khô 300gr</li>
                                <li id="price">Giá Bán (chưa bao gồm VAT)</li>
                                <li id="price-number">9.990.000đ</li>
                                <li id="status">Còn hàng</li>
                            </ul>
                            <div id="add-cart"><a href="#">Mua ngay</a></div>
                        </div>
                    </div>
                    <div id="product-body" class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3>Đánh giá về  rượu sắn</h3>
                            <p>
                            Rượu rắn là một loại rượu thuốc rất được ưa chuộng và có giá trên thị trường. Nhiều người, đặc biệt là nam giới, thường lùng mua rượu rắn bằng mọi giá vì được rỉ tai về tác dụng cường gân, tráng cốt và gia tăng “bản lĩnh đàn ông” của loại rượu thuốc này
                            </p>
                            <p>
                            Theo y học cổ truyền, thịt rắn có vị ngọt, mặn, tính ôn, quy kinh can, có tác dụng trừ phong thấp, định kinh giản, giảm đau, tiêu độc. Mật rắn có vị ngọt, cay, không đắng như các loại mật khác, có tác dụng giảm đau, giảm ho, chống viêm, thường được dùng chung với thịt rắn trong rượu rắn. Rượu rắn rất tốt cho các trường hợp thận dương kém, đau xương khớp, đau dây thần kinh ngoại biên, suy yếu sinh lý, liệt dương, tiết tinh sớm, trí lực, thần kinh suy giảm.
                            </p>
                            <p>
                            Rượu rắn đã có từ thời Tây Chu và được coi là một loại thuốc trị bệnh, giúp tráng dương theo Trung Y. Nó có thể được tìm thấy ở Trung Quốc, Việt Nam và trên khắp khu vực Đông Nam Á.
                            </p>
                            <p>
                            Về cách điều chế rượu rắn, rắn được ngâm trong rượu gạo nồng độ cao. Thông thường rắn được chọn ngâm là rắn độc. Có người thắc mắc nên ngâm rượu với rắn khô hay tươi? Cả hai loại đều được dùng nhưng người ta thấy dùng tươi tốt hơn, trường hợp dùng khô là bất đắc dĩ. Có ý kiến lại cho rằng, dạng tươi uống tuy tanh hơn, nhưng hiệu quả cao hơn và phần nào an toàn hơn.
                            </p>
                            <p>
                            Theo các chuyên gia, mật rắn rất quý, nên để ngâm riêng tốt hơn ngâm chung với thịt rắn. Ngoài ra, có người ngâm chung rắn với các vị thuốc Đông y, mục đích tạo tương tác giữa chúng nhưng có người ngâm riêng. Tuy nhiên, chỉ trộn với nhau với một lượng đủ dùng trong một thời gian nhất định, chẳng hạn như ngày chủ nhật hàng tuần.
                            </p>
                        </div>
                    </div>
                    {/* cmt */}
                    <div id="comment" class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h3>Bình luận sản phẩm</h3>
                            <form method="post">
                                <div class="form-group">
                                    <label>Tên:</label>
                                    <input name="comm_name" required type="text" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label>Email:</label>
                                    <input name="comm_mail" required type="email" class="form-control" id="pwd" />
                                </div>
                                <div class="form-group">
                                    <label>Nội dung:</label>
                                    <textarea name="comm_details" required rows="8" class="form-control"></textarea>     
                                </div>
                                <button type="submit" name="sbm" class="btn btn-primary">Gửi</button>
                            </form> 
                        </div>
                    </div>
                    {/* cmt  */}
                    {/* cmt list	 */}
                    <div id="comments-list" class="row">
                    	<div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="comment-item">
                                <ul>
                                    <li><b>Nguyễn Văn Liệt Dương</b></li>
                                    <li>2022-01-03 20:40:10</li>
                                    <li>
                                        <p>Thằng em mình học bách khoa cơ khí, sinh năm 97. Tự mày mò học code rồi đi làm dev 2 năm nay, làm nhiều xong bị trĩ và liệt không lên được. Sau khi uống rượu này 1 tuần, mỗi tối phải làm 3-4 giờ mới xong việc. Có 1 vợ và 3 bồ, nhưng hoạt động chính vẫn là từ nhận các khách bên ngoài làm thêm vì các vợ và bồ không chịu được. Tuần làm 20, 30  cái nhẹ nhàng. Làm gần được 1 năm nay không nghỉ ngày nào. Nghĩ mà thèm.

</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="comment-item">
                                <ul>
                                    <li><b>Nguyễn Văn Anh</b></li>
                                    <li>2022-01-03 20:40:10</li>
                                    <li>
                                        <p>Khá ngon</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="comment-item">
                                <ul>
                                    <li><b>Nguyễn Văn Cương</b></li>
                                    <li>2022-01-03 20:40:10</li>
                                    <li>
                                        <p>Cũng tạm được</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="comment-item">
                                <ul>
                                    <li><b>Nguyễn Văn A</b></li>
                                    <li>2022-01-03 20:40:10</li>
                                    <li>
                                        <p>1 người khỏe 2 người vui</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End cmt list */}
                </div>
        </>
    )
}
export default ProductDetailPage;