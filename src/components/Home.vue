<template>

  <NavBar />
  <!--Main Body-->

  <!--Image slideshow-->
  <div class="img_container shadow fadeonload">
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
          <img src="../assets/Images/hm3.jpg" alt="Image" />
          <p class="centered">"The First Wealth Is Health!"<br></p>
        </div>
        <div class="carousel-item">
          <img src="../assets/Images/hm55.jpg" alt="Chicago">
          <p class="centered">"Your diet is a bank account. Good food choices are good investments."</p>
        </div>
        <div class="carousel-item">
          <img src="../assets/Images/hm8.jpg" alt="New York">
          <p class="centered">"You don’t have to eat less, you just have to eat right."</p>
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
      <div class="col-md-8 fadein" id="about_hm_data">
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
      <div class="col-md-4 fadein" id="about_hm_img">
        <img class="img-fluid rounded-circle shadow-lg hidden" src="../assets/Images/hm4.jpg">
      </div>
    </div>
  </div>

  <!--End of About Healthy Meal-->

  <!--Imp Info-->
  <div class="imp_info shadow fadein">
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
        <div class="sp_menu mt-5 fadein shadow">
            <p>Special Menu</p>
        </div>


        <div class="fadein card_container ">
            <div class="mt-5 ">
                <div class="card shadow">
                    <div class="card-body">
                        <img src="../assets/Images/hm1.jpg">
                        <p>Protein Salad</p>
                    </div>
                </div>
            </div>
    
            <div class="mt-5 ml-5">
                <div class="card shadow">
                    <div class="card-body">
                        <img src="../assets/Images/hm2.jpg">
                        
                        <p>Fish Tikka</p>
                    </div>
                </div>
            </div>
            <div class="mt-5 ml-5">
                <div class="card shadow">
                    <div class="card-body">
                        <img src="../assets/Images/hm3.jpg">

                        <p>Mexican Veg Taco's</p>
                    </div>
                </div>
            </div>

            <div class="mt-5 ml-5">
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
                         
                    
                        Healthy Meal has delivery tie ups with Swiggy, Zomato and Magicpin, that enable ordering-in as well.
                    </p>
        
                    
        
                    <div class="mt-4">
                    <!-- Facebook -->
                    <a type="button" class="btn btn-floating btn-light btn-lg" href="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                    <!-- Dribbble -->
                    <a type="button" class="btn btn-floating btn-light btn-lg" href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                    
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
                        <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">Marol, Andheri East, Mumbai, <br>Maharashtra 400059</span>
                    </li>
                    <li class="mb-3">
                        <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">healthymealaj@gmail.com</span>
                    </li>
                    <li class="mb-3">
                        <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+91 7738468667</span>
                    </li>
                    <hr >

                    <li>
                        <a href="ContactUs.html"><button type="button" class="btn btn-light" >Contact US</button></a>
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
        <!-- End of .container -->
                <!--End of footer-->

  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
          rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
          rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
      </li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
