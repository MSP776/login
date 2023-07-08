<template>
	<!-- 中划线命名 -->
	<van-dialog />

	<div class="container">
		<div class="header">
			<div class="box">
				<h1>
					<!-- <img src="../assets/logo.png"> -->
					<span>Aubuary</span>
				</h1>
				<nav>
					<router-link active-class="active" to="/home">首页</router-link>
					<router-link active-class="active" to="/ask">问答</router-link>
					<router-link active-class="active" to="/community">社区</router-link>
				</nav>
			</div>
			<div class="box">
				<input class="text" type="text" placeholder="请输入关键词~~~" name="search">
				<input class="button" type="button" value="搜索">
				<nav>
					<a href="/login" v-if="uid==null">登录</a>
					<text v-if="uid!==null">{{uid}}</text>
					<a href="/register" v-if="uid==null">注册</a>
					
				</nav>
			</div>
		</div>

		<div class="contents">
			<div class="left-box">
				<a href="#" v-for="(item,index) in mainData" :key="index" @click="leftClick($event,index)">
					{{item}}
				</a>
			</div>
			<div class="right-box">
				<div class="BOX" v-if="symbol==0">
					<div class="topbox">
						<text style="font-size: 35px;">{{BaiyangData.title}} -- </text>
						<text style="font-size: 20px;">{{BaiyangData.type}} -- </text>
						<text style="font-size: 10px;">{{BaiyangData.time}}</text>

						<!-- {{BaiyangYunshi.health}} -->
					</div>
					<div class="middlebox">
						<text style="color: coral;">今日宜做：{{BaiyangTodo.yi}}</text>
						<text style="color: crimson;">今日忌做：{{BaiyangTodo.ji}}</text>
					</div>
					<div class="bottombox">
						<text style="font-size: 20px; border-bottom: 1px solid;">sp独家运势解析</text>
						<van-collapse v-model="activeName" accordion>
							<van-collapse-item title="综合运势" name="1">
								{{BaiyangYunshi.all}}
							</van-collapse-item>
							<van-collapse-item title="爱情运势" name="2">
								{{BaiyangYunshi.love}}
							</van-collapse-item>
							<van-collapse-item title="学业工作" name="3">
								{{BaiyangYunshi.work}}
							</van-collapse-item>
							<van-collapse-item title="财富运势" name="4">
								{{BaiyangYunshi.money}}
							</van-collapse-item>
							<van-collapse-item title="健康运势" name="5">
								{{BaiyangYunshi.health}}
							</van-collapse-item>
						</van-collapse>
					</div>
					<div class="tips">
						<text style="font-size: 20px; border-bottom: 1px solid;">今日tips</text>
						<van-tabs v-model:active="active" @click-tab="onClickTab">
							<van-tab title="幸运数字"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{BaiyangData.luckynumber}}</text>
							</van-tab>
							<van-tab title="幸运颜色"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{BaiyangData.luckycolor}}</text>
							</van-tab>
							<van-tab title="速配星座"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{BaiyangData.luckyconstellation}}</text>
							</van-tab>
						</van-tabs>
					</div>
					<div class="comment">
						<text>suggestion：{{BaiyangData.shortcomment}}</text>
					</div>
				</div>
				<div class="BOX" v-if="symbol==1">
					<div class="topbox">
						<text style="font-size: 35px;">{{JinniuData.title}} -- </text>
						<text style="font-size: 20px;">{{JinniuData.type}} -- </text>
						<text style="font-size: 10px;">{{JinniuData.time}}</text>

						<!-- {{JinniuYunshi.health}} -->
					</div>
					<div class="middlebox">
						<text style="color: coral;">今日宜做：{{JinniuTodo.yi}}</text>
						<text style="color: crimson;">今日忌做：{{JinniuTodo.ji}}</text>
					</div>
					<div class="bottombox">
						<text style="font-size: 20px; border-bottom: 1px solid;">sp独家运势解析</text>
						<van-collapse v-model="activeName" accordion>
							<van-collapse-item title="综合运势" name="1">
								{{JinniuYunshi.all}}
							</van-collapse-item>
							<van-collapse-item title="爱情运势" name="2">
								{{JinniuYunshi.love}}
							</van-collapse-item>
							<van-collapse-item title="学业工作" name="3">
								{{JinniuYunshi.work}}
							</van-collapse-item>
							<van-collapse-item title="财富运势" name="4">
								{{JinniuYunshi.money}}
							</van-collapse-item>
							<van-collapse-item title="健康运势" name="5">
								{{JinniuYunshi.health}}
							</van-collapse-item>
						</van-collapse>
					</div>
					<div class="tips">
						<text style="font-size: 20px; border-bottom: 1px solid;">今日tips</text>
						<van-tabs v-model:active="active" @click-tab="onClickTab">
							<van-tab title="幸运数字"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{JinniuData.luckynumber}}</text>
							</van-tab>
							<van-tab title="幸运颜色"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{JinniuData.luckycolor}}</text>
							</van-tab>
							<van-tab title="速配星座"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{JinniuData.luckyconstellation}}</text>
							</van-tab>
						</van-tabs>
					</div>
					<div class="comment">
						<text>suggestion：{{JinniuData.shortcomment}}</text>
					</div>
				</div>
				<div class="BOX" v-if="symbol==2">
					<div class="topbox">
						<text style="font-size: 35px;">{{ShuangziData.title}} -- </text>
						<text style="font-size: 20px;">{{ShuangziData.type}} -- </text>
						<text style="font-size: 10px;">{{ShuangziData.time}}</text>

						<!-- {{ShuangziYunshi.health}} -->
					</div>
					<div class="middlebox">
						<text style="color: coral;">今日宜做：{{ShuangziTodo.yi}}</text>
						<text style="color: crimson;">今日忌做：{{ShuangziTodo.ji}}</text>
					</div>
					<div class="bottombox">
						<text style="font-size: 20px; border-bottom: 1px solid;">sp独家运势解析</text>
						<van-collapse v-model="activeName" accordion>
							<van-collapse-item title="综合运势" name="1">
								{{ShuangziYunshi.all}}
							</van-collapse-item>
							<van-collapse-item title="爱情运势" name="2">
								{{ShuangziYunshi.love}}
							</van-collapse-item>
							<van-collapse-item title="学业工作" name="3">
								{{ShuangziYunshi.work}}
							</van-collapse-item>
							<van-collapse-item title="财富运势" name="4">
								{{ShuangziYunshi.money}}
							</van-collapse-item>
							<van-collapse-item title="健康运势" name="5">
								{{ShuangziYunshi.health}}
							</van-collapse-item>
						</van-collapse>
					</div>
					<div class="tips">
						<text style="font-size: 20px; border-bottom: 1px solid;">今日tips</text>
						<van-tabs v-model:active="active" @click-tab="onClickTab">
							<van-tab title="幸运数字"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{ShuangziData.luckynumber}}</text>
							</van-tab>
							<van-tab title="幸运颜色"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{ShuangziData.luckycolor}}</text>
							</van-tab>
							<van-tab title="速配星座"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{ShuangziData.luckyconstellation}}</text>
							</van-tab>
						</van-tabs>
					</div>
					<div class="comment">
						<text>suggestion：{{ShuangziData.shortcomment}}</text>
					</div>
				</div>
				<div class="BOX" v-if="symbol==3">
					<div class="topbox">
						<text style="font-size: 35px;">{{JuxieData.title}} -- </text>
						<text style="font-size: 20px;">{{JuxieData.type}} -- </text>
						<text style="font-size: 10px;">{{JuxieData.time}}</text>

						<!-- {{JuxieYunshi.health}} -->
					</div>
					<div class="middlebox">
						<text style="color: coral;">今日宜做：{{JuxieTodo.yi}}</text>
						<text style="color: crimson;">今日忌做：{{JuxieTodo.ji}}</text>
					</div>
					<div class="bottombox">
						<text style="font-size: 20px; border-bottom: 1px solid;">sp独家运势解析</text>
						<van-collapse v-model="activeName" accordion>
							<van-collapse-item title="综合运势" name="1">
								{{JuxieYunshi.all}}
							</van-collapse-item>
							<van-collapse-item title="爱情运势" name="2">
								{{JuxieYunshi.love}}
							</van-collapse-item>
							<van-collapse-item title="学业工作" name="3">
								{{JuxieYunshi.work}}
							</van-collapse-item>
							<van-collapse-item title="财富运势" name="4">
								{{JuxieYunshi.money}}
							</van-collapse-item>
							<van-collapse-item title="健康运势" name="5">
								{{JuxieYunshi.health}}
							</van-collapse-item>
						</van-collapse>
					</div>
					<div class="tips">
						<text style="font-size: 20px; border-bottom: 1px solid;">今日tips</text>
						<van-tabs v-model:active="active" @click-tab="onClickTab">
							<van-tab title="幸运数字"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{JuxieData.luckynumber}}</text>
							</van-tab>
							<van-tab title="幸运颜色"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{JuxieData.luckycolor}}</text>
							</van-tab>
							<van-tab title="速配星座"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{JuxieData.luckyconstellation}}</text>
							</van-tab>
						</van-tabs>
					</div>
					<div class="comment">
						<text>suggestion：{{JuxieData.shortcomment}}</text>
					</div>
				</div>
				<div class="BOX" v-if="symbol==4">
					<div class="topbox">
						<text style="font-size: 35px;">{{ShiziData.title}} -- </text>
						<text style="font-size: 20px;">{{ShiziData.type}} -- </text>
						<text style="font-size: 10px;">{{ShiziData.time}}</text>

						<!-- {{ShiziYunshi.health}} -->
					</div>
					<div class="middlebox">
						<text style="color: coral;">今日宜做：{{ShiziTodo.yi}}</text>
						<text style="color: crimson;">今日忌做：{{ShiziTodo.ji}}</text>
					</div>
					<div class="bottombox">
						<text style="font-size: 20px; border-bottom: 1px solid;">sp独家运势解析</text>
						<van-collapse v-model="activeName" accordion>
							<van-collapse-item title="综合运势" name="1">
								{{ShiziYunshi.all}}
							</van-collapse-item>
							<van-collapse-item title="爱情运势" name="2">
								{{ShiziYunshi.love}}
							</van-collapse-item>
							<van-collapse-item title="学业工作" name="3">
								{{ShiziYunshi.work}}
							</van-collapse-item>
							<van-collapse-item title="财富运势" name="4">
								{{ShiziYunshi.money}}
							</van-collapse-item>
							<van-collapse-item title="健康运势" name="5">
								{{ShiziYunshi.health}}
							</van-collapse-item>
						</van-collapse>
					</div>
					<div class="tips">
						<text style="font-size: 20px; border-bottom: 1px solid;">今日tips</text>
						<van-tabs v-model:active="active" @click-tab="onClickTab">
							<van-tab title="幸运数字"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{ShiziData.luckynumber}}</text>
							</van-tab>
							<van-tab title="幸运颜色"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{ShiziData.luckycolor}}</text>
							</van-tab>
							<van-tab title="速配星座"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{ShiziData.luckyconstellation}}</text>
							</van-tab>
						</van-tabs>
					</div>
					<div class="comment">
						<text>suggestion：{{ShiziData.shortcomment}}</text>
					</div>
				</div>
				<div class="BOX" v-if="symbol==5">
					<div class="topbox">
						<text style="font-size: 35px;">{{ChunvData.title}} -- </text>
						<text style="font-size: 20px;">{{ChunvData.type}} -- </text>
						<text style="font-size: 10px;">{{ChunvData.time}}</text>

						<!-- {{ChunvYunshi.health}} -->
					</div>
					<div class="middlebox">
						<text style="color: coral;">今日宜做：{{ChunvTodo.yi}}</text>
						<text style="color: crimson;">今日忌做：{{ChunvTodo.ji}}</text>
					</div>
					<div class="bottombox">
						<text style="font-size: 20px; border-bottom: 1px solid;">sp独家运势解析</text>
						<van-collapse v-model="activeName" accordion>
							<van-collapse-item title="综合运势" name="1">
								{{ChunvYunshi.all}}
							</van-collapse-item>
							<van-collapse-item title="爱情运势" name="2">
								{{ChunvYunshi.love}}
							</van-collapse-item>
							<van-collapse-item title="学业工作" name="3">
								{{ChunvYunshi.work}}
							</van-collapse-item>
							<van-collapse-item title="财富运势" name="4">
								{{ChunvYunshi.money}}
							</van-collapse-item>
							<van-collapse-item title="健康运势" name="5">
								{{ChunvYunshi.health}}
							</van-collapse-item>
						</van-collapse>
					</div>
					<div class="tips">
						<text style="font-size: 20px; border-bottom: 1px solid;">今日tips</text>
						<van-tabs v-model:active="active" @click-tab="onClickTab">
							<van-tab title="幸运数字"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{ChunvData.luckynumber}}</text>
							</van-tab>
							<van-tab title="幸运颜色"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{ChunvData.luckycolor}}</text>
							</van-tab>
							<van-tab title="速配星座"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{ChunvData.luckyconstellation}}</text>
							</van-tab>
						</van-tabs>
					</div>
					<div class="comment">
						<text>suggestion：{{ChunvData.shortcomment}}</text>
					</div>
				</div>
				<div class="BOX" v-if="symbol==6">
					<div class="topbox">
						<text style="font-size: 35px;">{{TianchengData.title}} -- </text>
						<text style="font-size: 20px;">{{TianchengData.type}} -- </text>
						<text style="font-size: 10px;">{{TianchengData.time}}</text>

						<!-- {{TianchengYunshi.health}} -->
					</div>
					<div class="middlebox">
						<text style="color: coral;">今日宜做：{{TianchengTodo.yi}}</text>
						<text style="color: crimson;">今日忌做：{{TianchengTodo.ji}}</text>
					</div>
					<div class="bottombox">
						<text style="font-size: 20px; border-bottom: 1px solid;">sp独家运势解析</text>
						<van-collapse v-model="activeName" accordion>
							<van-collapse-item title="综合运势" name="1">
								{{TianchengYunshi.all}}
							</van-collapse-item>
							<van-collapse-item title="爱情运势" name="2">
								{{TianchengYunshi.love}}
							</van-collapse-item>
							<van-collapse-item title="学业工作" name="3">
								{{TianchengYunshi.work}}
							</van-collapse-item>
							<van-collapse-item title="财富运势" name="4">
								{{TianchengYunshi.money}}
							</van-collapse-item>
							<van-collapse-item title="健康运势" name="5">
								{{TianchengYunshi.health}}
							</van-collapse-item>
						</van-collapse>
					</div>
					<div class="tips">
						<text style="font-size: 20px; border-bottom: 1px solid;">今日tips</text>
						<van-tabs v-model:active="active" @click-tab="onClickTab">
							<van-tab title="幸运数字"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{TianchengData.luckynumber}}</text>
							</van-tab>
							<van-tab title="幸运颜色"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{TianchengData.luckycolor}}</text>
							</van-tab>
							<van-tab title="速配星座"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{TianchengData.luckyconstellation}}</text>
							</van-tab>
						</van-tabs>
					</div>
					<div class="comment">
						<text>suggestion：{{TianchengData.shortcomment}}</text>
					</div>
				</div>
				<div class="BOX" v-if="symbol==7">
					<div class="topbox">
						<text style="font-size: 35px;">{{TianxieData.title}} -- </text>
						<text style="font-size: 20px;">{{TianxieData.type}} -- </text>
						<text style="font-size: 10px;">{{TianxieData.time}}</text>

						<!-- {{TianxieYunshi.health}} -->
					</div>
					<div class="middlebox">
						<text style="color: coral;">今日宜做：{{TianxieTodo.yi}}</text>
						<text style="color: crimson;">今日忌做：{{TianxieTodo.ji}}</text>
					</div>
					<div class="bottombox">
						<text style="font-size: 20px; border-bottom: 1px solid;">sp独家运势解析</text>
						<van-collapse v-model="activeName" accordion>
							<van-collapse-item title="综合运势" name="1">
								{{TianxieYunshi.all}}
							</van-collapse-item>
							<van-collapse-item title="爱情运势" name="2">
								{{TianxieYunshi.love}}
							</van-collapse-item>
							<van-collapse-item title="学业工作" name="3">
								{{TianxieYunshi.work}}
							</van-collapse-item>
							<van-collapse-item title="财富运势" name="4">
								{{TianxieYunshi.money}}
							</van-collapse-item>
							<van-collapse-item title="健康运势" name="5">
								{{TianxieYunshi.health}}
							</van-collapse-item>
						</van-collapse>
					</div>
					<div class="tips">
						<text style="font-size: 20px; border-bottom: 1px solid;">今日tips</text>
						<van-tabs v-model:active="active" @click-tab="onClickTab">
							<van-tab title="幸运数字"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{TianxieData.luckynumber}}</text>
							</van-tab>
							<van-tab title="幸运颜色"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{TianxieData.luckycolor}}</text>
							</van-tab>
							<van-tab title="速配星座"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{TianxieData.luckyconstellation}}</text>
							</van-tab>
						</van-tabs>
					</div>
					<div class="comment">
						<text>suggestion：{{TianxieData.shortcomment}}</text>
					</div>
				</div>
				<div class="BOX" v-if="symbol==8">
					<div class="topbox">
						<text style="font-size: 35px;">{{SheshouData.title}} -- </text>
						<text style="font-size: 20px;">{{SheshouData.type}} -- </text>
						<text style="font-size: 10px;">{{SheshouData.time}}</text>

						<!-- {{SheshouYunshi.health}} -->
					</div>
					<div class="middlebox">
						<text style="color: coral;">今日宜做：{{SheshouTodo.yi}}</text>
						<text style="color: crimson;">今日忌做：{{SheshouTodo.ji}}</text>
					</div>
					<div class="bottombox">
						<text style="font-size: 20px; border-bottom: 1px solid;">sp独家运势解析</text>
						<van-collapse v-model="activeName" accordion>
							<van-collapse-item title="综合运势" name="1">
								{{SheshouYunshi.all}}
							</van-collapse-item>
							<van-collapse-item title="爱情运势" name="2">
								{{SheshouYunshi.love}}
							</van-collapse-item>
							<van-collapse-item title="学业工作" name="3">
								{{SheshouYunshi.work}}
							</van-collapse-item>
							<van-collapse-item title="财富运势" name="4">
								{{SheshouYunshi.money}}
							</van-collapse-item>
							<van-collapse-item title="健康运势" name="5">
								{{SheshouYunshi.health}}
							</van-collapse-item>
						</van-collapse>
					</div>
					<div class="tips">
						<text style="font-size: 20px; border-bottom: 1px solid;">今日tips</text>
						<van-tabs v-model:active="active" @click-tab="onClickTab">
							<van-tab title="幸运数字"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{SheshouData.luckynumber}}</text>
							</van-tab>
							<van-tab title="幸运颜色"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{SheshouData.luckycolor}}</text>
							</van-tab>
							<van-tab title="速配星座"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{SheshouData.luckyconstellation}}</text>
							</van-tab>
						</van-tabs>
					</div>
					<div class="comment">
						<text>suggestion：{{SheshouData.shortcomment}}</text>
					</div>
				</div>
				<div class="BOX" v-if="symbol==9">
					<div class="topbox">
						<text style="font-size: 35px;">{{MojieData.title}} -- </text>
						<text style="font-size: 20px;">{{MojieData.type}} -- </text>
						<text style="font-size: 10px;">{{MojieData.time}}</text>

						<!-- {{MojieYunshi.health}} -->
					</div>
					<div class="middlebox">
						<text style="color: coral;">今日宜做：{{MojieTodo.yi}}</text>
						<text style="color: crimson;">今日忌做：{{MojieTodo.ji}}</text>
					</div>
					<div class="bottombox">
						<text style="font-size: 20px; border-bottom: 1px solid;">sp独家运势解析</text>
						<van-collapse v-model="activeName" accordion>
							<van-collapse-item title="综合运势" name="1">
								{{MojieYunshi.all}}
							</van-collapse-item>
							<van-collapse-item title="爱情运势" name="2">
								{{MojieYunshi.love}}
							</van-collapse-item>
							<van-collapse-item title="学业工作" name="3">
								{{MojieYunshi.work}}
							</van-collapse-item>
							<van-collapse-item title="财富运势" name="4">
								{{MojieYunshi.money}}
							</van-collapse-item>
							<van-collapse-item title="健康运势" name="5">
								{{MojieYunshi.health}}
							</van-collapse-item>
						</van-collapse>
					</div>
					<div class="tips">
						<text style="font-size: 20px; border-bottom: 1px solid;">今日tips</text>
						<van-tabs v-model:active="active" @click-tab="onClickTab">
							<van-tab title="幸运数字"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{MojieData.luckynumber}}</text>
							</van-tab>
							<van-tab title="幸运颜色"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{MojieData.luckycolor}}</text>
							</van-tab>
							<van-tab title="速配星座"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{MojieData.luckyconstellation}}</text>
							</van-tab>
						</van-tabs>
					</div>
					<div class="comment">
						<text>suggestion：{{MojieData.shortcomment}}</text>
					</div>
				</div>
				<div class="BOX" v-if="symbol==10">
					<div class="topbox">
						<text style="font-size: 35px;">{{ShuipingData.title}} -- </text>
						<text style="font-size: 20px;">{{ShuipingData.type}} -- </text>
						<text style="font-size: 10px;">{{ShuipingData.time}}</text>

						<!-- {{ShuipingYunshi.health}} -->
					</div>
					<div class="middlebox">
						<text style="color: coral;">今日宜做：{{ShuipingTodo.yi}}</text>
						<text style="color: crimson;">今日忌做：{{ShuipingTodo.ji}}</text>
					</div>
					<div class="bottombox">
						<text style="font-size: 20px; border-bottom: 1px solid;">sp独家运势解析</text>
						<van-collapse v-model="activeName" accordion>
							<van-collapse-item title="综合运势" name="1">
								{{ShuipingYunshi.all}}
							</van-collapse-item>
							<van-collapse-item title="爱情运势" name="2">
								{{ShuipingYunshi.love}}
							</van-collapse-item>
							<van-collapse-item title="学业工作" name="3">
								{{ShuipingYunshi.work}}
							</van-collapse-item>
							<van-collapse-item title="财富运势" name="4">
								{{ShuipingYunshi.money}}
							</van-collapse-item>
							<van-collapse-item title="健康运势" name="5">
								{{ShuipingYunshi.health}}
							</van-collapse-item>
						</van-collapse>
					</div>
					<div class="tips">
						<text style="font-size: 20px; border-bottom: 1px solid;">今日tips</text>
						<van-tabs v-model:active="active" @click-tab="onClickTab">
							<van-tab title="幸运数字"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{ShuipingData.luckynumber}}</text>
							</van-tab>
							<van-tab title="幸运颜色"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{ShuipingData.luckycolor}}</text>
							</van-tab>
							<van-tab title="速配星座"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{ShuipingData.luckyconstellation}}</text>
							</van-tab>
						</van-tabs>
					</div>
					<div class="comment">
						<text>suggestion：{{ShuipingData.shortcomment}}</text>
					</div>
				</div>
				<div class="BOX" v-if="symbol==11">
					<div class="topbox">
						<text style="font-size: 35px;">{{ShuangyuData.title}} -- </text>
						<text style="font-size: 20px;">{{ShuangyuData.type}} -- </text>
						<text style="font-size: 10px;">{{ShuangyuData.time}}</text>

						<!-- {{ShuangyuYunshi.health}} -->
					</div>
					<div class="middlebox">
						<text style="color: coral;">今日宜做：{{ShuangyuTodo.yi}}</text>
						<text style="color: crimson;">今日忌做：{{ShuangyuTodo.ji}}</text>
					</div>
					<div class="bottombox">
						<text style="font-size: 20px; border-bottom: 1px solid;">sp独家运势解析</text>
						<van-collapse v-model="activeName" accordion>
							<van-collapse-item title="综合运势" name="1">
								{{ShuangyuYunshi.all}}
							</van-collapse-item>
							<van-collapse-item title="爱情运势" name="2">
								{{ShuangyuYunshi.love}}
							</van-collapse-item>
							<van-collapse-item title="学业工作" name="3">
								{{ShuangyuYunshi.work}}
							</van-collapse-item>
							<van-collapse-item title="财富运势" name="4">
								{{ShuangyuYunshi.money}}
							</van-collapse-item>
							<van-collapse-item title="健康运势" name="5">
								{{ShuangyuYunshi.health}}
							</van-collapse-item>
						</van-collapse>
					</div>
					<div class="tips">
						<text style="font-size: 20px; border-bottom: 1px solid;">今日tips</text>
						<van-tabs v-model:active="active" @click-tab="onClickTab">
							<van-tab title="幸运数字"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{ShuangyuData.luckynumber}}</text>
							</van-tab>
							<van-tab title="幸运颜色"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{ShuangyuData.luckycolor}}</text>
							</van-tab>
							<van-tab title="速配星座"><text
									style="font-size: 15px; font-family: Arial, Helvetica, sans-serif;font-weight: 300;">{{ShuangyuData.luckyconstellation}}</text>
							</van-tab>
						</van-tabs>
					</div>
					<div class="comment">
						<text>suggestion：{{ShuangyuData.shortcomment}}</text>
					</div>
				</div>

			</div>
		</div>

	</div>
