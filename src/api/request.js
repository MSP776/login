import http from './http.js'

// 导出一个值


export const Baiyang = (params) => {
	//白羊
	return http({
		url: '/horoscope',
		method: 'get',
		params:{
			type:'aries',
			time:'today'
		}
	})
}

export const Jinniu = (params) => {
	//金牛
	return http({
		url: '/horoscope',
		method: 'get',
		params:{
			type:'taurus',
			time:'today'
		}
	})
}

export const Shuangzi = (params) => {
	//双子
	return http({
		url: '/horoscope',
		method: 'get',
		params:{
			type:'gemini',
			time:'today'
		}
	})
}

export const Juxie = (params) => {
	//巨蟹
	return http({
		url: '/horoscope',
		method: 'get',
		params:{
			type:'cancer',
			time:'today'
		}
	})
}

export const Shizi = (params) => {
	//狮子
	return http({
		url: '/horoscope',
		method: 'get',
		params:{
			type:'leo',
			time:'today'
		}
	})
}

export const Chunv = (params) => {
	//处女
	return http({
		url: '/horoscope',
		method: 'get',
		params:{
			type:'virgo',
			time:'today'
		}
	})
}

export const Tiancheng = (params) => {
	//天秤
	return http({
		url: '/horoscope',
		method: 'get',
		params:{
			type:'libra',
			time:'today'
		}
	})
}

export const Tianxie = (params) => {
	//天蝎
	return http({
		url: '/horoscope',
		method: 'get',
		params:{
			type:'scorpio',
			time:'today'
		}
	})
}

export const Sheshou = (params) => {
	//射手
	return http({
		url: '/horoscope',
		method: 'get',
		params:{
			type:'sagittarius',
			time:'today'
		}
	})
}

export const Mojie = (params) => {
	//摩羯
	return http({
		url: '/horoscope',
		method: 'get',
		params:{
			type:'capricorn',
			time:'today'
		}
	})
}

export const Shuiping = (params) => {
	//水瓶
	return http({
		url: '/horoscope',
		method: 'get',
		params:{
			type:'aquarius',
			time:'today'
		}
	})
}

export const Shuangyu = (params) => {
	//双鱼
	return http({
		url: '/horoscope',
		method: 'get',
		params:{
			type:'pisces',
			time:'today'
		}
	})
}




