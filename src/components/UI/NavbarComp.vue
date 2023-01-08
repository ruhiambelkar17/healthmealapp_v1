<template>
     <!--Navbar-->
        
     <nav class="navbar navbar-expand-sm bg-light navbar-light sticky-top shadow">
            
            <a class="navbar-brand">Healthy Meal</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon "></span>
            </button>

                
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav text-left">

                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/">Home</router-link></a>
                    </li> 

                    <li class="nav-item">
                        <!-- <a class="nav-link" href="Gallery.html">Gallery</a> -->
                        <a class="nav-link"><router-link to="/GalleryComp">Gallery</router-link></a>
                    </li>
    
                    <li class="nav-item">
                        <a class="nav-link" ><router-link to="/AboutComp">About Us</router-link></a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" ><router-link to="/OrderComp">Order Online</router-link></a>
                    </li>
    
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/ContactComp">Contact Us</router-link></a>
                    </li>
                </ul>
            </div>
        

        </nav>
        

        <!--End of Navbar-->
</template>

<script>

</script>

<style>
a {
    color:gray;
}
</style>