</template>

<script>
	import {
		onMounted,
		reactive,
		toRefs,
		ref,
		getCurrentInstance,
	} from 'vue';


	import {
		Toast,
		Dialog
	} from "vant"
	import {
		useRoute
	} from 'vue-router'

	import {
		Baiyang,
		Jinniu,
		Shuangzi,
		Juxie,
		Shizi,
		Chunv,
		Tiancheng,
		Tianxie,
		Sheshou,
		Mojie,
		Shuiping,
		Shuangyu
	} from '../api/request.js'
	export default {


		setup() {
			const VanDialog = Dialog.Component;
			let Route = useRoute();
			console.log('Route', Route.query);
			let id = Route.query.userId
			console.log('id:', id);

			let data = reactive({
				mainData: ["白羊座", "金牛座", "双子座", "巨蟹座", "狮子座", "处女座", "天秤座",
					"天蝎座", "射手座",
					"魔羯座", "水瓶座", "双鱼座"
				],
				symbol: '',
				uid:id,
				BaiyangData: [],
				BaiyangTodo: [],
				BaiyangYunshi: [],
				JinniuData: [],
				JinniuTodo: [],
				JinniuYunshi: [],
				ShuangziData: [],
				ShuangziTodo: [],
				ShuangziYunshi: [],
				JuxieData: [],
				JuxieTodo: [],
				JuxieYunshi: [],
				ShiziData: [],
				ShiziTodo: [],
				ShiziYunshi: [],
				ChunvData: [],
				ChunvTodo: [],
				ChunvYunshi: [],
				TianchengData: [],
				TianchengTodo: [],
				TianchengYunshi: [],
				TianxieData: [],
				TianxieTodo: [],
				TianxieYunshi: [],
				MojieData: [],
				MojieTodo: [],
				MojieYunshi: [],
				SheshouData: [],
				SheshouTodo: [],
				SheshouYunshi: [],
				ShuipingData: [],
				ShuipingTodo: [],
				ShuipingYunshi: [],
				ShuangyuData: [],
				ShuangyuTodo: [],
				ShuangyuYunshi: [],
			})



			let getTianxieData = () => {
				//这里判断是否存在本地存储 如果有 那么就不用再次请求
				let value = JSON.parse(sessionStorage.getItem('TianxieDatas'))
				if (value) {
					console.log('终止');
					//把数据单独抽离出来
					data.TianxieData = value;
					data.TianxieTodo = value.todo
					data.TianxieYunshi = value.fortunetext
					return
				}
				Tianxie().then(res => {
					console.log('res', res.data.data)
					sessionStorage.setItem('TianxieDatas', JSON.stringify(res.data.data))
					data.TianxieData = res.data.data;
					data.TianxieTodo = res.data.data.todo
					data.TianxieYunshi = res.data.data.fortunetext
				}).catch((err) => {
					console.log('err', err);
				})
			}

			let getBaiyangData = () => {
				//这里判断是否存在本地存储 如果有 那么就不用再次请求
				let value = JSON.parse(sessionStorage.getItem('BaiyangDatas'))
				if (value) {
					console.log('终止');
					//把数据单独抽离出来
					data.BaiyangData = value;
					data.BaiyangTodo = value.todo
					data.BaiyangYunshi = value.fortunetext
					return
				}
				Baiyang().then(res => {
					console.log('res', res.data.data)
					sessionStorage.setItem('BaiyangDatas', JSON.stringify(res.data.data))
					data.BaiyangData = res.data.data;
					data.BaiyangTodo = res.data.data.todo
					data.BaiyangYunshi = res.data.data.fortunetext
				}).catch((err) => {
					console.log('err', err);
				})
			}

			let getJinniuData = () => {
				//这里判断是否存在本地存储 如果有 那么就不用再次请求
				let value = JSON.parse(sessionStorage.getItem('JinniuDatas'))
				if (value) {
					console.log('终止');
					//把数据单独抽离出来
					data.JinniuData = value;
					data.JinniuTodo = value.todo
					data.JinniuYunshi = value.fortunetext
					return
				}
				Jinniu().then(res => {
					// console.log('res', res.data.data)
					sessionStorage.setItem('JinniuDatas', JSON.stringify(res.data.data))
					data.JinniuData = res.data.data;
					data.JinniuTodo = res.data.data.todo
					data.JinniuYunshi = res.data.data.fortunetext
				}).catch((err) => {
					console.log('err', err);
				})
			}

			let getShuangziData = () => {
				//这里判断是否存在本地存储 如果有 那么就不用再次请求
				let value = JSON.parse(sessionStorage.getItem('ShuangziDatas'))
				if (value) {
					console.log('终止');
					//把数据单独抽离出来
					data.ShuangziData = value;
					data.ShuangziTodo = value.todo
					data.ShuangziYunshi = value.fortunetext
					return
				}
				Shuangzi().then(res => {
					console.log('res', res.data.data)
					sessionStorage.setItem('ShuangziDatas', JSON.stringify(res.data.data))
					data.ShuangziData = res.data.data;
					data.ShuangziTodo = res.data.data.todo
					data.ShuangziYunshi = res.data.data.fortunetext
				}).catch((err) => {
					console.log('err', err);
				})
			}

			let getJuxieData = () => {
				//这里判断是否存在本地存储 如果有 那么就不用再次请求
				let value = JSON.parse(sessionStorage.getItem('JuxieDatas'))
				if (value) {
					console.log('终止');
					//把数据单独抽离出来
					data.JuxieData = value;
					data.JuxieTodo = value.todo
					data.JuxieYunshi = value.fortunetext
					return
				}
				Juxie().then(res => {
					console.log('res', res.data.data)
					sessionStorage.setItem('JuxieDatas', JSON.stringify(res.data.data))
					data.JuxieData = res.data.data;
					data.JuxieTodo = res.data.data.todo
					data.JuxieYunshi = res.data.data.fortunetext
				}).catch((err) => {
					console.log('err', err);
				})
			}

			let getShiziData = () => {
				//这里判断是否存在本地存储 如果有 那么就不用再次请求
				let value = JSON.parse(sessionStorage.getItem('ShiziDatas'))
				if (value) {
					console.log('终止');
					//把数据单独抽离出来
					data.ShiziData = value;
					data.ShiziTodo = value.todo
					data.ShiziYunshi = value.fortunetext
					return
				}
				Shizi().then(res => {
					console.log('res', res.data.data)
					sessionStorage.setItem('ShiziDatas', JSON.stringify(res.data.data))
					data.ShiziData = res.data.data;
					data.ShiziTodo = res.data.data.todo
					data.ShiziYunshi = res.data.data.fortunetext
				}).catch((err) => {
					console.log('err', err);
				})
			}

			let getChunvData = () => {
				//这里判断是否存在本地存储 如果有 那么就不用再次请求
				let value = JSON.parse(sessionStorage.getItem('ChunvDatas'))
				if (value) {
					console.log('终止');
					//把数据单独抽离出来
					data.ChunvData = value;
					data.ChunvTodo = value.todo
					data.ChunvYunshi = value.fortunetext
					return
				}
				Chunv().then(res => {
					console.log('res', res.data.data)
					sessionStorage.setItem('ChunvDatas', JSON.stringify(res.data.data))
					data.ChunvData = res.data.data;
					data.ChunvTodo = res.data.data.todo
					data.ChunvYunshi = res.data.data.fortunetext
				}).catch((err) => {
					console.log('err', err);
				})
			}

			let getTianchengData = () => {
				//这里判断是否存在本地存储 如果有 那么就不用再次请求
				let value = JSON.parse(sessionStorage.getItem('TianchengDatas'))
				if (value) {
					console.log('终止');
					//把数据单独抽离出来
					data.TianchengData = value;
					data.TianchengTodo = value.todo
					data.TianchengYunshi = value.fortunetext
					return
				}
				Tiancheng().then(res => {
					console.log('res', res.data.data)
					sessionStorage.setItem('TianchengDatas', JSON.stringify(res.data.data))
					data.TianchengData = res.data.data;
					data.TianchengTodo = res.data.data.todo
					data.TianchengYunshi = res.data.data.fortunetext
				}).catch((err) => {
					console.log('err', err);
				})
			}

			let getSheshouData = () => {

				//这里判断是否存在本地存储 如果有 那么就不用再次请求
				let value = JSON.parse(sessionStorage.getItem('SheshouDatas'))
				if (value) {
					console.log('终止');
					//把数据单独抽离出来
					data.SheshouData = value;
					data.SheshouTodo = value.todo
					data.SheshouYunshi = value.fortunetext
					return
				}
				Sheshou().then(res => {
					console.log('res', res.data.data)
					sessionStorage.setItem('SheshouDatas', JSON.stringify(res.data.data))
					data.SheshouData = res.data.data;
					data.SheshouTodo = res.data.data.todo
					data.SheshouYunshi = res.data.data.fortunetext
				}).catch((err) => {
					console.log('err', err);
				})

			}

			let getMojieData = () => {
				//这里判断是否存在本地存储 如果有 那么就不用再次请求
				let value = JSON.parse(sessionStorage.getItem('MojieDatas'))
				if (value) {
					console.log('终止');
					//把数据单独抽离出来
					data.MojieData = value;
					data.MojieTodo = value.todo
					data.MojieYunshi = value.fortunetext
					return
				}
				Mojie().then(res => {
					console.log('res', res.data.data)
					sessionStorage.setItem('MojieDatas', JSON.stringify(res.data.data))
					data.MojieData = res.data.data;
					data.MojieTodo = res.data.data.todo
					data.MojieYunshi = res.data.data.fortunetext
				}).catch((err) => {
					console.log('err', err);
				})
			}

			let getShuipingData = () => {
				//这里判断是否存在本地存储 如果有 那么就不用再次请求
				let value = JSON.parse(sessionStorage.getItem('ShuipingDatas'))
				if (value) {
					console.log('终止');
					//把数据单独抽离出来
					data.ShuipingData = value;
					data.ShuipingTodo = value.todo
					data.ShuipingYunshi = value.fortunetext
					return
				}
				Shuiping().then(res => {
					console.log('res', res.data.data)
					sessionStorage.setItem('ShuipingDatas', JSON.stringify(res.data.data))
					data.ShuipingData = res.data.data;
					data.ShuipingTodo = res.data.data.todo
					data.ShuipingYunshi = res.data.data.fortunetext
				}).catch((err) => {
					console.log('err', err);
				})
			}

			let getShuangyuData = () => {
				//这里判断是否存在本地存储 如果有 那么就不用再次请求
				let value = JSON.parse(sessionStorage.getItem('ShuangyuDatas'))
				if (value) {
					console.log('终止');
					//把数据单独抽离出来
					data.ShuangyuData = value;
					data.ShuangyuTodo = value.todo
					data.ShuangyuYunshi = value.fortunetext
					return
				}
				Shuangyu().then(res => {
					console.log('res', res.data.data)
					sessionStorage.setItem('ShuangyuDatas', JSON.stringify(res.data.data))
					data.ShuangyuData = res.data.data;
					data.ShuangyuTodo = res.data.data.todo
					data.ShuangyuYunshi = res.data.data.fortunetext
				}).catch((err) => {
					console.log('err', err);
				})
			}



			// 传递index值
			let leftClick = (val, index) => {
				if (id) {
					data.symbol = index
					console.log(data.symbol)
				} else {
					console.log("000");
					Toast('请先完成登录');
					return
				}

			}

			const activeName = ref('1');


			const {
				proxy
			} = getCurrentInstance()
			const active = ref(0);
			const onClickTab = ({
				title
			}) => proxy.$toast(title) //这里的proxy代替this

			//生命周期里面请求
			onMounted(() => {
				getTianxieData();
				getBaiyangData();
				getJinniuData();
				getShuangziData();
				getJuxieData();
				getShiziData();
				getChunvData();
				getTianchengData();
				getSheshouData();
				getMojieData();
				getShuipingData();
				getShuangyuData();
			})

			return {
				...toRefs(data),
				leftClick,
				activeName,
				active,
				onClickTab,
			};
		},
	}
