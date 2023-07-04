import http from './http.js'

// 导出一个值


export const sendRegister = (params) => {
	// 注册
	return http({
		url: '/register',
		method: 'post',
	})
}

export const sendLogin = (params) => {
	// 登录
	return http({
		url: '/login',
		method: 'post',
	})
}

