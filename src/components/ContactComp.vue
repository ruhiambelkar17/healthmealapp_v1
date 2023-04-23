<template>
    <!-- <button @click="sendEmail">send</button> -->
    <!--Navbar Comp-->
    <nav-comp></nav-comp>
    <!--Main body-->
    <div class="contact_container">
        <h1>Contact Us</h1>
    </div>

    <div class="container-fluid mt-5 ">
        <div class="row">

            <div class="col-md-6 offset-md-3 shadow">

                <form @submit.prevent="SubmitFeedback">
                    <div class="mt-2">
                        <h2>Get in touch</h2>
                        <hr>
                    </div>
                    <div class="form-group">
                        <label for="name"></label>
                        <input type="text" id="name" placeholder="Name" class="form-control" v-model="name">
                    </div>

                    <div class="form-group">
                        <lable for="email"></lable>
                        <input type="email" id="email" placeholder="E-mail" class="form-control" v-model="email">
                    </div>

                    <!-- <div class="form-group">
                        <lable for="password"></lable>
                        <input type="password" id="password" placeholder="Password" class="form-control"
                            v-model="password">
                    </div> -->

                    <div class="form-group">
                        <lable for="phone"></lable>
                        <input type="number" id="phone" placeholder="Phone Number" class="form-control" ref="phone"
                            v-model="phone">
                    </div>

                    <!-- <div class="form-group">
                        <lable for="subject"></lable>
                        <input type="text" id="subject" placeholder="Subject" class="form-control" v-model="subject">
                    </div> -->

                    <div class="form-group">
                        <lable for="message"></lable>
                        <textarea id="message" rows="5" class="form-control" placeholder="Your Feedback"
                            v-model="message"></textarea>
                    </div>

                    <div id="form_btn">
                        <button type="submit" class="btn btn-secondary mb-3 shadow">Submit</button>
                    </div>


                </form>

            </div>
            <div class="d-flex justify-content-center align-items-center">
                <transition name="dialog">
                    <dialog-box v-if="isSubmitted" class="d-flex justify-content-center align-items-center">
                        <div>
                            <h3>Form Submitted Successfully!!</h3>
                            <button id="dialog_btn" type="button" class="btn btn-light rounded shadow text-center "
                                @click="DialogOk">Ok</button>
                        </div>
                    </dialog-box>
                </transition>
            </div>

        </div>
    </div>


    <!--End of main body-->

    <!--Footer-->
    <footer-comp></footer-comp>
    <!-- End of .container -->
</template>

<script>
import  Email  from '@/assets/smtp/smtp.js'
export default {
    data() {
        return {
            name: '',
            email: '',
            //password: '',
            phone: null,
            //subject: '',
            message: '',
            isSubmitted: false
        }
    },
    methods: {
        sendEmail() {
            Email.send(
                {
                    Host: "smtp.gmail.com",
                    Username: "education2.0@arsquare.dev",
                    Password: "zwbeaidnjyeflazi",
                    To: 'sufiyan0budye17@gmail.com',
                    From: 'education2.0@arsquare.dev',// 'ruhiambelkar17@gmail.com',
                    Subject: 'Thank you for contacting us ...!',
                    Body: 'Your request has been recorded'
                }
            ).then(() => { alert('Form submitted') }).catch(err=>alert(err))
        },
        SubmitFeedback() {
            if (this.name === '' && this.email === '' && this.message === '') {
                alert('Error!')
            }
            else {
                fetch('http://localhost:1337/api/feedbacks', {
                    method: 'POST',
                    headers:
                    {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        'data':
                        {
                            'Name': this.name,
                            'Email': this.email,
                            //'Password': this.password,
                            'PhoneNumber': this.phone,
                            //'Subject': this.subject,
                            'Message': this.message
                        }

                    }),
                })
                    .then(response => response.json())
                    .then(data => console.log(data));
                //to clear the values after form submit  
                this.name = '';
                this.email = '';
                //this.password = '';
                this.phone = null;
                //this.subject = '';
                this.message = '';

                this.isSubmitted = true;

            }
        },
        DialogOk() {
            this.isSubmitted = false;
        }
    }
}
</script>

<style>
.contact_container {
    background-image: url("../assets/Images/hm55.jpg");
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

#form_btn {
    text-align: center;
}

form h2 {
    text-align: center;
}

form hr {
    width: 2cm;
    height: 2px;
    background-color: red;
}

#dialog_btn {
    width: 80px;
    border: 1px solid grey;
    margin-top: 20px;

}

.dialog-enter-from {
    opacity: 0;
    transform: translateY(-50px) scale(0.2);
}

.dialog-enter-active {
    opacity: 0.5;
    transition: all 0.3s ease-out;
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
    opacity: 0.5;
    transition: all 0.3s ease-in;
}

.dialog-leave-to {
    opacity: 0;
    transform: translateY(-50px) scale(0.2);
}
</style>