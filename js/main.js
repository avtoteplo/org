$(function(){
	function removeLi(){
		var menuLi = $('.blue_menu>li');
		var headerHintMenu = $('.header_nav_sub_menu');
		var liCloned = menuLi.eq(-2);
		// console.log(liCloned);
		liCloned.appendTo(headerHintMenu);
		// menuLi.get(-2).remove();
	}
	var hover_p = function(e){
		var p = $(this);
		p.addClass('anim');
		p.unbind('hover');
		setTimeout(function(){
			p.removeClass('anim');
			setTimeout(function(){
				p.bind('hover',hover_p)
			},300)
		},2000)
	}
	// $('.parent').hover(hover_p);
	$('.input_grey').keyup(function(e){
		if($(this).val() != ''){
			$(this).parent().find('label').css('opacity','.4');
		}else{
			$(this).parent().find('label').css('opacity','0');		
		}
	})
	$('.hint_form_wrapper input').keyup(function(e){
		if($(this).val() != ''){
			$(this).parent().find('.clear').animate({'opacity':'1'});
			$(this).parents('.hint').find('.variative').hide();
		}else{
			$(this).parent().find('.clear').animate({'opacity':'0'});
			$(this).parents('.hint').find('.variative').show();
		}
	})
	$('.clear').click(function(e){
		e.preventDefault();
		$(this).parent().find('input').val('').focus();
		$(this).animate({'opacity':'0'});
		$(this).parents('.hint').find('.variative').show();

	})
	$('.hover_parent').hover(function(e){
		$(this).addClass('anim')
		// .prev().find('span').css('color','#D0011B');
	},
	function(e){
		$(this).removeClass('anim')
		// $(this).prev().find('span').css('color','#037AFF')
	});
	$('.show_hint').on('click', function(e){
		e.preventDefault();
	    var p = $(this).parent();
		p.toggleClass('parent_fixed');
		setTimeout(function(){p.find('input').first().focus();},500);
		if(p.find('.overflow').length){
			$('html, body').animate({scrollTop:p.find('.hint').offset().top - ($(window).height() - p.find('.hint').outerHeight())/2},'50');
			$('body').css('overflow','hidden');
			// $('body').toggleClass('blocked');
			$('.hint_overflow_bg').addClass('shown');
			$('.main').css('overflow','visible');
		}
		if($(this).parents().hasClass('before_header')){
			$('header').css('zIndex', '776');
		}
		if($(this).parents().hasClass('burger')){
			$('header').css('zIndex', '778');
		}
		e.stopPropagation();
	})
	// $('.hint').click(function(e){
	// 	e.stopPropagation();
	// })
	$(document).click(function (e) {
	    var hint = $('.hint');
	    if (hint.has(e.target).length === 0){
			backToInitialState($('.parent_fixed'));
	        hint.parents('.parent_fixed').removeClass('parent_fixed');
			$('body').css('overflow','visible');
			// $('body').removeClass('blocked');
			$('.hint_overflow_bg').removeClass('shown');
			$('.main').css('overflow','hidden');
	    }
	})
	$('.close').click(function(e){
		var p = $(this).parents('.parent_fixed');
		// if(p.find('.overflow').length){
			// $('body').removeClass('blocked');
			$('body').css('overflow','visible');
			$('.hint_overflow_bg').removeClass('shown');
			$('.main').css('overflow','hidden');
		// }
		p.removeClass('parent_fixed');
		//back to initial state
		backToInitialState(p);
		// 
	})
	function backToInitialState(p){
		setTimeout(function(){
			p.find('input').val('');
			p.find('.tabs_wrapper>div').removeClass('hidden').last().addClass('hidden');
			p.find('.tabs_wrapper>div').first().find('a').removeClass('active').first().addClass('active');
			p.find('.tab_content_wrapper>div').removeClass('active').first().addClass('active');
			p.find('form').removeClass('hidden');
			p.find('.clear').css('opacity','0');
			p.find('label').attr('style','');
			p.find('.variative').attr('style','');
		},300);
	}
	$('.hint_check li').click(function(){
		$(this).parents('.sub_menu').find('li').removeClass('checked');
		$(this).addClass('checked');
	})
	$('.tabs_mark a').click(function(e){
		e.preventDefault();
		$(this).parent('.tabs').find('a').removeClass('active');
		$(this).addClass('active');

		var id = $(this).attr('href');
		$(this).parents('.hint').find('.tab_content').removeClass('active');
		$(id).addClass('active');
	})
	$('.mark_content .car_names a').click(function(e){
		e.preventDefault();
		// $('.mark_content').addClass('hidden');
		// $('.model_content').removeClass('hidden');
		// $('.tabs_mark').addClass('hidden');
		// $('.tabs_model').removeClass('hidden');
		$(this).parents('.tab_content').removeClass('active');
		$('.model_content').addClass('active');
		$(this).parents('.hint').find('form').addClass('hidden');
		$('.tabs_mark').addClass('hidden');
		$('.tabs_model').removeClass('hidden');

		var backId = $(this).parents('.tab_content').attr('id');
		$('.tabs_model .back').attr('href','#' + backId);

		var markName = $(this).html();
		$('.tabs_model h3').html(markName);
	})
	$('.tabs_model .back').click(function(e){
		e.preventDefault();
		$('.model_content').removeClass('active');

		var id = $(this).attr('href');
		$(id).addClass('active');

		$(this).parents('.hint').find('form').removeClass('hidden');
		$('.tabs_mark').removeClass('hidden');
		$('.tabs_model').addClass('hidden');
	})
	$('.cart_btn').click(function(e){
		e.preventDefault();
		var btn = $(this);
		var p = $(this).parent();
		btn.html('<div class="wait_response"><span>•</span><span>•</span><span>•</span></div>')
		setTimeout(function(){
			btn.find('.wait_response').remove();
			btn.html('<span class="filter_white"><img src="img/green_check.png"></span>');
			// $('.cart_popup').addClass('visible');
			$('.h_right .cart').replaceWith(function(){
		        return $("<a href='#' class='cart hidden-sm hidden-xs'>" + $(this).html() + "</a>");
		    });
			$('.h_right .cart').addClass('blue_round_btn cart_popup visible').find('span').html('1');
			// if(p.find('.overflow').length){
				$('html, body').animate({scrollTop:p.find('.hint').offset().top - ($(window).height() - p.find('.hint').outerHeight())/2},'50');
				$('body').css('overflow','hidden');
				// $('body').toggleClass('blocked');
				$('.hint_overflow_bg').addClass('shown');
				$('.main').css('overflow','visible');
			// }
			btn.parent().toggleClass('parent_fixed');
			setTimeout(function(){
				btn.html('<span>+1 в корзину</span>')
			}, 2000);
		}, 2000);
	})
	$('.smooth_links a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    if($(window).outerWidth() <= 420){
	    	$(this).parents('.anim').removeClass('anim');
	    }
	    return false;
	});
	$(window).on('scroll', function(e){
		if($(this).scrollTop() > $('header').offset().top + $('header').height()){
			$('.h_right .cart.visible').addClass('blue_round_btn cart_popup');
		}else{
			$('.h_right .cart.visible').removeClass('blue_round_btn cart_popup');
		}
	})
	// =========MAP=========
	var myMap, myMap_shops;

	// Дождёмся загрузки API и готовности DOM.
	ymaps.ready(init);

	function init () {
		if($('#map_shops').length){
		    myMap_shops = new ymaps.Map('map_shops', {
		        center: [55.164442, 61.436843],
		        zoom: 10,
		    }, {
		        searchControlProvider: 'yandex#search'
		    }),
	        objectManager = new ymaps.ObjectManager({
	            // Чтобы метки начали кластеризоваться, выставляем опцию.
	            clusterize: true,
	            geoObjectOpenBalloonOnClick: false,
	            clusterOpenBalloonOnClick: false
	        }),

	        MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
	            '<div class="popover top">' +
	                '<a class="close" href="#"><img src="img/close.png"></a>' +
	                '<div class="arrow"></div>' +
	                '<div class="popover-inner">' +
	                '$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]' +
	                '</div>' +
	                '</div>', {
	                /**
	                 * Builds an instance of a layout based on a template and adds it to the parent HTML element.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
	                 * @function
	                 * @name build
	                  */
	                build: function () {
	                    this.constructor.superclass.build.call(this);

	                    this._$element = $('.popover', this.getParentElement());

	                    this.applyElementOffset();

	                    this._$element.find('.close')
	                        .on('click', $.proxy(this.onCloseClick, this));
	                },

	                /**
	                 * Removes the layout contents from DOM.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
	                 * @function
	                 * @name clear
	                  */
	                clear: function () {
	                    this._$element.find('.close')
	                        .off('click');

	                    this.constructor.superclass.clear.call(this);
	                },

	                /**
	                 * The method will be invoked by the API's template system when resizing the nested layout.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
	                 * @function
	                 * @name onSublayoutSizeChange
	                  */
	                onSublayoutSizeChange: function () {
	                    MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

	                    if(!this._isElement(this._$element)) {
	                        return;
	                    }

	                    this.applyElementOffset();

	                    this.events.fire('shapechange');
	                },

	                /**
	                 * Moving the balloon so the "tail" points at the anchor point.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
	                 * @function
	                 * @name applyElementOffset
	                  */
	                applyElementOffset: function () {
	                    this._$element.css({
	                        left: -(this._$element[0].offsetWidth / 2),
	                        top: (this._$element.find('.arrow')[0].offsetHeight)
	                    });
	                },

	                /**
	                 * Closes the balloon when the "x" is clicked, throwing the "userclose" event on the layout.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
	                 * @function
	                 * @name onCloseClick
	                  */
	                onCloseClick: function (e) {
	                    e.preventDefault();
	                    this.events.fire('userclose');

	                },

	                /**
	                 * Used for autopositioning (balloonAutoPan).
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
	                 * @function
	                 * @name getClientBounds
	                 * @returns {Number[][]} The coordinates of the top left and bottom right corners of the template relative to the anchor point.
	                  */
	                // getShape: function () {
	                //     if(!this._isElement(this._$element)) {
	                //         return MyBalloonLayout.superclass.getShape.call(this);
	                //     }

	                //     var position = this._$element.position();
	                //     console.log(position);
	                //     return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
	                //         [position.left+32, position.top], [
	                //             position.left + this._$element[0].offsetWidth,
	                //             position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
	                //         ]
	                //     ]));
	                // },
	                /**
	                 * Checking the availability of the item (in IE and Opera it might not be there yet).
	                 * @function
	                 * @private
	                 * @name _isElement
	                 * @param {jQuery} [element] Element.
	                 * @returns {Boolean} Availability flag.
	                  */
	                _isElement: function (element) {
	                    return element && element[0] && element.find('.arrow')[0];
	                }
	            }),
	    // Creating a nested layout for balloon content.
	        MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
	        	'<div class="placemark_item_map_shops"><h2>$[properties.balloonHeader]</h2>'+
				'$[properties.balloonContent]</div>'
	        )
	    	myMap_shops.geoObjects
	        .add(new ymaps.Placemark([55.164500, 61.336843], {
	        	id:1,
	        	balloonHeader: 'Магазин "Мустанг"',
	            balloonContent: '<p>Челябинская область, Челябинск,<br>ул. Краснознаменная, дом 2</p>'+
	            				'<a href="tel:+79182689930">8 (918) 268-99-30</a>'
	        }, {
	            preset: 'islands#icon',
	            balloonShadow: false,
	            balloonLayout: MyBalloonLayout,
	            balloonContentLayout: MyBalloonContentLayout,
	            balloonPanelMaxMapArea: 0,
	            hideIconOnBalloonOpen: false
	    	}))
	        .add(new ymaps.Placemark([55.154500, 61.436843], {
	        	id:2,
	        	balloonHeader: 'Магазин "Мустанг"',
	            balloonContent: '<p>Челябинская область, Челябинск,<br>ул. Краснознаменная, дом 2</p>'+
	            				'<a href="tel:+79182689930">8 (918) 268-99-30</a>'
	      
	        }, {
	            preset: 'islands#icon',
	            balloonShadow: false,
	            balloonLayout: MyBalloonLayout,
	            balloonContentLayout: MyBalloonContentLayout,
	            balloonPanelMaxMapArea: 0,
	            hideIconOnBalloonOpen: false
	    	}))
	        .add(new ymaps.Placemark([55.174500, 61.536843], {
	        	id:3,
	        	balloonHeader: 'Магазин "Мустанг"',
	            balloonContent: '<p>Челябинская область, Челябинск,<br>ул. Краснознаменная, дом 2</p>'+
	            				'<a href="tel:+79182689930">8 (918) 268-99-30</a>'
	      
	        }, {
	            preset: 'islands#icon',
	            balloonShadow: false,
	            balloonLayout: MyBalloonLayout,
	            balloonContentLayout: MyBalloonContentLayout,
	            balloonPanelMaxMapArea: 0,
	            hideIconOnBalloonOpen: false
	    	}))
	        .add(new ymaps.Placemark([55.194500, 61.636843], {
	        	id:4,
	        	balloonHeader: 'Магазин "Мустанг"',
	            balloonContent: '<p>Челябинская область, Челябинск,<br>ул. Краснознаменная, дом 2</p>'+
	            				'<a href="tel:+79182689930">8 (918) 268-99-30</a>'
	      
	        }, {
	            preset: 'islands#icon',
	            balloonShadow: false,
	            balloonLayout: MyBalloonLayout,
	            balloonContentLayout: MyBalloonContentLayout,
	            balloonPanelMaxMapArea: 0,
	            hideIconOnBalloonOpen: false
	    	}));
			myMap_shops.geoObjects.events.add('click', function (e) {
			    var object = e.get('target');
		        object.options.set('preset', 'islands#redIcon');
			    myMap_shops.geoObjects.each(function (geoObject) {
				    if(geoObject !== object) {
				      geoObject.options.set(geoObject.options.set('preset', 'islands#blueIcon'));
				    }
				})
			    var shop = $('#shop_' + object.properties.get('id'));
			    $('.shops').animate({
			        scrollTop: $('.shops').scrollTop() + shop.position().top
			    }, 500);
			});
			myMap_shops.behaviors.disable('scrollZoom'); 
			$('.show_on_map').click(function(e){
				e.preventDefault();
				if($(this).hasClass('show_hint')){
					$('.map_shops').parent().addClass('parent_fixed');
				}
				var id = $(this).parents('.shop').attr('id').split('_')[1];
				console.log(id);
			    myMap_shops.geoObjects.each(function (geoObject) {
				    geoObject.options.set(geoObject.options.set('preset', 'islands#blueIcon'));
				    if(geoObject.properties.get('id') === parseInt(id,10)) {
				    	console.log(geoObject.geometry.getCoordinates());
				    	geoObject.balloon.open();
				    	myMap_shops.setCenter(geoObject.geometry.getCoordinates(),12,{
				    		duration: 500
				    	});	
				      	geoObject.options.set(geoObject.options.set('preset', 'islands#redIcon'));
				    }
				})
			});
		}
