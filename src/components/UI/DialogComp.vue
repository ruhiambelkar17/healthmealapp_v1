<template>
    <transition name="dialog" >
        <dialog open class=" d-flex justify-content-center shadow rounded">
        <slot>
        </slot>
        </dialog>
    </transition>
    
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

.dialog-enter-from {
    opacity: 0;
     transform: translateY(-50px) scale(0.2); 
}

.dialog-enter-active {
    opacity:0.5;
    transition:all  0.3s ease-out;   
}

.dialog-enter-to {
    opacity: 1;
     transform: translateY(0px) scale(1);    
}

.dialog-leave-from {
    opacity: 1;
     transform: translateY(0px) scale(1);    
}

.dialog-leave-active {
    opacity:0.5;
    transition:all  0.3s ease-in;   
}

.dialog-leave-to {
    opacity: 0;
     transform: translateY(-50px) scale(0.2); 
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