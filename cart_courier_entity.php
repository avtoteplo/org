<?php
	include('header.php');
?>
<div class="container-fluid">
	<div class="row">
		<div class="col-lg-10 col-lg-offset-1">
			<center>
				<h1>2 товара<span class="dot"></span>Заказ №569-321</h1>
			</center>
		</div>
	</div>
	<div class="row cart_main">
		<div class="col-lg-10 col-lg-offset-1">
			<div class="row cart_main_tovar">
				<div class="col-lg-1 img">
					<img src="img/small_avtoteplo.jpg">
				</div>
				<div class="col-lg-7 tovar_name">
					<h2>Автотепло №2 на Chevrolet Aveo</h2>
					<a href="#">Добавить для ещё одной машины</a>
				</div>
				<div class="col-lg-2 added_tovar_btns">
					<a href="#" class="duplicate">Дублировать</a>
					<a href="#" class="delete">Удалить</a>
				</div>
				<div class="col-lg-2 price_block">
					<span>1500<span class="price">q</span></span> <span class="grey crossed">1900<span class="price">q</span></span>
				</div>
			</div>
			<div class="row cart_main_tovar">
				<div class="col-lg-1 img">
					<img src="img/small_avtoteplo.jpg">
				</div>
				<div class="col-lg-7 tovar_name">
					<h2>Автотепло №2 на Chevrolet Aveo</h2>
					<a href="#">Добавить для ещё одной машины</a>
				</div>
				<div class="col-lg-2 added_tovar_btns">
					<a href="#" class="duplicate">Дублировать</a>
					<a href="#" class="delete">Удалить</a>
				</div>
				<div class="col-lg-2 price_block">
					<span>1500<span class="price">q</span></span>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-3 col-lg-offset-9 price_block cart_main_sum">
					<h2>Сумма:</h2> <span class="yellow_bg bold">1500<span class="price">q</span></span> <span class="grey crossed">1900<span class="price">q</span></span>
				</div>
			</div>
		</div>
	</div>
	<div class="row delivery">
		<div class="col-lg-4 col-lg-offset-1">
			<h2 class="h1">Доставка</h2>
			<small class="grey small">Стоимость и способ доставки<br>зависят от города и веса заказа</small>
		</div>
		<div class="col-lg-6">
			<div class="delivery_inner">
				<form>
					<div class="delivery_input_wrapper">
						<div class="delivery_city input_grey arrow show_hint">
							<h2 class="desc_row delivery_city_title">Челябинск <span class="grey">Челябинская область</span></h2>
						</div>
					</div>
					<div class="tabs delivery_tabs">
						<a href="#"><div>Почтой<span>300<span class="price">q</span> • 4—8 дн.</span></div></a>
						<a href="#"><div>Самовывоз<span>50<span class="price">q</span> • 5—6 дн.</span></div></a>
						<a href="#" class="active"><div>Курьером на дом<span>500<span class="price">q</span> • 5—6 дн.</span></div></a>
					</div>
					<div class="tab_content_delivery">
						<p>Режим работы курьерской доставки:</p>
						<table class="time_table">
							<tr>
								<td>пн-пт:</td>
								<td>9:00-19:00</td>
							</tr>
							<tr>
								<td>сб:</td>
								<td>12:00-19:00</td>
							</tr>
							<tr>
								<td class="grey">вс:</td>
								<td class="grey">выходной</td>
							</tr>
						</table>
					</div>
					<div class="delivery_input_wrapper">
						<input type="text" name="delivery_adress" placeholder="Адрес" class="input_grey grey">
					</div>
					<div class="delivery_input_wrapper">
						<input type="text" name="delivery_name" placeholder="ФИО" class="input_grey grey">
					</div>
					<div class="delivery_input_wrapper">
						<input type="text" name="delivery_tel" placeholder="Номер телефона" class="input_grey grey w50">
					</div>
					<div class="delivery_input_wrapper">
						<input type="text" name="delivery_email" placeholder="E-mail для уведомлений (не обязательно)" class="input_grey grey">
					</div>
				</form>
			</div>
		</div>
	</div>
	<div class="row payment">
		<div class="col-lg-4 col-lg-offset-1">
			<h2 class="h1">Оплата</h2>
			<div class="sum">
				<p><span class="f_left">Сумма заказа</span> <span class="f_right">3000<span class="price">q</span></span></p>
				<p><span class="f_left">Курьерская доставка</span> <span class="f_right">500<span class="price">q</span></span></p>
				<p class="total bold"><span class="f_left">Итого:</span> <span class="f_right">3500<span class="price">q</span></span></p>
			</div>
		</div>
		<div class="col-lg-6">
			<form>
				<div class="tabs delivery_tabs">
					<a href="#"><div>Физическое лицо</div></a>
					<a href="#" class="active"><div>Юридическое лицо</div></a>
				</div>
				<div class="delivery_input_wrapper">
					<input type="text" name="yur_name" placeholder="Названи юрлица" class="input_grey grey">
				</div>
				<div class="delivery_input_wrapper">
					<input type="text" name="inn" placeholder="ИНН" class="input_grey grey w60">
				</div>
				<div class="delivery_input_wrapper">
					<input type="text" name="kpp" placeholder="КПП" class="input_grey grey w60">
				</div>
				<div class="delivery_input_wrapper">
					<input type="text" name="bik" placeholder="БИК" class="input_grey grey w60">
				</div>
				<div class="delivery_input_wrapper">
					<input type="text" name="yur_adress" placeholder="Юридический адрес" class="input_grey grey">
				</div>
				<div class="delivery_input_wrapper">
					<input type="text" name="bank_name" placeholder="Наименование банка" class="input_grey grey">
				</div>
				<div class="delivery_input_wrapper">
					<input type="text" name="ras_schet" placeholder="Расчётный счёт" class="input_grey grey w80">
				</div>
				<div class="delivery_input_wrapper">
					<input type="text" name="cor_schet" placeholder="Кореспондентский счёт" class="input_grey grey w80">
				</div>
				<div class="submit_block">
					<input type="submit" class="blue_round_btn" value="Заказ не отправить" disabled>
					<p>Недостаточно данных -<br>заполните все поля</p>
				</div>
				<div class="politics disabled">
					<input type="checkbox" name="checkbox" id="politics" checked>
					<label for="politics">Даю согласие на обработку персональных данных</label>
					<div class="check"></div>
				</div>
			</form>
		</div>
	</div>
</div>
<?php
	include('footer.php');
?>