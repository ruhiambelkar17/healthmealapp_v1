<script>
export default {
    name: 'HomeComp'
}
</script>

<template>
    <!--Navbar Comp-->
    <nav-comp></nav-comp>
    <!--Main Body-->

    <!--Image slideshow-->
    <div class="img_container shadow">


        <div id="demo" class="carousel slide " data-ride="carousel">

            <!-- Indicators -->
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
            </ul>

            <!-- The slideshow -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../assets/Images/hm55.jpg" alt="Image">
                </div>
                <div class="carousel-item">
                    <img src="../assets/Images/hm3.jpg" alt="Chicago">
                </div>
                <div class="carousel-item">
                    <img src="../assets/Images/meal3.jpg" alt="New York">
                </div>
            </div>

            <!-- Left and right controls -->
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>

        </div>
    </div>

    <!--End of Image slideshow-->

    <!--About Healthy Meal-->
    <div class="about_hm shadow">
        <div class="row mt-5 mr-5 ml-5">
            <div class="col-md-8 " id="about_hm_data">
                <h1>Welcome to Health Meal</h1>
                <h3>Jagushte Hospitality</h3>
                <hr>
                <p>
                    Healthy Meal is a homegrown Quick Service Restaurants for diet food, incepted on 23rd August 2021 by
                    Chef. Avinash Jagushte. It serves standardised flavours of the Indian burger- a branded variation of
                    Mumbai's local street food - in an organised QSR format, across high footfall locations. Healthy
                    Meal has delivery tie ups with Swiggy and Zomato, that enable ordering-in as well.
                </p>
            </div>
            <div class="col-md-4">
                <img class="img-fluid rounded-circle shadow-lg" src="../assets/Images/hm4.jpg">
            </div>
        </div>
    </div>

    <!--End of About Healthy Meal-->

    <!--Imp Info-->
    <div class="imp_info shadow">
        <div class="row mt-5 mr-5 ml-5">
            <div class="col-md-4 ">
                <img class="img-fluid rounded-circle shadow-lg" src="../assets/Images/hm6.jpg">
            </div>
            <div class="col-md-8" id="imp_info_data">
                <h1>Important Information</h1>
                <hr>
                <ul>
                    <li>Freshly prepared food daily</li>
                    <li>Open for Suggestions and special request</li>
                    <li>Order montly, weekly or daily</li>
                    <li>No hidden delivery fees</li>

                </ul>
            </div>
        </div>
    </div>

    <!--Imp Info-->

    <!--Special Menu-->
    <div class="sp_menu mt-5 shadow">
        <p>Special Menu</p>
    </div>


    <div class=" card_container ">
        <div class="mt-5 card1">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm1.jpg">
                    <p>Protein Salad</p>
                </div>
            </div>
        </div>

        <div class="mt-5 ml-5 card2">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm2.jpg">

                    <p>Fish Tikka</p>
                </div>
            </div>
        </div>
        <div class="mt-5 ml-5 card3">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm3.jpg">

                    <p>Mexican Veg Taco's</p>
                </div>
            </div>
        </div>

        <div class="mt-5 ml-5 card4">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm4.jpg">

                    <p>Gluten Free Veg Roll</p>
                </div>
            </div>
        </div>


    </div>


    <!--End of Special Menu-->
    <!--End of main body-->

    <!--Footer-->
    <footer-comp></footer-comp>

    <!-- End of .container -->
    


</template>




<style>
.img_container img {
    width: 75%;
    height: 600px;
    display: block;
    margin-left: auto;
    margin-right: auto;

}

.about_hm {}

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



.imp_info {}

#imp_info_data {

    padding-top: 80px;
}

#imp_info_data ul {
    justify-content: center;
}

#imp_info_data h1 {

    text-align: center;
}

.imp_info hr {
    width: 2cm;
    height: 2px;
    background-color: red;
}

.imp_info img {
    border: 5px solid white;
}

.sp_menu {
    background-color: rgb(235, 235, 235);
    text-align: center;
    height: 80px;
    font-size: 48px;
}

hr {
    background-color: aliceblue;
}

.card_container {

    display: flex;
    flex-direction: row;

    justify-content: center;

}

.card_container p {
    padding-top: 20px;
    text-align: center;
}

.card {

    width: 250px;
    height: 300px;

}

.card img {
    width: 100%;
    height: 80%;
    justify-content: center;
}

@media (max-width: 576px) { 
    .card2,.card3,.card4 {
        display: none;
    }
 }

/* Medium devices (tablets, 768px and up) */
@media (max-width: 768px) { 
    .card2,.card3,.card4 {
        display: none;
    }
 }

/* Large devices (desktops, 992px and up) */
@media (max-width: 992px) { 
    .card3,.card4 {
        display: none;
    }
 }

/* X-Large devices (large desktops, 1200px and up) */
 /* @media (max-width: 1200px) { 
    .card4 {
        display: none;
    }
 }  */


/* On screens that are 992px wide or less, go from four columns to two columns */
/*@media screen and (max-width: 992px) {
    .card_container {
      width: 80%;
    }
  }*/

/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
/* @media screen and (max-width: 600px) {
    .card_container {
      display: none;
    }
  }*/
</style>