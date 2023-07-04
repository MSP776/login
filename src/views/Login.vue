<template>
	<div class="big-box">
		<div class="middle-box">
			<div class="detail">
				<h1>Login</h1>
				<form @submit.prevent="login">
					<div class="username-input">
						<label for="loginUsername">用户名:</label>
						<input type="text" id="loginUsername" v-model="loginForm.username" />
					</div>
					<div class="password-input">
						<label for="loginPassword">密码:</label>
						<input type="password" id="loginPassword" v-model="loginForm.password" />
					</div>
					<div class="login-button">
						<button type="submit">Login</button>
						<!-- <router-link to="/register">注册</router-link> -->
						<van-button type="primary" to="register" size='mini'>注册</van-button>

						
					</div>
				</form>

			</div>


		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	
	export default {
		data() {
			return {
				loginForm: {
					username: '',
					password: '',
				},
				message: '',
			};
		},

		methods: {
			login() {
				axios
					.post('https://8.130.111.133:3000/login', this.loginForm)
					.then((response) => {
						this.message = response.data.message;
						console.log(response.data);
						if (response.data.code == 400) {
							this.$toast(this.message);
						}
						if (response.data.code == 401) {
							this.$toast(this.message);
						}
						if (response.data.code == 500) {
							this.$toast(this.message);
						}
						if (response.data.code == 200) {
							this.$toast(this.message);
							this.$router.push({path:'/detail'})
						}

					})
					.catch((error) => {
						console.error(error);
						console.log(error.data);
						this.message = 'An error occurred during login';
					});
			},

		},
		// mounted() {
		// 	document.querySelector('body').setAttribute('style', 'background-color:#00aaff')
		// },
		// beforeDestroy() {
		// 	document.querySelector('body').removeAttribute('style') 
		// },
	};
</script>

<style>
	.big-box {
		background: url("../assets/1.jpg");
		background-repeat: no-repeat;
		background-size: 100% 100%;
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0px;
		left: 0px;

		.middle-box {
			text-align: center;
			background-color: #ececec;
			border-radius: 20px;
			width: 300px;
			height: 250px;
			margin: auto;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			opacity: 0.7;

			.detail {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				/* position: absolute; */
				/* left: 20px; */
			}
		}
	}

	input {
		outline-color: invert;
		outline-style: none;
		outline-width: 0px;
		border: none;
		border-style: none;
		text-shadow: none;
		-webkit-appearance: none;
		-webkit-user-select: text;
		outline-color: transparent;
		box-shadow: none;
	}

	.username-input {
		margin-bottom: 15px;
	}

	.password-input {
		margin-left: 14px;
		/* 	margin-bottom: 15px;
	position: absolute;
	left: 57px; */

	}

	.login-button {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin-top: 24px;
	}
</style>
