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



</style>