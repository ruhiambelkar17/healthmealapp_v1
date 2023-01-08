<template>
    <NavBar />
    <!--Main body-->
    <div class="contact_container fadeonload">
        <h1>About US</h1>
    </div>

    <!--About Healthy Meal-->
    <div class="about_hm shadow fadeonload">
        <div class="row mt-5 mr-5 ml-5">
            <div class="col-md-8 " id="about_hm_data">
                <h1>Welcome to Healthy Meal</h1>
                <h3>Jagushte Hospitality</h3>
                <hr>
                <p>
                    Healthy Meal is a homegrown Quick Service Restaurants for diet food,
                    incepted on 14th September 2020 by Chef. Avinash Jagushte.
                    It serves standardised flavours of the diet food.
                </p>
                <p>

                    Healthy Meal has delivery tie ups with Swiggy, Zomato and Magicpin, that enable ordering-in as well.
                </p>
            </div>
            <div class="col-md-4" id="about_hm_img">
                <img class="img-fluid rounded-circle shadow-lg hidden" src="../assets/Images/hm4.jpg">
            </div>
        </div>
    </div>

    <!--End of About Healthy Meal-->



    <!--End of main body-->

    <!--Footer-->

    <!-- Remove the container if you want to extend the Footer to full width. -->
    <div class="my-5">

        <footer class="text-white text-center text-lg-start bg-dark">
            <!-- Grid container -->
            <div class="container p-4">
                <!--Grid row-->
                <div class="row mt-4">
                    <!--Grid column-->
                    <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 class="text-uppercase mb-4">About company</h5>

                        <p>
                            Healthy Meal is a homegrown Quick Service Restaurants for diet food,
                            incepted on 14th September 2020 by Chef. Avinash Jagushte.
                            It serves standardised flavours of the diet food.


                            Healthy Meal has delivery tie ups with Swiggy, Zomato and Magicpin, that enable ordering-in
                            as well.
                        </p>



                        <div class="mt-4">
                            <!-- Facebook -->
                            <a type="button" class="btn btn-floating btn-light btn-lg"
                                href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                            <!-- Dribbble -->
                            <a type="button" class="btn btn-floating btn-light btn-lg"
                                href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>

                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase mb-4 pb-1">Address</h5>

                        <!--<div class="form-outline form-white mb-4">
                <input type="text" id="formControlLg" class="form-control form-control-lg" />
                <label class="form-label" for="formControlLg">Search</label>
                </div>-->

                        <ul class="fa-ul" style="margin-left: 1.65em;">
                            <li class="mb-3">
                                <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">Marol, Andheri
                                    East, Mumbai, <br>Maharashtra 400059</span>
                            </li>
                            <li class="mb-3">
                                <span class="fa-li"><i class="fas fa-envelope"></i></span><span
                                    class="ms-2">healthymealaj@gmail.com</span>
                            </li>
                            <li class="mb-3">
                                <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+91
                                    7738468667</span>
                            </li>
                            <hr>

                            <li>
                                <a href="ContactUs.html"><button type="button" class="btn btn-light">Contact
                                        US</button></a>
                            </li>
                        </ul>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase mb-4">Opening hours</h5>

                        <table class="table text-center text-white">
                            <tbody class="fw-normal">
                                <tr>
                                    <td>Mon - Fri:</td>
                                    <td>9am - 9pm</td>
                                </tr>
                                <tr>
                                    <td>Sun:</td>
                                    <td>Closed</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <!--Grid column-->
                </div>
                <!--Grid row-->
            </div>
            <!-- Grid container -->

            <!-- Copyright -->
            <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
                © 2022 Copyright:
                <a class="text-white" href="#">Healthy Meal- Jagushte Hospitality</a>
            </div>
            <!-- Copyright -->
        </footer>
    </div>
</template>

<script>
export default {
    name: 'About',
    props: {
        msg: String
    }
}

$(document).ready(function () {
    $(window).scroll(function () {
        $('.fadein').each(function (i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {

                $(this).animate({ 'opacity': '1' }, 2000);

            }

        });

    });

});

$(document).ready(function () {

    $('.fadeonload').each(function (i) {

        $(this).animate({ 'opacity': '1' }, 1500);

    });

});
</script>

<style scoped>
.contact_container {
    background-image: url(../assets/Images/hm55.jpg);
    height: 250px;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;

    color: white;

}

.contact_container h1 {
    text-align: center;
    padding-top: 100px;
}

/*.fadein {
    opacity: 0;
}*/

.fadeonload {
    opacity: 0;
}

.about_hm hr {
    width: 2cm;
    height: 2px;
    background-color: red;
}

#about_hm_data {
    text-align: center;
    padding-top: 80px;

}

.about_hm img {
    border: 5px solid white;
}
</style>