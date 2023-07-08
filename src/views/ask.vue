<template>
	<view class="">
		待开发...
		{{userid}}
	</view>
</template>

<script>
	import {
		onMounted,
		reactive,
		toRefs,
		ref,
	} from 'vue';

	export default {
		setup() {
			let data = reactive({
				userid: ''
			})

			let getData = () => {

				// sessionStorage.setItem("userid", 3)
				sessionStorage.setItem("userid",33)
				data.userid = sessionStorage.getItem("userid")
			}



			onMounted(() => {
				getData()
			})
			return {
				...toRefs(data),
			}
		}
	}
</script>

<style>
</style>
