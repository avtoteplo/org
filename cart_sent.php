<?php
	include('header.php');
?>
<div class="container-fluid">
	<div class="row">
		<div class="col-lg-10 col-lg-offset-1 order_sent">
			<center>
				<h1>Заказ №569-321<span class="dot"></span>К оплате 3300<span class="price">q</span></h1>
				<h2>Платёж не прошел, попробуйте еще раз или выберите<br>другой способ оплаты</h2>
			</center>
		</div>
	</div>
	<div class="row payment">
		<div class="col-lg-6 col-lg-offset-3">
			<form action="" class="payment_form">
				<div class="payment_radio_wrapper">
					<input name="pay" type="radio" value="bank_cart" id="bank_cart" checked>
					<label for="bank_cart">Банковской картой<span>Без комиссии</span></label>
					<div class="check"></div>
					<img src="img/visa.png">
				</div>
				<div class="payment_radio_wrapper">
					<input name="pay" type="radio" value="e_money" id="e_money">
					<label for="e_money">Электронными деньгами<span>+2% — комиссия при оплате WebMoney</span></label>
					<div class="check"></div>
					<img src="img/paypal.png">
				</div>
				<div class="payment_radio_wrapper">
					<input name="pay" type="radio" value="on_receipt" id="on_receipt">
					<label for="on_receipt">При получении: картой или наличными<span>+240<span class="price">q</span> — комиссия Почты России за наложенный платёж</span></label>
					<div class="check"></div>
				</div>
				<div class="submit_block">
					<input type="submit" class="blue_round_btn" value="Оформить заказ">
					<p>Безопасная оплата через<br>Яндекс.Кассу</p>
				</div>
			</form>
		</div>
	</div>
</div>
<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script> <!-- 16 KB -->
<script type="text/javascript" src="js/main.js"></script>
</body>
</html>