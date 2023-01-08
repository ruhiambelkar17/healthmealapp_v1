<template>
    <!--Navbar Comp-->
    <nav-comp></nav-comp>

    <!--Main body-->
    <div class="order_container">
        <h1>Order Online</h1>
    </div>

    <div class="online_partner mt-5 ">
        <div class="row">
            <div class="col-md-4 zoom">
                <a href="https://www.swiggy.com"><img class="img-fluid rounded-circle shadow"
                        src="../assets/Images/Swiggy.jpg"> </a>
            </div>
            <div class="col-md-4 zoom">
                <a href="https://www.zomato.com/mumbai/healthy-meals-chandivali/photos"><img class="img-fluid rounded-circle shadow"
                        src="../assets/Images/zomato.png"> </a>
            </div>
            <div class="col-md-4 zoom">
                <a href="https://magicpin.in/Mumbai/Chandivali/Restaurant/Healthy-Meals/store/5c7b8c/?utm_source=searchlandingpage"><img class="img-fluid rounded-circle shadow"
                        src="../assets/Images/magicpin.jpg"> </a>
            </div>
        </div>
    </div>
    <!--End of main body-->

    <!--Footer-->
    <footer-comp></footer-comp>
    <!-- End of .container -->

</template>



<style>
.order_container {
    background-image: url("../assets/Images/hm55.jpg");
    height: 250px;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;

    color: white;

}

.order_container h1 {
    text-align: center;
    padding-top: 100px;
}

.online_partner {
    text-align: center;
}

.online_partner img {
    height: 200px;
    width: 200px;
    border: 5px solid white;
}

.zoom {
    transition: transform .2s;
}

.zoom:hover {
    transform: scale(1.2);
    /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>