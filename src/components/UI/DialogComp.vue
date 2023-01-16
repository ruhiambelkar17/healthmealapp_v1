<template>
    
        <dialog open class=" d-flex justify-content-center shadow rounded">
            <slot>
            </slot>
        </dialog>
    
    
</template>

<script>

</script>

<style scoped>
dialog {
    border: 3px solid green;
    width: 500px;
    height: 150px;
    text-align: center;
    flex-direction: column;
    /* opacity: 0.5; */
}


    
   


@media (max-width: 576px) { 
    dialog {
        width: 500px;
        height: 150px;
    }
 }

/* Medium devices (tablets, 768px and up) */
@media (max-width: 768px) { 
    dialog {
        width: 500px;
        height: 150px;
    }
 }

/* Large devices (desktops, 992px and up) */
@media (max-width: 992px) { 
    dialog {
        width: 500px;
        height: 150px;
    }
 }

/* X-Large devices (large desktops, 1200px and up) */
@media (max-width: 1200px) { 
    dialog {
        width: 250px;
        height: 150px;
    }
 }



</style>