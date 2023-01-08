<template>
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
                    <a href="https://www.facebook.com/" type="button" class="btn btn-floating btn-light btn-lg"><i
                            class="fab fa-facebook-f"></i></a>
                    <!-- Dribbble -->
                    <a href="https://www.instagram.com/" type="button" class="btn btn-floating btn-light btn-lg"><i
                            class="fa-brands fa-instagram"></i></a>
                    <!-- Twitter 
            <a type="button" class="btn btn-floating btn-light btn-lg"><i class="fab fa-twitter"></i></a>-->
                    <!-- Google + -->
                    <!-- <a type="button" class="btn btn-floating btn-light btn-lg"><i
                            class="fab fa-google-plus-g"></i></a> -->
                    <!-- Linkedin -->
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
                        <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">Marol, Andheri,
                            560001</span>
                    </li>
                    <li class="mb-3">
                        <span class="fa-li"><i class="fas fa-envelope"></i></span><span
                            class="ms-2">healthymeal@gmail.com</span>
                    </li>
                    <li class="mb-3">
                        <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+91
                            7738468667</span>
                    </li>
                    <hr>

                    <li>
                        <router-link to="/ContactComp"><button type="button" class="btn btn-light">Contact
                                US</button></router-link>
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
                            <td>Mon - Thu:</td>
                            <td>8am - 9pm</td>
                        </tr>
                        <tr>
                            <td>Fri - Sat:</td>
                            <td>8am - 1am</td>
                        </tr>
                        <tr>
                            <td>Sunday:</td>
                            <td>9am - 10pm</td>
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
<!--End of footer-->
</template>