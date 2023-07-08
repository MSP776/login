<template>
	<div class="big-box">
		<div class="middle-box">
			<div class="detail">
				<h1>Registration</h1>
				<form @submit.prevent="register">
					<div class="username-input">
						<label for="username">用户名:</label>
						<input type="text" id="username" v-model="registerForm.username" />
					</div>
					<div class="password-input">
						<label for="password">密码:</label>
						<input type="password" id="password" v-model="registerForm.password" />
					</div>
					<div class="login-button">
						<button type="submit" >注册</button>
					</div>
				</form>
			
			</div>

		</div>
	</div>

</template>

<script>
	import vue from 'vue'
	import axios from 'axios';
	export default {
		data() {
			return {
				registerForm: {
					username: '',
					password: '',
				},
				code: "",

			}
		},
		methods: {
			register() {
				axios
					.post('https://8.130.111.133:3000/register', this.registerForm)
					.then((response) => {
						console.log(response.data);
						this.code = response.data.code
						console.log(this.code);
						if (this.code == 200) {
							this.$toast('注册成功');
							this.$router.push({
								path: '/login'
							})
						}
						if (this.$data.code == 400) {
							this.$toast('用户名或密码不能为空');
						}
						if (this.$data.code == 409) {
							this.$toast('用户名已存在');
						}
						if (this.$data.code == 500) {
							this.$toast('服务器问题');
						}
					})
					.catch((error) => {
						console.error(error);
						this.message = 'An error occurred during registration';
					});

			},

		},

	}
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
		margin-left: 13px;
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

	.toLogin {
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
		background: #4bdbe4;
		/* color: white; */
		width: 61px;
		position: absolute;
		right: 5px;
		bottom: 9px;
		border-radius: 10px;
	}
</style>
