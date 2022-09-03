
$(function () {
	let dataTask = {
		"correct-answer": {
			"name": "Врач",
			"foto": "./img/main/doctor.png",
			"dialog": `Ваши симптомы скорее всего связаны с острой респираторной вирусной инфекцией: острый назофарингит.`,
			"data": `complaints`
		},
		"generalRecommendations": {
			"name": "Врач",
			"foto": "./img/main/doctor.png",
			"dialog": `
			В таких случаях обычно используют:<br>
- полупостельный режим;<br>
- контроль температуры 2 раз в день;<br>
- обильное теплое питье 2-3 литра в сутки;<br>
- при температуре выше 38,5 °С или выраженной головной боли, боли в мышцах: парацетамол или ибупрофен;<br>- при насморке: сосудосуживающие препараты, но не более 5-7 дней;<br>
- от боли в горле: антисептические спреи и пастилки.
			`,
			"data": `complaints`
		},
		"faceToFaceReception": {
			"name": "Врач",
			"foto": "./img/main/doctor.png",
			"dialog": `При ухудшении общего самочувствия вы можете обратиться к доктору очно или вызвать врача на дом.`,
			"data": `complaints`
		}
	}
	let test = {
		"temperature": {
			"name": "Врач",
			"foto": "./img/main/doctor.png",
			"dialog": `Скажите, пожалуйста, поднималась ли у вас температура?`,
			"data": `complaints`
		},
		"temperature-answer": {
			"name": "Пациент Штро Анна",
			"foto": "./img/main/patient.png",
			"dialog": `Меня знобит, температура 37,5. `,
			"data": `complaints`
		},
		"pain": {
			"name": "Врач",
			"foto": "./img/main/doctor.png",
			"dialog": `А горло у вас болит? Есть ли боли при глотании?`,
			"data": `complaints`
		},
		"pain-answer": {
			"name": "Пациент Штро Анна",
			"foto": "./img/main/patient.png",
			"dialog": `Да, горло болит, глотать немного больно. `,
			"data": `complaints`
		},
		"сough": {
			"name": "Врач",
			"foto": "./img/main/doctor.png",
			"dialog": `А есть ли у вас кашель, затруднения при дыхании, боли в груди?`,
			"data": `complaints`
		},
		"сough-answer": {
			"name": "Пациент Штро Анна",
			"foto": "./img/main/patient.png",
			"dialog": `Кашля нет, дышу хорошо.`,
			"data": `complaints`
		},
		"runny": {
			"name": "Врач",
			"foto": "./img/main/doctor.png",
			"dialog": `У вас есть насморк, заложенность носа или подобные жалобы?`,
			"data": `complaints`
		},
		"runny-answer": {
			"name": "Пациент Штро Анна",
			"foto": "./img/main/patient.png",
			"dialog": `Да, из носа течёт ручьём, иногда он заложен.`,
			"data": `complaints`
		},
		// anamness
		"startDisease": {
			"name": "Врач",
			"foto": "./img/main/doctor.png",
			"dialog": `Когда вы заболели? С чем-нибудь связываете появление ваших жалоб?`,
			"data": `complaints`
		},
		"startDisease-answer": {
			"name": "Пациент Штро Анна",
			"foto": "./img/main/patient.png",
			"dialog": `Думаю, вчера. Я гуляла под дождём и промокла.`,
			"data": `complaints`
		},
		"currentDisease": {
			"name": "Врач",
			"foto": "./img/main/doctor.png",
			"dialog": `Подскажите, а вы уже обращались к какому-нибудь врачу? Что-то делали для улучшения самочувствия?`,
			"data": `complaints`
		},
		"currentDisease-answer": {
			"name": "Пациент Штро Анна",
			"foto": "./img/main/patient.png",
			"dialog": `Нет, никуда не ходила — только сидела дома и пила чай с лимоном.`,
			"data": `complaints`
		},
		"epidemiologicalEnvironment": {
			"name": "Врач",
			"foto": "./img/main/doctor.png",
			"dialog": `А кто-то ещё у вас дома болеет? Может, вы ходили куда-то, где вас могли заразить?`,
			"data": `complaints`
		},
		"epidemiologicalEnvironment-answer": {
			"name": "Пациент Штро Анна",
			"foto": "./img/main/patient.png",
			"dialog": `Нет, я работаю из дома и никуда не ездила. Из близких тоже никто не болеет.`,
			"data": `complaints`
		},
		"otherDisease": {
			"name": "Врач",
			"foto": "./img/main/doctor.png",
			"dialog": `Скажите, пожалуйста, есть ли у вас хронические заболевания, аллергии, принимаете ли вы какие-то лекарства?`,
			"data": `complaints`
		},
		"otherDisease-answer": {
			"name": "Пациент Штро Анна",
			"foto": "./img/main/patient.png",
			"dialog": `Нет, хронических заболеваний нет, аллергии нет.`,
			"data": `complaints`
		},
		//foto Btn
		"fotoBtn": {
			"name": "Врач",
			"foto": "./img/main/doctor.png",
			"dialog": `Анна, так как у нас удалённый приём, мне нужна будет ваша помощь в осмотре. Могу ли я вас попросить сфотографировать горло? Для этого широко откройте рот, расслабьте язык, поднести камеру к нёбу и сделайте фото со вспышкой.`,
			"data": `complaints`
		},
		"fotoBtn-answer": {
			"name": "Пациент Штро Анна",
			"foto": "./img/main/patient.png",
			"dialog": `<img class="main-chat-img" src="./img/main/foto.jpg" alt="">`,
			"data": `complaints`
		},
	}

	let startList = [{
		"name": "Пациент Штро Анна",
		"foto": "./img/main/patient.png",
		"dialog": `Здравствуйте, доктор. Кажется, я заболела`,
		"data": `complaints`
	}, {

		"name": "Врач",
		"foto": "./img/main/doctor.png",
		"dialog": `Здравствуйте! Я врач-терапевт, добро пожаловать на онлайн-консультацию. Скажите,
			пожалуйста, что вас беспокоит?`,
		"data": `complaints`
	}, {

		"name": "Пациент Штро Анна",
		"foto": "./img/main/patient.png",
		"dialog": `Я нехорошо себя чувствую, похоже на простуду.<br>
		Скажите, пожалуйста, что делать?`,
		"data": `complaints`
	}
	]

	let endList = [{

		"name": "Врач",
		"foto": "./img/main/doctor.png",
		"dialog": `Анна, я могу вам предложить повторную консультацию через 3 дня, чтобы мы проконтролировали ваше самочувствие.`,
		"data": `complaints`
	}, {

		"name": "Пациент Штро Анна",
		"foto": "./img/main/patient.png",
		"dialog": `Да, давайте!`,
		"data": `complaints`
	},
	{

		"name": "Врач",
		"foto": "./img/main/doctor.png",
		"dialog": `Хорошо, буду ждать вас. Выздоравливайте!`,
		"data": `complaints`
	}, {

		"name": "Пациент Штро Анна",
		"foto": "./img/main/patient.png",
		"dialog": `Спасибо, до свидания!`,
		"data": `complaints`
	}

	]

	let startError = {
		"standart-error": {
			"title": "Это действие сейчас недоступно",
			"text": " Если не знаете, какой шаг предпринять дальше, смело заглядывайте в справочник",

		},
		"recom-error": {
			"title": "Давать рекомендации ещё рано",
			"text": "Загляните в справочник, если не знаете, как действовать дальше",
		},
		"cart-error": {
			"title": "Заполнять медкарту ещё рано — вы не расспросили пациента",
			"text": "Загляните в справочник, если не знаете, как действовать дальше",
		},
		"diagnoz-error": {
			"title": "Устанавливать вероятный диагноз ещё рано",
			"text": "Загляните в справочник, если не знаете, как действовать дальше",
		}
	}

	let incorrectBox = {
		"incorrect-answer": {
			"title": "Судя по симптомам, это не ангина",
			"text": "Чтобы понять, чем болен пациент, изучите симптомы в справочнике",
		},
	}


	let infoBox = {
		"complaints-info": "Боли в горле, заложенность носа, насморк, общая слабость, озноб, повышеннная температура",
		"anamnesis-info": "Температура 37,5 °С, кашля и одышки нет. Cчитает себя больной со вчерашнего дня, причина: переохлаждение под дождём. За медицинской помощью не обращалась. Эпидемиологический анамнез: не отягощён.",
	}



	function dialog(img, name, text, data, time) {
		const chatBox = document.querySelector('.main-chat');
		let elem = document.createElement("div");
		elem.classList.add('main-chat-row');
		elem.innerHTML = `
		<div class="avatar-box">
			<img src="${img}" alt="" class="avatar">
		</div>
		<div class="main-chat-coll" data-status="${data}">
			<div class="main-chat-head">
				<div class="main-chat-name">
					${name}
				</div>
				<div class="main-chat-time">
					${time}
				</div>
			</div>
			<div class="main-chat-text">
			${text}
			</div>
		</div>
 `
		chatBox.appendChild(elem);
	}


	function start() {

		let timeStart = 1000;
		for (let i = 0; i < startList.length; i++) {
			setTimeout(() => {

				setTimeout(dialog(startList[`${i}`].foto, startList[`${i}`].name, startList[`${i}`].dialog, startList[`${i}`].data, getCurrentTimeString2(Math.round(Date.now() / 1000))), `${timeStart}`)
				scrollBottom()
			}, `${timeStart}`)
			timeStart += 2000;

		}

		setTimeout(() => {
			const chatBox = document.querySelector('.main-chat');
			let elem = document.createElement("div");
			elem.classList.add('main-chat-error');
			elem.innerHTML = `
			<div class="main-error-row">
				<div class="main-error-coll">
					<h3 class="main-error-title">
					Консультация началась!
					</h3>
					<p class="main-error-text">
					Выбирайте в меню справа наиболее подходящие действия. А если сомневаетесь, вам поможет справочник: там описаны все нюансы успешного приёма пациента.
					</p>

				</div>
				<div class="avatar-box">
					<img src="./img/main/error.png" alt="" class="avatar">
				</div>
			</div>`
			chatBox.appendChild(elem);
			scrollBottom()
			timer();
			unlockingColor('.complaints')
			unlockingActive('.complaints')
			unlockingError('.complaints')
			unlockingColor('.diagnoz')
			unlockingColor('.cart')
			unlockingColor('.recom')
		}, 8000)
	}
	start()
	//разблокировка
	function unlockingColor(nameBtn) {
		let btn = document.querySelector(`${nameBtn}`);
		btn.classList.remove('--back-color');
	}
	function unlockingActive(nameBtn) {
		let btn = document.querySelector(`${nameBtn}`);
		btn.classList.remove('no-active');
	}
	function unlockingError(nameBtn) {
		let btn = document.querySelector(`${nameBtn}`);
		btn.classList.remove('btn-error');
	}



	function timer() {
		let minut = 20;
		let second = 60;
		let timeBoxMinut = document.querySelector('.--minut');
		let timeBoxSecond = document.querySelector('.--second');
		function time() {
			second -= 1;
			if (second == 0) {
				minut -= 1
				second = 60;
			}
			if (minut < 0) {
				clearInterval(timerStart)
			}
			if (second === 60) {
				timeBoxSecond.textContent = '00';
			} else if (second >= 10) {
				timeBoxSecond.textContent = `${second}`;
			} else if (second <= 10) {
				timeBoxSecond.textContent = `0${second}`;
			}

			if (minut === 60 || minut === -1) {
				timeBoxMinut.textContent = '00';
			} else if (minut >= 10) {
				timeBoxMinut.textContent = `${minut}`;
			} else if (minut <= 10) {
				timeBoxMinut.textContent = `0${minut}`;
			}
		}
		const timerStart = setInterval(time, 1000)
	}

	// доктор набирает текст
	function printsDoctar(time) {
		const chatBox = document.querySelector('.main-chat');
		let elem = document.createElement("div");
		elem.classList.add('main-print');
		elem.innerHTML = `<div class="avatar-box">
					<img src="./img/main/doctor.png" alt="" class="avatar">
				</div>
				<div class="main-chat-coll">
					<div class="main-chat-head">
						<div class="main-chat-name">
							Врач
						</div>
						<div class="main-chat-time">
							${time}
						</div>
					</div>
					<div class="main-chat-text main-dots-box">
						Печатает <span class="main-dots">...</span>
					</div>
				</div>`
		chatBox.appendChild(elem);
		setTimeout(() => {
			let mainPrint = document.querySelector('.main-print');
			mainPrint.remove();
		}, 2000)
	}

	// появление ошибки
	function errorClick() {

		let btn = document.querySelectorAll('.btn-error');
		btn.forEach(item => {
			item.addEventListener('click', () => {

				if (item.classList.contains('no-active')) {

					let dataArr = item.getAttribute('data-error');

					const chatBox = document.querySelector('.main-chat');
					let elem = document.createElement("div");
					elem.classList.add('main-chat-error');
					elem.innerHTML = `
						 <div class="main-error-row">
							 <div class="main-error-coll">
								 <h3 class="main-error-title">
								 ${startError[dataArr].title}
								 </h3>
								 <p class="main-error-text">
								 ${startError[dataArr].text}
								 </p>

							 </div>
							 <div class="avatar-box">
								 <img src="./img/main/error.png" alt="" class="avatar">
							 </div>
						 </div>`
					chatBox.appendChild(elem);
					scrollBottom()
					item.classList.add('--back-color')
					item.classList.add('no-active')
					item.classList.add('btn-error')

				}
			})

		})

	}
	errorClick()

	// заполнение медецинской карты
	function medCart(accordionBtn, medicalBtn, medicalInfo, text) {
		const cart = document.querySelector('.cart');
		let complaints = document.querySelector(`.${accordionBtn}`);
		let medicalFormBtn = document.querySelectorAll('.medical-form-btn');
		let medicalTab = document.querySelectorAll('.medical-tab');
		let medicalInfoBox = document.querySelector(`.${medicalInfo}`);
		cart.addEventListener('click', () => {
			if (complaints.classList.contains('activ-btn')) {
				let complaintsFormBtn = document.querySelector(`.${medicalBtn}`);
				let dataArr = complaintsFormBtn.getAttribute('data-tab');
				let id = document.getElementById(`${dataArr}`);
				complaintsFormBtn.classList.remove('deactivate');
				complaintsFormBtn.classList.remove('no-active');
				complaintsFormBtn.classList.remove('btn-error');
				medicalFormBtn.forEach(item => {
					if (item.classList.contains('active')) {
						item.classList.remove('active')
					}
				})
				medicalTab.forEach(item => {
					if (item.classList.contains('active')) {
						item.classList.remove('active')
					}
				})
				complaintsFormBtn.classList.add('active');
				id.classList.add('active');
				medicalInfoBox.innerHTML = infoBox[text]

			}
		})
	}


	// coхранение медкарты
	function medSave() {
		const btn = document.querySelector('.medical-sabe');
		const complaints = document.querySelector('.complaints');
		const anamnesis = document.querySelector('.anamnesis');
		let cart = document.querySelector('.cart');
		btn.addEventListener('click', () => {
			if (complaints.classList.contains('activ-btn') && !anamnesis.classList.contains('activ-btn')) {
				cart.textContent = 'Заполнить медкарту 1/2';
				cart.classList.add('btn-error');
				cart.classList.add('no-active');
				cart.href = "#";
				unlockingColor('.anamnesis');
				unlockingActive('.anamnesis');
				unlockingError('.anamnesis');
			}
			if (anamnesis.classList.contains('activ-btn')) {
				cart.textContent = 'Заполнить медкарту 2/2';
				cart.classList.add('activ-btn');
				unlockingColor('.foto-btn');
				unlockingActive('.foto-btn');
				unlockingError('.foto-btn');
			}
		})
	}

	medSave()

	// старт действий
	function clickBtn() {
		let btn = document.querySelectorAll('.button-click');
		const complaintsAccordionInfo = document.querySelector('.complaints-accordion-info');
		const anamnesisAccordionInfo = document.querySelector('.anamnesis-info');
		const fotoInfo = document.querySelector('.foto-btn');
		let status = true;
		const cart = document.querySelector('.cart');
		let indicatorComplaints = 0;

		btn.forEach(item => {
			item.addEventListener('click', () => {

				if (status && !item.classList.contains('no-active')) {

					status = false;
					item.classList.add('--active');

					let dataArr = item.getAttribute('data-info');
					let dataIndicator = item.getAttribute('data-indicator');

					if (dataIndicator == 'complaints') {
						indicatorComplaints += 1;
						complaintsAccordionInfo.textContent = `Собрать жалобы ${indicatorComplaints}/4`
						if (indicatorComplaints == 4) {
							let good = document.querySelector(`.${dataIndicator}`);

							good.classList.add('activ-btn');
							cart.classList.add('open-modal');

							unlockingColor('.cart')
							unlockingActive('.cart')
							unlockingError('.cart')
							cart.href = "#medical-card";
							medCart('complaints', 'complaints-form-btn', 'complaints-form-info', 'complaints-info');
							indicatorComplaints = 0
						}
					}
					if (dataIndicator == 'anamnesis') {
						indicatorComplaints += 1;
						anamnesisAccordionInfo.textContent = `Собрать анамнез ${indicatorComplaints}/4`
						if (indicatorComplaints == 4) {
							let good = document.querySelector(`.${dataIndicator}`);

							good.classList.add('activ-btn');
							cart.classList.add('open-modal');

							unlockingColor('.cart')
							unlockingActive('.cart')
							unlockingError('.cart')
							cart.href = "#medical-card";
							medCart('anamnesis', 'anamnesis-form-btn', 'anamnesis-form-info', 'anamnesis-info');
							indicatorComplaints = 0
						}
					}
					if (dataIndicator == 'fotoBtn') {
						fotoInfo.textContent = `Запросить фотографию горла 1/1`
						fotoInfo.classList.add('activ-btn');
						unlockingColor('.diagnoz')
						unlockingActive('.diagnoz')
						unlockingError('.diagnoz')

					}
					item.style.pointerEvents = 'none'
					printsDoctar(getCurrentTimeString2(Math.round(Date.now() / 1000)));
					scrollBottom()
					setTimeout(() => {

						setTimeout(dialog(test[dataArr].foto, test[dataArr].name, test[dataArr].dialog, test[dataArr].data, getCurrentTimeString2(Math.round(Date.now() / 1000))), 1000)
						scrollBottom()
					}, 2000)
					setTimeout(() => {

						setTimeout(dialog(test[`${dataArr}-answer`].foto, test[`${dataArr}-answer`].name, test[`${dataArr}-answer`].dialog, test[`${dataArr}-answer`].data, getCurrentTimeString2(Math.round(Date.now() / 1000))), 1000)
						scrollBottom()
						status = true
					}, 4000)

				}

			})

		})
	}
	clickBtn()
	// неверный ответ
	function incorrectAnswer() {
		let button = document.querySelectorAll('.btn-incorrect');
		button.forEach(item => {
			item.addEventListener('click', () => {
				item.classList.add('--incorrect')

				let dataArr = item.getAttribute('data-incorrect');
				const chatBox = document.querySelector('.main-chat');
				let elem = document.createElement("div");
				elem.classList.add('main-chat-error');
				elem.innerHTML = `
					 <div class="main-error-row">
						 <div class="main-error-coll">
							 <h3 class="main-error-title">
							${incorrectBox[dataArr].title}
							 </h3>
							 <p class="main-error-text">
							 ${incorrectBox[dataArr].text}
							 </p>

						 </div>
						 <div class="avatar-box">
							 <img src="./img/main/error.png" alt="" class="avatar">
						 </div>
					 </div>`
				chatBox.appendChild(elem);
				scrollBottom()
				setTimeout(() => {
					item.classList.remove('--incorrect')
				}, 2000)
			})

		})
	}

	incorrectAnswer()

	// выстовление диагноза рекомедации

	function docotrTask() {
		let btn = document.querySelectorAll('.doctor-task');
		let recom = document.querySelector('.recom');
		let num = 0;
		let recomBoxInfo = document.querySelector('.recom-box-info');
		btn.forEach(item => {
			item.addEventListener('click', () => {
				let dataArr = item.getAttribute('data-task');
				let correct = item.getAttribute('data-indicator');
				item.style.pointerEvents = 'none'
				printsDoctar(getCurrentTimeString2(Math.round(Date.now() / 1000)));
				scrollBottom()
				setTimeout(() => {
					dialog(dataTask[dataArr].foto, dataTask[dataArr].name, dataTask[dataArr].dialog, dataTask[dataArr].data, getCurrentTimeString2(Math.round(Date.now() / 1000)))
					scrollBottom()
				}, 2000)
				if (correct == 'diagnoz') {
					let btnIncorrect = document.querySelector('.btn-incorrect');
					let diagonzHeadInfo = document.querySelector('.diagonz-head-info');
					let diagnoz = document.querySelector('.diagnoz');
					btnIncorrect.style.pointerEvents = 'none'
					diagonzHeadInfo.textContent = 'Установить вероятный диагноз 1/1'
					diagnoz.classList.add('activ-btn');
					item.classList.add('--active')
					unlockingColor('.recom')
					unlockingActive('.recom')
					unlockingError('.recom')
				}
				if (correct == 'recom') {
					item.classList.add('--active')
					item.style.pointerEvents = 'none'
					num += 1;
					recomBoxInfo.textContent = `Дать рекомендацию ${num}/2`
					if (num == 2) {
						recom.classList.add('activ-btn');
						unlockingColor('.repeat')
						unlockingActive('.repeat')
						unlockingError('.repeat')
					}
				}
			})
		})

	}
	docotrTask()
	// завершение
	function theEnd() {
		let btn = document.querySelector('.repeat');

		let timeStart = 1000;
		btn.addEventListener('click', () => {
			if (!btn.classList.contains('no-active')) {
				btn.classList.add('activ-btn')
				for (let i = 0; i < endList.length; i++) {
					if (endList[`${i}`].name == "Врач") {
						setTimeout(() => {

							printsDoctar(getCurrentTimeString2(Math.round(Date.now() / 1000)));
							scrollBottom()
						}, `${timeStart}`)
						timeStart += 2000;
					}

					setTimeout(() => {


						setTimeout(dialog(endList[`${i}`].foto, endList[`${i}`].name, endList[`${i}`].dialog, endList[`${i}`].data, getCurrentTimeString2(Math.round(Date.now() / 1000))), `${timeStart}`)

						scrollBottom()
					}, `${timeStart}`)
					timeStart += 2000;
				}

				setTimeout(() => {
					const chatBox = document.querySelector('.main-chat');
					let elem = document.createElement("div");
					elem.classList.add('main-chat-footer');
					elem.innerHTML = `
				<div class="main-footer-coll">
				<h3 class="main-footer-title">
					Вы молодец!
				</h3>
				<p class="man-footer-text">
					Пациент получил правильные рекомендации
					и скоро пойдёт на поправку
				</p>
			</div>
			<div class="main-footer-coll-2">
				<img src="./img/main/main-1.png" alt="" class="main-footer-img">
				<a href="#etap" class="main-chat-end open-modal">
					К следующему пациенту
				</a>
			</div>`
					chatBox.appendChild(elem);
					scrollBottom()
					$('.open-modal').magnificPopup({
						type: 'inline',
						mainClass: 'mfp-fade'
					});
				}, `${timeStart}`)
			}
		})
	}
	theEnd();

	// скролл вниз чата
	function scrollBottom() {

		var timer;
		var isPaused = false;

		$(window).on('wheel', function () {
			isPaused = true;
			clearTimeout(timer);
			timer = window.setTimeout(function () {
				isPaused = false;
			}, 10000);
		});

		window.setInterval(function () {
			if (!isPaused) {
				$(".main-chat").scrollTop($(".main-chat")[0].scrollHeight);
			}
		}, 500);
	}
	function getCurrentTimeString2(dots) {
		timeString = new Date().toTimeString().replace(/:[0-9]{2,2} .*/, '');
		return dots ? timeString : timeString.replace(/:/, ' ');
	}


})