<template>
  <div class="reg-form">
    <div class="container">
      <div class="reg-form__content">
        <div class="reg-form__logo">
          <a href="#">
            <img
              class="reg-form__image"
              src="../images/icons/form/form-logo.svg"
              alt="logo"
            />
          </a>
        </div>

        <div class="reg-form__title" v-if="!formSuccess">
          <span><a href="#">Sign Up</a></span> and find the best place to rest
          while traveling
        </div>

        <div class="reg-form__title" v-else>
          <span>Thank You!</span> We will contact you soon.
        </div>

        <form
          class="reg-form__body"
          @submit.prevent="submitHandler"
          v-if="!formSuccess"
        >
          <div class="reg-form__row">
            <div class="reg-form__col">
              <label class="reg-form__label reg-form__label--name">
                <input
                  class="reg-form__input"
                  type="text"
                  placeholder="First Name"
                  name="first-name"
                  autocomplete="off"
                  required
                  tabindex="1"
                  v-model.trim="firstName"
                />
              </label>

              <label class="reg-form__label reg-form__label--second-name">
                <input
                  class="reg-form__input"
                  type="text"
                  placeholder="Second Name"
                  name="second-name"
                  autocomplete="off"
                  tabindex="2"
                  v-model.trim="secondName"
                />
              </label>

              <label class="reg-form__label reg-form__label--country">
                <select
                  class="reg-form__input reg-form__select"
                  required
                  tabindex="3"
                  v-model="country"
                  @change="changeCodeCountry"
                >
                  <option
                    class="reg-form__select-option reg-form__country"
                    hidden
                    value="Country"
                  >
                    Country
                  </option>

                  <option
                    class="reg-form__select-option"
                    v-for="item in countries"
                    :key="item.id"
                  >
                    {{ item.name }}
                  </option>
                </select>
              </label>

              <label class="reg-form__label reg-form__label--phone">
                <input
                  class="reg-form__input"
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  autocomplete="off"
                  tabindex="4"
                  required
                  v-model.trim="phone"
                  @input="validatePhoneNum($event)"
                />
              </label>

              <label class="reg-form__label reg-form__label--password">
                <input
                  class="reg-form__input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  tabindex="5"
                  v-model="password"
                />
              </label>

              <label class="reg-form__label reg-form__label--confirm">
                <input
                  class="reg-form__input"
                  :class="{ 'reg-form__input--alert': errors.password }"
                  type="password"
                  placeholder="Confirm password"
                  name="confirm-password"
                  tabindex="6"
                  v-model="confirmPassword"
                  @change="validatePassword()"
                />
              </label>

              <label class="reg-form__label reg-form__label--email">
                <input
                  class="reg-form__input"
                  type="email"
                  placeholder="Email"
                  name="email"
                  autocomplete="off"
                  required
                  tabindex="7"
                  v-model.trim="email"
                />
              </label>

              <div class="reg-form__agree reg-form__label--agreement">
                <input
                  class="reg-form__agree-check"
                  type="checkbox"
                  required
                  id="agreement"
                  tabindex="8"
                  v-model="agreement"
                />

                <label class="reg-form__agree-label" for="agreement">
                  I agree to the &nbsp;<span
                    ><a href="#" target="_blank"> Terms & Conditions</a></span
                  ></label
                >
              </div>
            </div>
          </div>

          <div class="button__wrapper">
            <input type="submit" class="button" value="Sign Up" tabindex="9" />
          </div>
        </form>
      </div>
    </div>

    <div class="reg-form__login-wrapper">
      <div class="reg-form__login">
        If you have an account, <a href="#"><span>Log In</span></a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    countries: Array,
  },
  data() {
    return {
      firstName: "",
      secondName: "",
      country: "Country",
      phone: "",
      password: "",
      confirmPassword: "",
      email: "",
      agreement: false,
      errors: {
        password: null,
      },
      formSuccess: false,
    };
  },
  methods: {
    submitHandler() {
      if (this.errors.password === false) {
        axios
          .post(
            "https://best-rest-site-form-default-rtdb.firebaseio.com/user.json",
            {
              firstName: this.firstName,
              lastName: this.secondName,
              country: this.country,
              phoneNumber: this.phone,
              password1: this.password,
              password2: this.confirmPassword,
              email: this.email,
              agreement: this.agreement,
            }
          )
          .then(function (response) {
            console.log(response.data);
            console.log("Ok. The data was successfully received.");
          })
          .catch(function (error) {
            console.log(error);
          });

        this.formSuccess = true;
      }
    },

    changeCodeCountry() {
      if (this.country !== "Country") {
        const findCountry = this.countries.find(
          (x) => x.name === this.country
        ).code;

        this.phone = findCountry;
      }
    },
    validatePhoneNum(event) {
      if (isNaN(+event.data)) {
        this.phone = this.phone.substring(0, this.phone.length - 1);
      }
    },
    validatePassword() {
      if (this.password === this.confirmPassword) {
        this.errors.password = false;
      } else {
        this.errors.password = true;
      }
    },
  },
};
</script>

<style scope>
</style>