// ============================
		if($('#map_samovivoz').length){
		    myMap = new ymaps.Map('map_samovivoz', {
		        center: [55.164442, 61.436843],
		        zoom: 10,
		    }, {
		        searchControlProvider: 'yandex#search'
		    }),

	    // Creating a balloon layout based on Twitter Bootstrap.
	        MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
	            '<div class="popover top">' +
	                '<a class="close" href="#"><img src="img/close.png"></a>' +
	                '<div class="arrow"></div>' +
	                '<div class="popover-inner">' +
	                '$[[options.contentLayout observeSize minWidth=235 maxWidth=235 maxHeight=350]]' +
	                '</div>' +
	                '</div>', {
	                /**
	                 * Builds an instance of a layout based on a template and adds it to the parent HTML element.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
	                 * @function
	                 * @name build
	                  */
	                build: function () {
	                    this.constructor.superclass.build.call(this);

	                    this._$element = $('.popover', this.getParentElement());

	                    this.applyElementOffset();

	                    this._$element.find('.close')
	                        .on('click', $.proxy(this.onCloseClick, this));
	                },

	                /**
	                 * Removes the layout contents from DOM.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
	                 * @function
	                 * @name clear
	                  */
	                clear: function () {
	                    this._$element.find('.close')
	                        .off('click');

	                    this.constructor.superclass.clear.call(this);
	                },

	                /**
	                 * The method will be invoked by the API's template system when resizing the nested layout.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
	                 * @function
	                 * @name onSublayoutSizeChange
	                  */
	                onSublayoutSizeChange: function () {
	                    MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);

	                    if(!this._isElement(this._$element)) {
	                        return;
	                    }

	                    this.applyElementOffset();

	                    this.events.fire('shapechange');
	                },

	                /**
	                 * Moving the balloon so the "tail" points at the anchor point.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
	                 * @function
	                 * @name applyElementOffset
	                  */
	                applyElementOffset: function () {
	                    this._$element.css({
	                        left: -(this._$element[0].offsetWidth / 2),
	                        top: (this._$element.find('.arrow')[0].offsetHeight)
	                    });
	                    // console.log(this._$element[0])
	                },

	                /**
	                 * Closes the balloon when the "x" is clicked, throwing the "userclose" event on the layout.
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
	                 * @function
	                 * @name onCloseClick
	                  */
	                onCloseClick: function (e) {
	                    e.preventDefault();
	                    this.events.fire('userclose');

	                },

	                /**
	                 * Used for autopositioning (balloonAutoPan).
	                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
	                 * @function
	                 * @name getClientBounds
	                 * @returns {Number[][]} The coordinates of the top left and bottom right corners of the template relative to the anchor point.
	                  */
	                getShape: function () {
	                    if(!this._isElement(this._$element)) {
	                        return MyBalloonLayout.superclass.getShape.call(this);
	                    }

	                    var position = this._$element.position();
	                    console.log(position);
	                    return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
	                        [position.left+32, position.top], [
	                            position.left + this._$element[0].offsetWidth,
	                            position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
	                        ]
	                    ]));
	                },
	                /**
	                 * Checking the availability of the item (in IE and Opera it might not be there yet).
	                 * @function
	                 * @private
	                 * @name _isElement
	                 * @param {jQuery} [element] Element.
	                 * @returns {Boolean} Availability flag.
	                  */
	                _isElement: function (element) {
	                    return element && element[0] && element.find('.arrow')[0];
	                }
	            }),

	    // Creating a nested layout for balloon content.
	        MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
	            '<ul class="placemark_item">'+
	            	'<li>'+
		            	'<div class="hint_check_content">'+
							'<p>$[properties.balloonHeader]</p>'+
							'$[properties.balloonContent]'+
						'</div>'+
	                '</li>'+
	            '</ul>'
	        ),

	    // Creating a placemark with a custom balloon layout.
	        myPlacemark = window.myPlacemark = new ymaps.Placemark([55.164500, 61.336843], {
	            balloonHeader: 'пр-т. Советский, д. 4',
	            balloonContent: '<span class="iterator">1</span>'+
	            				'<table class="time_table">'+
										'<tbody><tr>'+
											'<td>пн—пт:</td>'+
											'<td>&nbsp;&nbsp;9:00—19:00</td>'+
										'</tr>'+
										'<tr>'+
											'<td>сб:</td>'+
											'<td>12:00—19:00</td>'+
										'</tr>'+
										'<tr>'+
											'<td class="grey">вс:</td>'+
											'<td class="grey">выходной</td>'+
										'</tr>'+
									'</tbody>'+
								'</table>'+
								'<a href="#" class="blue_btn_3">Получить заказ здесь</a>'
	        }, {
	            balloonShadow: false,
	            balloonLayout: MyBalloonLayout,
	            balloonContentLayout: MyBalloonContentLayout,
	            balloonPanelMaxMapArea: 0,
	            hideIconOnBalloonOpen: false,
	            // balloonOffset: [-80, 0]
	        }),
	        myPlacemark2 = window.myPlacemark2 = new ymaps.Placemark([55.154500, 61.436843], {
	            balloonHeader: 'пр-т. Соседский, д. 6',
	            balloonContent: '<span class="iterator">2</span>'+
	            				'<table class="time_table">'+
										'<tbody><tr>'+
											'<td>пн—пт:</td>'+
											'<td>12:00—19:00</td>'+
										'</tr>'+
										'<tr>'+
											'<td>сб:</td>'+
											'<td>12:00—15:00</td>'+
										'</tr>'+
										'<tr>'+
											'<td class="grey">вс:</td>'+
											'<td class="grey">выходной</td>'+
										'</tr>'+
									'</tbody>'+
								'</table>'+
								'<a href="#" class="blue_btn_3">Получить заказ здесь</a>'
	        }, {
	            balloonShadow: false,
	            balloonLayout: MyBalloonLayout,
	            balloonContentLayout: MyBalloonContentLayout,
	            balloonPanelMaxMapArea: 0,
	            hideIconOnBalloonOpen: false,
	            // balloonOffset: [-80, 0]
	        });

			myMap.controls.remove('zoomControl');
			myMap.geoObjects.add(myPlacemark);
			myMap.geoObjects.add(myPlacemark2);

		}
	}
})