</script>

<style scoped>
	.BOX {
		display: flex;
		flex-direction: column;
		height: 100%;

		.topbox {
			text-align: center;
		}

		.middlebox {
			padding-top: 20px;
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-direction: row;

			font-family: sans-serif;
			font-size: 20px;
			/* font-weight: 200; */
		}

		.bottombox {
			margin-top: 20px;

			.van-collapse {
				margin-top: 10px;
			}
		}

		.tips {
			margin-top: 20px;
		}

		.comment {
			position: absolute;
			/* top:10; */
			bottom: -10;
			/* right: 30px; */
			font-size: 15px;
			color: deeppink;
		}

	}


	a {
		/* 设置长度与宽度 */
		width: 200px;
		height: 50px;

		/* 设置背景颜色 */
		background-color: #55585a;

		/* 设置字体大小 */
		font-size: 14px;

		/* 设置字体颜色 */
		color: #fff;

		/* 链接没有下划线 */
		text-decoration: none;

		/* 设置左边的内边距 */
		padding-left: 30px;
		padding-top: 5px;
		/* 设置文本边距 */
		line-height: 40px;
	}

	/* 2.鼠标经过链接变换背景颜色 */
	a:hover {
		background-color: #ff6700;
	}

	.left-box {
		width: 20%;
		display: flex;
		flex-direction: column;
	}

	.right-box {
		flex: 1;
	}


	.container {
		height: 100vh;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}

	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* height: 50px; */
		height: 10%;
		background-color: #292c2f;
		color: #ffffff;
		/* height: 100%; */
		/*吸顶效果*/
		/* position: sticky;
        position: -webkit-sticky;    !*兼容 -webkit 内核的浏览器*!
        top: 0px;                    !*必须设一个值，否则不生效*!*/

	}

	.box {
		display: flex;
		align-items: center;
	}

	h1 {
		display: flex;
		align-items: center;
		font: normal 28px Cookie, Arial, Helvetica, sans-serif;
		padding: 0px 20px;
	}

	img {
		width: 40px;
		height: 40px;
	}

	nav {
		display: flex;
		align-items: center;
		margin: 0px 40px;
		font: 16px Arial, Helvetica, sans-serif;
	}

	nav a {
		padding: 0 15px;
		width: 32px;
		text-decoration: none;
		color: #ffffff;
		font-size: 16px;
		font-weight: normal;
		opacity: 0.9;
	}

	nav a:hover {
		opacity: 1;
	}

	.active {
		color: #608bd2;
		pointer-events: none;
		opacity: 1;
	}

	/*搜索框*/

	.text {
		height: 22px;
		font-size: 14px;
		border: 1px solid #ccc;
		padding: 3px 16px;
		border-bottom-left-radius: 20px;
		border-top-left-radius: 20px;
	}

	.text:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}

	.button {
		width: 60px;
		height: 30px;
		font-size: 14px;
		margin-right: 35px;
		border: 1px solid #608bd2;
		background-color: #608bd2;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
	}

	.contents {
		flex: 1;
		display: flex;
		flex-direction: row;
		/* margin-top: 10px; */
	}

	.custom-indicator {
		position: absolute;
		right: 5px;
		bottom: 5px;
		padding: 2px 5px;
		font-size: 12px;
		background: rgba(0, 0, 0, 0.1);
	}
</style>
