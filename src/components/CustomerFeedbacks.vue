<template>
    <nav-comp></nav-comp>

    <div class="feedback_container">
        <h1>Customer Feedbacks</h1>
    </div>
    <div>
        <div class="row">
            <div class="col-md-8 offset-2 border mt-3 shadow rounded" v-for="i in arr" :key="i">
                <p id="name"><b>{{ i.attributes.Name }}</b></p>
                <hr>
                <p><b>Email:</b>{{ i.attributes.Email }}</p>
                <p><b>Mobile No.: </b>{{ i.attributes.PhoneNumber }}</p>
                <p><b>Feedback:</b>{{ i.attributes.Message }}</p>
            </div>
        </div>
    </div>

    <footer-comp></footer-comp>

</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            phone: null,
            message: '',
            arr:[],
            
        }
    },
    mounted(){
        fetch('http://localhost:1337/api/feedbacks')
        .then((response) => response.json())
        .then((data) => {
            this.arr=data.data;
            console.log('output:',this.arr);
        });  
    }        
}

</script>

<style scoped>
.feedback_container {
    background-image: url("../assets/Images/hm55.jpg");
    height: 250px;
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    color: white;
}

.feedback_container h1 {
    text-align: center;
    padding-top: 100px;
}

hr{
    height: 2px;
    width: 100px;
    background-color: red;
    margin: 0px;
    margin-bottom: 5px;
}

#name{
    margin-top: 10px;
}

p {
    color: gray;
}
</style>