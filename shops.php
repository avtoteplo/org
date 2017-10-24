<?php
	$shops = true;
	include('header.php');
?>
	<div class="container-fluid shops_page">
		<div class="row">
			<div class="col-lg-10 col-lg-offset-1 title_block">
				<center>
					<h1>Где купить нашу продукцию</h1>
					<p>Автотепло продается в 1100 магазинах России, Беларуссии, Украины и еще 8 стран.</p>
				</center>
			</div>
		</div>
		<div class="row">
			<div class="col-md-5 col-lg-4 center-block non-float">
				<div class="input_grey arrow show_hint smaller">
					<h2 class="desc_row delivery_city_title">Челябинск <span class="grey">Челябинская область</span></h2>
				</div>
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
		</div>
		<div class="row shops_wrapper">
			<div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
				<div id="map_shops"></div>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-4 col-sm-12 shops_sec_col">
				<div class="shop_title_wrapper">
					<h2>15 магазинов<br><p>и 5 пунктов самовывоза</p></h2>
					<a href="#" class="blue_round_btn">Добавить свой</a>
				</div>
				<div class="shops">
					<div class="shop" id="shop_1">
						<p class="bold red">Магазин «Мустанг»</p>
						<p class="small">Челябинская область, Челябинск,<br>ул. Краснознаменная, дом 2</p>
						<p class="small">8 (918) 268-99-30 • 8 (918) 269-46-80</p>
						<a href="mustangauto.ru" target="_blank">mustangauto.ru</a>
						<a href="#shop_1" class="show_on_map">Показать на карте</a>
					</div>
					<div class="shop" id="shop_2">
						<p class="bold red">Магазин «Мустанг»</p>
						<p class="small">Челябинская область, Челябинск,<br>ул. Краснознаменная, дом 2</p>
						<p class="small">8 (918) 268-99-30 • 8 (918) 269-46-80</p>
						<a href="#shop_2" class="show_on_map">Показать на карте</a>
					</div>
					<div class="shop" id="shop_3">
						<p class="bold red">Магазин «Мустанг»</p>
						<p class="small">Челябинская область, Челябинск,<br>ул. Краснознаменная, дом 2</p>
						<p class="small">8 (918) 268-99-30 • 8 (918) 269-46-80</p>
						<a href="#shop_3" class="show_on_map">Показать на карте</a>
					</div>
					<div class="shop" id="shop_4">
						<p class="bold red">Магазин «Мустанг»</p>
						<p class="small">Челябинская область, Челябинск,<br>ул. Краснознаменная, дом 2</p>
						<p class="small">8 (918) 268-99-30 • 8 (918) 269-46-80</p>
						<a href="#shop_4" class="show_on_map">Показать на карте</a>
					</div>
					<a href="#" class="blue_round_btn">Смотреть на карте</a>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</body>
</html>