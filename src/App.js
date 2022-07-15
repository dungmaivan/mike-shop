import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from './shared/components/Layout/Footer';
import Header from './shared/components/Layout/Header';
import Menu from './shared/components/Layout/Menu';
import Slider from './shared/components/Layout/Slider';
import SlideBar from './shared/components/Layout/SlideBar';

//page
import CategoryPage from './pages/CategoryPage';
import HomePages from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/Search';
import ProductDetailPage from './pages/ProductDetail';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <div className="">
      {/* Header	 */}
        <Header></Header>
      {/* End Header	 */}

      {/* Body	 */}
        <div id="body">
          <div class="container">
              <Menu></Menu>
                <div class="row">
                  <div id="main" class="col-lg-8 col-md-12 col-sm-12">
                        <Slider></Slider>
                      <BrowserRouter>
                        <Routes>
                          <Route path="/" element ={<HomePages />} />
                          <Route path="/category" element ={<CategoryPage />} />
                          <Route path="/search" element ={<SearchPage />} />
                          <Route path="/product-detail" element ={<ProductDetailPage />} />
                          <Route path="/login" element ={<LoginPage />} />
                          <Route path="*" element = {<NotFoundPage />} />

                        </Routes>
                      </BrowserRouter>
                  </div>

                  <SlideBar></SlideBar>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default App;
