import { useSelector } from "react-redux";


const Header = () => {
    const name = useSelector(function (state) {
        console.log("12345", state)
        return state.name;
    })
    return (

        <>
        <div id="header">
            <div class="container">
                <div class="row">
                    <div id="logo" class="col-lg-3 col-md-3 col-sm-12">
                        <h1><a href="#"><img class="img-fluid bachalogo" src="/images/bachalogo.png"/></a></h1>
                    </div>
                    <div id="search" class="col-lg-6 col-md-6 col-sm-12">
                        <form class="form-inline">
                            <input class="form-control mt-3" type="search" placeholder="Tìm kiếm" aria-label="Search" />
                            <button class="btn btn-danger mt-3" type="submit">Tìm kiếm</button>
                        </form>
                    </div>
                    <div id="cart" class="col-lg-3 col-md-3 col-sm-12">
                        <a class="mt-4 mr-2" href="#">giỏ hàng</a><span class="mt-3">8</span>
                        <button>{name}</button>
                    </div>
                </div>
            </div>
            {/* Toggler/collapsibe Button  */}
            <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#menu">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>  
        </>
    )
}
export default Header;