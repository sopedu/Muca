(function(){
	
	var app = angular.module('language', ['pascalprecht.translate']);

	app.config(function ($translateProvider) {
	  $translateProvider.translations('en', {
	    TITLE: 'Hello',
	    MUCA: 'MUCA SOFTWARE',
	    	SERVICES:'Services',
	    	PORTFOLIO:'Portfolio',
	    	ABOUT:'About',
	    	CONTACT:'Contact',
	    	WELCOME:'Welcome To Our Studio!',
	    		WE_MAKE:'WE MAKE CREATIVE WEBSITES AND INCREDIBLE MOBILE APPLICATIONS',
	    		TELL_ME_MORE:'TELL ME MORE',
	    		WE_GOT:'We got what you need.',
	    		E_COMMERCE:'E-Commerce',
	    		E_COMMERCE_DESC:'We develop and program your website with a shopping cart, that will ensure that you get your online store stands out from the rest. we also optimize your online store to be able to generate the more sales.',
	    		RESPONSIVE_WEB_DESIGN:'Responsive Web Design',
	    		RESPONSIVE_WEB_DESIGN_DESC:'We make sure to optimize your website to look great on smartphones, tablets, laptops and desktops.Did you know, whole internet traffic with 52 percent coming from desktops and 48 percent from mobile?',
	    		MOBILE_APPLICATION:'Mobile Application',
	    		MOBILE_APPLICATION_DESC:'Mobile applications are a great way to get started in a new market or expand your business.Muca Web Design helps you to get a mobile application you\'ll love!',
	    		JUST_SOME_EXAMPLES:'Just some examples of our works',
	    		COMING_SOON:'Coming soon...',
	    		DEAR_PAST:'Dear past, thanks for all the lessons.Dear future, we\'re ready...',
	    		OUR_HUMBLE_BEGINNINGS:'Our Humble Beginnings',
	    		ONCE_UPON :'Once upon a time, all members of our team was just innocent students at Ege University,studying Computer Engineering.',
	    			JULY:'JULY',
	    			AN_AGENCY:'An Agency is Born',
	    			PART1:'BE PART', 
	    			PART2:	'OF OUR',
	    				PART3:	'STORY',
	    			AFTER_LONG:'After long days spend on academic education and coding under some companies, gaining experience, we realised we have to be independent agency.Then Muca Web Design has born.',
	    			CONTACT_US:'CONTACT US',
	    			GET_BACK:'We will get back to you within 24 hours.',
	    				NAME:'Your name*',
	    				EMAIL:'Your email*',
	    				PHONE:'Your phone*',
	    				MESSAGE:'Your message*',
	    				SEND_MESSAGE:'MESAJI GÖNDER',
	    				REQUIRED:'This field is required.'
	  });
	  $translateProvider.translations('tr', {
	    TITLE: 'Merhaba',
	    MUCA: 'MUCA YAZILIM',
	 	SERVICES:'HİZMETLER',
    	PORTFOLIO:'Portföy',
    	ABOUT:'Hakkımızda',
    	CONTACT:'İLETİŞİM',
    	WELCOME:'Stüdyomuza Hoşgeldiniz!',
    		WE_MAKE:'HARİKA WEB SİTELERİ VE KULLANIŞLI MOBİL UYGULAMALAR YAPIYORUZ.',
    		TELL_ME_MORE:'DAHA FAZLASI',																																																																																																					
    		WE_GOT:'İhtiyacınız olan şey, bizde...',
    		E_COMMERCE:'E-Ticaret',
    		E_COMMERCE_DESC:'Websitesinizi alışveriş sepetiyle birlikte programlıyor ve geliştiriyoruz.Ayrıca daha fazla satış yapabilmeniz için sitenizi optimize ediyoruz.',
    		RESPONSIVE_WEB_DESIGN:'Responsive Web Tasarım',
    		RESPONSIVE_WEB_DESIGN_DESC:'Bütün internet trafiğinin %48\'inin mobil cihazlardan geldiğini biliyor muydunuz? Muca yazılım olarak web sitenizin akıllı telefonlarda, tabletlerde ve masaüstü cihazlarda kullanılabilirliğine çok önem veriyoruz.',
    		MOBILE_APPLICATION:'Mobil uygulamalar',
    		MOBILE_APPLICATION_DESC:'Mobile uygulamalar işinizi büyütmek ve piyasaya yayılmanızı kolaylaştırmak için harika yol.Size çok seveceğiniz bir mobil uygulama geliştirebiliriz.Aklınızdaki iş fikrini koda dökebiliriz.',
    		JUST_SOME_EXAMPLES:'Geçmiş projelerimizden bir kaç örnek...',
    		COMING_SOON:'Pek Yakında...',
    		DEAR_PAST:'Geçmişten dersler çıkardık.Geleceğe hazırız...',
    		OUR_HUMBLE_BEGINNINGS:'Alçakgönüllü başlangıçlar',
    		ONCE_UPON :'Bir zamanlar takımımızın bütün üyeleri Ege Üniversitesi\'inde bilgisayar mühendisliği okuyordu.',
    			JULY:'TEMMUZ',
    			AN_AGENCY:'Muca Yazılım doğdu.',
    			PART1:'HİKAYEMİZİN', 
    			PART2:	'BİR PARÇASI',
    				PART3:	'OLUN',
    			AFTER_LONG:'Akademik eğitim ve birçok şirketin altında çalıştıktan sonra bağımsız olmamız gerektiğine karar verdik.  																																																																																																															',
    			CONTACT_US:'İLETİŞİME GEÇİN',
    			GET_BACK:'Bizden teklif alın, 24 saat içinde size geri döneceğiz.',
    				NAME:'İsminiz*',
    				EMAIL:'Emailiniz*',
    				PHONE:'Telefonunuz*',
    				MESSAGE:'Mesajınız*',
    				SEND_MESSAGE:'MESAJI GÖNDER',
    			    REQUIRED:'Bu alan zorunludur.'
	  });
	  $translateProvider.preferredLanguage('tr');
	});

	app.controller('Ctrl', function ($scope, $translate) {
	  $scope.changeLanguage = function (key) {
	    $translate.use(key);
	  };
	});
	
})();