//==========ABOUT COMPANY VIDEO==============
if($('#bg_video').length){
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		// $('head').append(tag);

	  var playerDefaults = {autoplay: 0, autohide: 0, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('bg_video', {
          // height: '800',
          // width: '100%',
          videoId: 'yzya26iFwuE',
          suggestedQuality: 'hd720',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          },
          playerVars : playerDefaults,
        });
      }
		var interval;
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
        interval = setInterval(getLastFrame, 100)
      }
      	function getLastFrame(){
        	console.log(player.getCurrentTime())
        	console.log(player.getDuration())
        	if(player.getCurrentTime() > player.getDuration()-0.250){
        		pauseVideo();
        		clearInterval(interval);
        		$('.about_company_banner .h1_white #i2').addClass('anim_h1_start');
        		setTimeout(function(){
        			$('.about_company_banner .h1_white #i1').addClass('anim_h1_start');
	        		setTimeout(function(){
	        			$('.about_company_banner .h1_white #i3').addClass('anim_h1_start');
	        		},150)
        		},150)
        	}
        };
      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
    function onPlayerStateChange(e) {
	  if (e.data === 1){
	    $('#bg_video').addClass('active');
	  } else if (e.data === 2){
	    // $('#bg_video').removeClass('active');
	  }
	}
      function stopVideo() {
        player.stopVideo();
      }
      function pauseVideo() {
        player.pauseVideo();
      }

    function vidRescale(){

	  var w = $(window).width()+200,
	    h = $(window).height()+200;

	  if (w/h > 16/9){
	    player.setSize(w, w/16*9);
	    $('#bg_video').css({'left': '0px'});
	  } else {
	    player.setSize(h/9*16, h);
	    $('#bg_video').css({'left': -($('.tv .screen').outerWidth()-w)/2});
	  }
	}

	$(window).on('load resize', function(){
	  vidRescale();
	});
}

if($('#map_shops').length){
	$(window).on('load resize', function(e){
		if($(window).outerWidth() < 600){
			$('#map_shops').wrap('<div class="hint map_shops"></div>');
			$('.map_shops').prepend('<div class="close"><img src="img/close.png"></div><h3>Где вы находитесь?</h3>');
			$('.show_on_map').addClass('show_hint');
		}
	})
}