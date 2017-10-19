<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Title</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/bootstrap-theme.min.css">
	<!-- <link href="https://fonts.googleapis.com/css?family=Roboto&amp;subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=PT+Sans:regular,italic,bold,bolditalic" rel="stylesheet" type="text/css" /> -->
	<link rel="stylesheet" type="text/css" href="style.css">

	<link  href="css/fototama.css" rel="stylesheet">
	<!-- <link  href="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet"> -->
	<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
</head>
<body>
<div class="hint_overflow_bg"></div>
<!-- <a href="#" class="blue_round_btn cart_popup"><span>1</span>Оформить заказ</a> -->
<div class="main <?php if($banner_page){ ?>banner_page <?php }else if($shops){ ?>shops_page<?php } ?>">
	<div class="container-fluid">
		<div class="row before_header <?php if($before_header_black){ ?>before_header_black<?php }else if($before_header_white){ ?>before_header_white<?}?>">
			<div class="col-lg-8 col-lg-offset-2 col-md-12 col-md-offset-0 col-sm-8 col-sm-offset-2">
				<ul class="dot_inside">
					<li><a href="#" class="blue">15 точек продаж</a> в г. Челябинск</li>
					<li>Доставка за 1-2 дня</li>
					<li>Самовывоз</li>
					<li>
						<div class="hint_wrapper">
							<p class="show_hint blue">Другой город</p>
							<div class="hint header_city_menu hint_check">
								<div class="close"><img src="img/close.png"></div>
								<h3>Где вы находитесь?</h3>
								<div class="overflow">
									<form class="hint_form_wrapper">
										<input type="text" name="city" placeholder="Поиск населенного пункта" autofocus>
										<div class="clear"><img src="img/clear.png" alt="clear"></div>
									</form>
									<small class="variative"><p>Популярные города</p></small>
									<ul class="sub_menu">
										<li><div class="crop"><span class="city">Челябинск</span> <span class="region">Челябинская область</span></div></li>
										<li><div class="crop"><span class="city">Москва</span> <span class="region">Московская область</span></div></li>
										<li><div class="crop"><span class="city">Санкт-Петербург</span> <span class="region">Ленинградская область</span></div></li>
										<li><div class="crop"><span class="city">Ростов</span> <span class="region">Ростовская область</span></div></li>
										<li><div class="crop"><span class="city">Челябинск</span> <span class="region">Челябинская область</span></div></li>
										<li><div class="crop"><span class="city">Москва</span> <span class="region">Московская область</span></div></li>
										<li><div class="crop"><span class="city">Санкт-Петербург</span> <span class="region">Ленинградская область</span></div></li>
										<li><div class="crop"><span class="city">Ростов</span> <span class="region">Ростовская область</span></div></li>
										<li><div class="crop"><span class="city">Челябинск</span> <span class="region">Челябинская область</span></div></li>
										<li><div class="crop"><span class="city">Москва</span> <span class="region">Московская область</span></div></li>
										<li><div class="crop"><span class="city">Санкт-Петербург</span> <span class="region">Ленинградская область</span></div></li>
										<li><div class="crop"><span class="city">Ростов</span> <span class="region">Ростовская область</span></div></li>
										<li><div class="crop"><span class="city">Челябинск</span> <span class="region">Челябинская область</span></div></li>
										<li><div class="crop"><span class="city">Москва</span> <span class="region">Московская область</span></div></li>
										<li><div class="crop"><span class="city">Санкт-Петербург</span> <span class="region">Ленинградская область</span></div></li>
										<li><div class="crop"><span class="city">Ростов</span> <span class="region">Ростовская область</span></div></li>
									</ul>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<header class="row <?php if($white_header){ ?>white_header<? } ?>">
			<div class="burger hidden-xl hidden-lg hidden-md col-sm-4 col-xs-4">
				<div class="show_hint">
					<div class="burger_lines"><span></span><span></span><span></span></div>
					<span>Меню</span>
				</div>
				<div class="header_nav_sub_menu hint">
					<div class="close"><img src="img/close.png"></div>
					<ul class="sub_menu">
						<li class="active"><a href="#">Продукция</a></li>
						<li><a href="#">Где купить</a></li>
						<li><a href="#">Партнерство</a></li>
						<li><a href="#">Компания</a></li>
						<li><a href="#"">СМИ о нас</a></li>
						<li><a href="#">Доставка и оплата</a></li>
						<li><a href="#">Гарантия и возврат</a></li>
					</ul>
					<div class="h_right">
						<div class="tel">
							<span>С 6 до 21<span class="dot"></span>Бесплатно</span>
							<a href="tel:+78005554374">8 800 511 31 51</a>
						</div>
						<div class="tel black">
							<span>С 8:30 до 18</span>
							<p class="bold">Опт: <a href="tel:+73512263161">8 351 226 31 61</a></p>
							<p>или <a href="tel:+78005554374">8 800 555 43 74</a></p>
						</div>
						<div class="soc">
							<a href="https://vk.com/tdavtoteplo" target="_blank"><img src="img/vk.png" alt="vk"></a>
							<a href="https://twitter.com/avtoteplo174" target="_blank"><img src="img/twttr.png" alt="twitter"></a>
							<a href="https://www.youtube.com/user/avtoteplo74" target="_blank"><img src="img/y.png" alt="youtube"></a>
							<a href="https://telegram.me/avtoteplo_org" target="_blank"><img src="img/tlgrm.png" alt="telegram"></a>
						</div>
					</div>
				</div>
			</div>
			<nav class="col-lg-5 col-md-4 col-sm-5 col-xs-5 hidden-sm hidden-xs">
				<ul class="blue_menu">
					<li class="hidden-sm hidden-xs active"><a href="#">Продукция</a></li>
					<li class="hidden-sm hidden-xs"><a href="#">Где купить</a></li>
					<li class="hidden-md hidden-sm hidden-xs"><a href="#">Партнерство</a></li>
					<li class="hidden-lg hidden-md hidden-sm hidden-xs"><a href="#">Компания</a></li>
					<li class="hover_parent">
						<div class="dotted_burger"><span>•</span><span>•</span><span>•</span></div>
						<ul class="sub_menu header_nav_sub_menu hint">
							<li class="hidden-xl hidden-lg hidden-md"><a href="#">Продукция</a></li>
							<li class="hidden-xl hidden-lg hidden-md"><a href="#">Где купить</a></li>
							<li class="hidden-xl hidden-lg"><a href="#">Партнерство</a></li>
							<li class="hidden-xl"><a href="#">Компания</a></li>
							<li class="active"><a href="#"">СМИ о нас</a></li>
							<li><a href="#">Доставка и оплата</a></li>
							<li><a href="#">Гарантия и возврат</a></li>
						</ul>
					</li>
				</ul>
			</nav>
			<div class="col-lg-2 col-md-4 col-sm-4 col-xs-4">
				<div class="logo parent">
					<!-- <a href="#"><span class="blue">Авто</span><span class="red">тепло</span></a> -->
					<a href="/avtoteplo/" class="black_logo">
						<img src="img/logoblack.png">
					</a>
					<a href="/avtoteplo/" class="white_logo">
						<img src="img/logowhite.png">
					</a>
					<div class="hint"><p>На главную страницу</p></div>
				</div>
			</div>
			<div class="col-lg-4 col-lg-offset-1 col-md-4 col-sm-4 col-xs-4 h_right">
				<div class="tel parent">
					<span>С 6 до 21<span class="dot"></span>Бесплатно</span>
					<a href="tel:88005554374">8 800 511 31 51</a>
					<div class="hint"><p>Опт: 8 800 555 43 74 или 8 (351) 226 31 61</p></div>
				</div>
				<a href="#" class="hidden-md hidden-sm hidden-xs">Контакты</a>
				<span href="#" class="cart hidden-sm hidden-xs"><span>0</span><p>Оформить заказ</p></span>
			</div>
		</header>
	</div>