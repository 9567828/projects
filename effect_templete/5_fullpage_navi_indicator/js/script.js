/*

즉시실행함수 내에서 선언한 변수를 외부에서도 접근할 할 수 있습니다. 
변수의 접근 범위가 함수 내부가 아닌 외부에서도 가능해진 것입니다. 
이와 같이, 즉시실행함수는 변수의 스코프를 포함하는데 사용되며 외부에서 함수 내의 변수에 접근할 경우 이를 통제할 수 있습니다. 
즉시실행함수는 글로벌 네임스페이스에 변수를 추가하지 않아도 되기 때문에 코드 충돌이 없이 구현할 수 있어 플러그인이나 라이브러리 등을 만들 때 많이 사용됩니다.


*/
$(function () {


	const SEC01_CIR = $('.sec01 .circle');
	const SEC02_CIR = $('.sec02 .circle');




	new fullpage('#fullpage', {
		//options here
		autoScrolling: true,
		scrollHorizontally: true,
		navigation: true,
		anchors: ['sNum1', 'sNum2', 'sNum3', 'sNum4', 'sNum5', 'sNum6', 'sNum7', 'sNum8', ],
		menu: '.sideNav>ul',
		licenseKey: '1C803096-FF9049FC-A4123F52-D747BA3D',

		onLeave: function (origin, newSection, direction) {

			if (newSection.index == 0) {
				setTimeout(sec1, 1000)
			}
			if (newSection.index == 1) {
				setTimeout(sec2, 1000)
			}
			if (newSection.index == 2) {
				console.log(newSection.index);
			}
			if (newSection.index == 3) {
				console.log(newSection.index);
			}
			if (newSection.index == 4) {
				console.log(newSection.index);
			}
			if (newSection.index == 5) {
				console.log(newSection.index);
			}
			if (newSection.index == 6) {
				console.log(newSection.index);
			}
			if (newSection.index == 7) {
				console.log(newSection.index);
			}


			let crt = newSection.index

			let sLength = $('.section').length
			console.log(origin.index)



			for (let i = 0; i < sLength; i++) {
				$('#fp-nav ul li a').eq(i).css('background', 'red')
				if (crt < i) {

					$('#fp-nav ul li a').eq(i).css('background', 'transparent')
				}

			}

		},


	});






	sec1();



	// section 함수

	function sec1() {

		SEC01_CIR.transition({
			opacity: 1,
			x: -300,
			y: -300
		}, 1000)

	}

	function sec2() {


		const tl = gsap.timeline()

		tl.from('.sec02 h1 span', {
			x: 100,
			stagger: .3,
			opacity: 0,
			duration: 1
		})
		tl.from('.sec02 .circle', {
			x: 500,
			y: 500,
			duration: 1,
			opacity: 0
		})
		tl.to('.sec02 .circle', {
			rotation: 360,
			duration: 10,
			repeat: 10,
			yoyo: true
		})



	}









	// nav
	const NAV_BTN = document.querySelector('#navIcon'); //open
	const SIDE_NAV = document.querySelector('.sideNav'); //full
	const NAV_LIST = document.querySelectorAll('.sideNav ul li a')




	NAV_BTN.addEventListener('click', function () {

		NAV_BTN.classList.toggle('open');
		SIDE_NAV.classList.toggle('full')
	})


	NAV_LIST.forEach(function () {

		for (let i = 0; i < NAV_LIST.length; i++) {

			NAV_LIST[i].addEventListener('click', function () {

				NAV_BTN.classList.remove('open');
				SIDE_NAV.classList.remove('full')

			})

		}

	})





})