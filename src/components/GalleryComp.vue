<template>
    <!--Navbar Comp-->
    <nav-comp></nav-comp>


    <!--Main body-->
    <div class="gallery_container shadow">
        <h1>Gallery</h1>
    </div>


    <div class="gallery_card_container">
        <div class="mt-5 zoom card1">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm7.jpg">
                </div>
            </div>
        </div>

        <div class="mt-5 ml-5 zoom card2">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm8.jpg">
                </div>
            </div>
        </div>
        <div class="mt-5 ml-5 zoom card3">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm9.jpg">
                </div>
            </div>
        </div>

        <div class="mt-5 ml-5 zoom card4">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm4.jpg">
                </div>
            </div>
        </div>

    </div>

    <div class="gallery_card_container ">
        <div class="mt-5 zoom card11">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm10.jpg">
                </div>
            </div>
        </div>

        <div class="mt-5 ml-5 zoom card12">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm2.jpg">
                </div>
            </div>
        </div>
        <div class="mt-5 ml-5 zoom card13">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm3.jpg">
                </div>
            </div>
        </div>

        <div class="mt-5 ml-5 zoom card14">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm4.jpg">
                </div>
            </div>
        </div>

    </div>

    <div class="gallery_card_container ">
        <div class="mt-5 zoom card21">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm1.jpg">
                </div>
            </div>
        </div>

        <div class="mt-5 ml-5 zoom card22">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm2.jpg">
                </div>
            </div>
        </div>
        <div class="mt-5 ml-5 zoom card23">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm3.jpg">
                </div>
            </div>
        </div>

        <div class="mt-5 ml-5 zoom card24">
            <div class="card shadow">
                <div class="card-body">
                    <img src="../assets/Images/hm4.jpg">
                </div>
            </div>
        </div>

    </div>
    <!--End of Main body-->
    <!--Footer-->
    <footer-comp></footer-comp>
    <!-- End of .container -->


</template>

<script>
</script>

<style>
.gallery_container {
    background-image: url("../assets/Images/hm55.jpg");
    height: 250px;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;

    color: white;

}

.gallery_container h1 {
    text-align: center;
    padding-top: 100px;
}

.gallery_card_container {

    display: flex;
    flex-direction: row;

    justify-content: center;

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

.zoom {

    transition: transform .2s;


}

.zoom:hover {
    transform: scale(1.2);
    /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

/* @media  screen and (min-width<576px) {
  .card3 .card4 .card13 .card14 .card23 .card24  {
    display: none;
  }
} */

@media (max-width: 576px) { 
    .card2,.card3,.card4,.card12,.card13,.card14,.card22,.card23,.card24 {
        display: none;
    }
 }

/* Medium devices (tablets, 768px and up) */
@media (max-width: 768px) { 
    .card2,.card3,.card4,.card12,.card13,.card14,.card22,.card23,.card24 {
        display: none;
    }
 }

/* Large devices (desktops, 992px and up) */
@media (max-width: 992px) { 
    .card3,.card4,.card13,.card14,.card23,.card24 {
        display: none;
    }
 }

/* X-Large devices (large desktops, 1200px and up) */
@media (max-width: 1200px) { 
    .card3,.card4,.card13,.card14,.card23,.card24 {
        display: none;
    }
 }

/*  XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... }*/
</style> 