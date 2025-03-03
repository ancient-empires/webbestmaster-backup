(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.focuses = {
		name: 'Фокусы',
		lang: 'ru', // ru || en
		//вЂ™
		questions: [
			{
				title: 'Как погасить свечу?',
				
				text: 'Возьмите свечу и спички. Поставьте ее стол, зажгите. Со словами: "Могу взглядом погасить свечу!" отойдите на значительное расстояние, на миг закройте глаза, будто передаете энергию. Через несколько мгновений свеча сама потухнет',
				
				answer: 'Как Вам это удалось? Свеча, о которой идет речь, настоящая, парафиновая. Гаснет же она из-за силикатного клея, несколько капель которого заранее нанесены в крохотную лунку на ее поверхности, у самого основания сантиметрового фитиля. Длина фитиля дает возможность спокойно отойти от свечи и оттуда дать соответствующую команду. Чтобы удлинить фитиль до нужного размера, с помощью ножа отрежьте от верхушки свечи излишки парафина'

			},
			{
				title: 'Прыгающая монетка',
				
				text: 'У Вас в руках - стеклянная рюмка (она должна иметь форму правильного конуса). На глазах у зрителей Вы кладете в нее две монеты - сначала рублевую, потом двухрублевую так, чтобы они опирались на стенки рюмки. И обращаетесь к зрителям с предложением: достать маленькую монету, не притрагиваясь к большой. Ни у кого ничего не выходит! Что ж, Вы берете рюмку, наклоняетесь над ней и сильно в нее дуете. Смотрите-ка: рублевая монетка буквально "выпрыгнула" к Вам - прямо как кузнечик!',
				
				answer: 'Никакого волшебства здесь нет - все объясняется простыми законами физики. Но чтобы фокус получился, надо тщательно подобрать рюмку определенной формы и обязательно проделать несколько раз этот трюк для себя. Получилось? Тогда можете предлагать его зрителям'

			},
			{
				title: 'Загадочные открытки',
				
				text: 'У Вас в руках стопка из нескольких десятков разных открыток, которые Вы держите картинками вниз. Вы вызываете добровольного помощника и просите его вытащить из стопки несколько открыток. Выбранные открытки он показывает зрителям и вкладывает их обратно. Тщательно выровняв открытки, Вы укладываете их на левую руку, а помощнику вручаете волшебную палочку. Совершив магические пассы, попросите помощника дотронуться до стопки волшебной палочкой, и объявляете, что теперь выбранные открытки обнаружат себя. Развернув стопку веером, Вы показываете, что выбранные помощником открытки повернулись в стопке картинками вверх',
				
				answer: 'Для демонстрации фокуса Вам понадобятся открытки с одинаковыми обратными сторонами. Их надо сложить в стопку картинками вниз. Перед самым фокусом незаметно переверните самую открытку картинкой вверх. Предлагая помощнику выбрать открытки, разверните их веером на столе, но так, чтобы нижняя открытка не была видна. Пока помощник демонстрирует открытки зрителям, соберите стопку и незаметно переверните ее. Теперь все открытки лежат картинками вверх, и только верхняя картинкой вниз. Попросите помощника вложить картинки обратно, тщательно выровняйте стопку и вручите помощнику волшебную палочку. В это время Вы должны снова незаметно перевернуть стопку открыток. Теперь все они лежат картинками вниз - кроме самой нижней и выбранных помощником. Остается только развернуть стопку веером, следя за тем, чтобы зрители не увидели перевернутой нижней открытки'

			},
			{
				title: 'Чудо-вода',
				
				text: 'На иллюзионном столике стоят четыре бокала, наполненные обыкновенной прозрачной водой. Взяв один из них, исполнитель поднимает его - и вдруг вода в бокале становится зеленого цвета. Артист ставит его обратно на стол и берет второй. Так же поднимает его, и вода в нем краснеет. Та же операция проделывается с третьим и четвертым бокалами - в них вода обретает соответственно желтый и синий цвета',
				
				answer: 'Этот фокус, как и некоторые другие, можно делать, если сцена оформлена в виде так называемого "черного кабинета", т.е. имеет задник и кулисы черного цвета. Секрет "чудо-воды" заключен в очень нехитром приспособлении. Заранее между кулисами протягивается черная нитка в 30 см над головой исполнителя. В центре ее на некотором расстоянии друг от друга подвязываются еще четыре отрезка черной нитки (не волнуйтесь - в "черном кабинете" увидеть это приспособление из зала практически невозможно). Концы этих четырех отрезков надо предварительно обмакнуть в порошки анилиновых красителей разного цвета: красный, зеленый, желтый и синий. Во время демонстрации фокуса Вы подносите каждый бокал к кончику соответственно окрашенной нитки. Та, оказавшись в бокале с чистой водой, мгновенно окрашивает ее - вот и все "чудо"'

			},
			{
				title: 'В какой руке какая монета?',
				
				text: 'Этот старинный фокус и сейчас не утратил своей загадочности в глазах неискушенного зрителя. Фокусник дает кому-либо из зрителей две самые обычные монеты, например десять копеек и одну копейку, и просит зажать каждую в кулаке так, чтобы он не видел, в какой руке какая монета оказалась. Затем просит умножить числовое значение монеты, лежащей в правом кулаке, на восемь (или любое другое четное число), а числовое значение другой монеты на пять (или любое другое нечетное число). Сложив эти два числа, зритель должен сказать, четное или нечетное число получилось. После этого фокусник сообщает, в какой руке какая монета',
				
				answer: 'Если сумма четная, то в правой руке - копейка; если сумма нечетная - то десять копеек'

			},
			{
				title: 'Фокус с домино',
				
				text: 'Вы берете одну из костей домино и предлагаете кому-либо из друзей из остальных 27 костей составить непрерывную цепь, утверждая, что это всегда возможно, какая бы кость ни была взята. Сами же удаляетесь в соседнюю комнату, чтобы не видеть цепи. Ваш друг приступает к работе и убеждается, что Вы правы: 27 костей выложились в одну цепь. Еще удивительнее то, что Вы, оставаясь в соседней комнате и не видя цепи, объявляете оттуда, какие числа очков на ее концах.<br>Как Вы можете это знать?',
				
				answer: '28 косточек домино всегда выкладываются в сомкнутое кольцо (в этом Вы можете убедиться сами); следовательно, если из этого кольца вынуть одну косточку, то:<br>1) остальные 27 косточек составят непрерывную цепь с разомкнутыми концами;<br>2) концевые числа очков этой цепи будут те, которые имеются на вынутой косточке.<br>Спрятав одну кость домино, мы можем поэтому заранее сказать, какие числа очков будут на концах цепи, составленной из прочих костей'

			},
			{
				title: 'Послушная пуговица',
				
				text: 'Налейте в стакан газированную воду. Возьмите маленькую пуговицу и опустите в стакан. Пуговица окажется на дне. Сразу же или чуть позже двигайте рукой над стаканом и говорите: "Пуговица, ко мне". Пуговица медленно поднимается вверх. Снова проведите рукой над стаканом и скажите: "Пуговица, вниз". Она послушно опустится',
				
				answer: 'Почему это происходит? Когда пуговица находится на дне стакана, пузырьки углекислого газа собираются вокруг нее. Когда их станет довольно много, они поднимут пуговицу. После этого пузырьки исчезнут, и пуговица снова за счет собственного веса опустится вниз. Это движение - вверх и вниз - продолжается до тех пор, пока выделяется углекислый газ. Рассчитайте время, сколько нужно ждать, прежде чем сказать пуговице "вверх" или "вниз"'

			},
			{
				title: 'Светящийся шарик',
				
				text: 'Вы показываете теннисный шарик. Считаете до трех - и внутри шарика появляется свет. Свет двигается!',
				
				answer: 'Добиться такого эффекта очень просто. Метрах в трех от шарика должен быть источник света, допустим, простая электрическая лампочка. А в шарике - круглое отверстие диаметром до одного сантиметра. Когда Вы показываете шарик зрителям, то прикрываете дырочку пальцем. Считая до трех, поворачиваете шарик отверстием к лампочке и, убрав палец, открываете его. Вот тут-то у зрителей и возникает впечатление, что в шарике появился свет. А чтобы свет двигался, надо просто перемещать шарик вверх-вниз и влево-вправо, но не поворачивать его'

			},
			{
				title: 'Разрезанная веревка',
				
				text: 'Иллюзионист держит в руке веревку, сложенную вдвое, берет ножницы и разрезает веревку на две части. Затем связывает только что разрезанные концы двойным узлом и... произносит "таинственное волшебное заклинание". Все ждут чуда! Сейчас из двух половинок вновь должна получиться целая веревка. Фокусник берет ножницы, срезает узел и, подбросив веревку вверх, показывает ее зрителям. Веревка - целая',
				
				answer: 'Конечно же, ни один волшебникна свете не сможет сделать из разрезанной веревки целую. "Чудо" в том, что веревку никто не разрезал! Возьмем веревку длиной 1,5 м и еще небольшой кусок этой же веревки (20-25 см). Из куска веревки надо сделать кольцо, скрепив концы друг с другом нитками. Нитки должны быть того же цвета, что и веревка. Нужно вдеть веревку в это веревочное колечко. Держать веревку с кольцом надо так, чтобы место соединения веревки и колечка было спрятано в ладони, а ладонь должна быть обращена к зрителям тыльной стороной. Место скрепления концов на веревочном колечке лучше тоже запрятать в ладошку, зрителям не показывать. Фокусник ножницами разрезает веревочное кольцо и связывает его концы двойным узлом. Первое время трудно будет завязать узел - ведь это придется делать одной рукой, лишь помогая пальцами другой руки, в которой держат веревку. А отпустить веревку нельзя, потому что зрители сразу разгадают секрет. Конечно, можно попросить, чтобы узел завязал ассистент, но лучше научиться это делать без помощников. Волшебные слова произносят для большей убедительности и таинственности. Теперь можно срезать узел. Только делать это стоит осторожно, стараясь не повредить основную веревку. Затем веревку можно показать зрителям. Она целая!'

			},
			{
				title: 'Отгадать одну за другой все карты в колоде',
				
				text: 'Фокусник просит у зрителей одолжить колоду карт, чтобы исключить всякое подозрение, что его карты препарированы. Если зрители дают свою колоду, то исполнитель оставляет 32 карты, перетасовывает их сам и даетя, кроме того, перетасовать одному из присутствующих. Если же иллюзионисту приходится показывать фокус со своими картами, то он сразу же передает их зрителю и просит перетасовать как можно тщательнее. Потом колоду кладут на стол крапом вверх.<br>Фокусник берет ее в правую руку, прячет за спину и тот час же называет карту, например, восьмерку бубен. Правую руку он держит перед собой, и зрители отчетливо видят восьмерку бубен. Исполнитель называет вторую карту, также спрятав колоду за спину. Так продолжается до тех пор, пока не будут отгаданы все карты в колоде. Вам понадобится обыкновенная колода игральных карт',
				
				answer: 'После того, как вся колода перетасована, фокусник пряча ее за спину, незаметно подмечает нижнюю карту (в нашем случае восьмерку бубен). За спиной он перекладывает эту восьмерку на верх колоды, лицевой стороной наружу, и показывает ее зрителям. При этом исполнитель замечает следующую карту, например валета треф. Поступая таким же образом дальше, он перекладывает за спиной карты, называет их и показывает зрителям постепенно всю колоду'

			},
			{
				title: 'Превращение порванной карты в целую',
				
				text: 'Исполнитель, тасуя колоду, подходит к одному из зрителей и просит вынуть одну карту, а затем выйти на сцену и показать ее зрителям. На сцене стоит столик, на котором находится открытая коробка. Взяв ее в руки, фокусник показывает, что она совершенно пуста. Поставив коробку на столик, предлагает зрителю порвать вынутую им карту на мелкие части и бросить обрывки в коробку. Тот исполняет. Взяв один из обрывков карты, иллюзионист передает его зрителю, закрывает коробку и просит крепко держать ее в руках. "Волшебной" палочкой делает около коробки пассы, а затем берет у зрителя коробку и кладет ии на стол. Фокусник спрашивает помощника из публики, что находится в коробке. Когда тот отвечает, что там лежит порванная карта, просит открыть коробку. Зритель достает целую карту, но только без уголка. Это видят все. Исполнитель берет карту без уголка и просит у зрителя тот кусочек карты, который он дал ему раньше. Приставляют уголок к карте, он точно подходит.<br>Вам понадобятся коробка для фокусов с картами, колода карт',
				
				answer: 'Фокусник заранее отрывает уголок, например, у шестерки бубен и кладет карту в коробку под вставку. Коробка на столе стоит открытой. Исполнитель прячет уголок в карман или незаметно кладет под коробку. Зрителю он форсирует бубновую шестерку (запасную). Когда зритель разорвал карту и бросил обрывки, фокусник, под предлогом, что он хочет разровнять обрывки в коробке, берет незаметно уголок от карты, передает его зрителю, тщательно разравнивает обрывки в коробке и закрывает ее. После нескольких пассов иллюзионист должен точно знать, какой стороной нужно положить коробку, чтобы карта без уголка лежала сверху, а обрывки карт были спрятаны под прикрывшей их вставкой'

			},
			{
				title: 'Удивительное вращение',
				
				text: 'У Вас в руках носовой платок и небольшая деревянная палочка. Держите палочку вертикально и накрываете ее платком так, чтобы конец палочки пришелся на его середину. Затем, взяв в другую руку один из углов платка, начинаете его крутить вокруг палочки и одновременно производите вращательные движения самой палочкой. Платок постепенно расправляется, Вы отпускаете его и увеличиваете темп вращения палочки. Платок свободно и быстро вращается на конце палочки',
				
				answer: 'Для демонстрации этого трюка Вам понадобится обыкновенный носовой платок. Весь секрет заключается в палочке, в один из концов которой заранее вбивается игла. На нее и надевается платок. А немного потренировавшись, Вы научитесь с легкостью его вращать'

			},
			{
				title: 'Бесконечная нитка',
				
				text: 'Этот фокус шутка с легкостью вставляется в любую программу и может быть показан везде и в любое время. Вы замечаете у себя на одежде соринку и пытаетесь ее стряхнуть. После нескольких неудачных попыток Вы берете ее двумя пальцами, намереваясь снять. Неожиданно для Вас за соринкой тянется нитка. Сначала Вы тянете ее медленно, затем ускоряете темп, тянете ее поочередно обеими руками, но она не кончается. И вот у Вас под ногами уже десятки метров нитки. Зрители удивлены и озадачены вместе с Вами',
				
				answer: 'Для этого трюка надо заранее положить в карман пиджака катушку с ниткой яркого цвета. С помощью иголки пропустить ее в пиджаке между тканью и подкладкой пиджака, вывести в нужном месте наружу и завязать узелок, имитирующий соринку'

			},
			{
				title: 'Танцующая монетка',
				
				text: 'Исполнитель просит у зрителей монетку любого достоинства. Получив ее, подходит к иллюзионному столику, берет пустой прозрачный стакан, демонстрирует его зрителям со всех сторон, опускает в него монету. - Теперь, - говорит он, - я произнесу волшебные слова (или взмахну волшебной палочкой, или сделаю еще что-нибудь столь же волшебное - по желанию) - монета обретет магические свойства. (Затем, разумеется, произносятся требуемые слова или производятся действия.) - А сейчас, монетка, станцуй, пожалуйста! Как Вы понимаете, немедленно происходит чудо: монетка начинает весело прыгать в стакане и продолжает "танцевать" до тех пор, пока фокусник ее не остановит',
				
				answer: 'Секрет фокуса - в длинной черной нитке. На одном ее конце крепится небольшой пластилиновый шарик, который кладется на иллюзионный стол. Другой конец держит за кулисами Ваш помощник. Вам остается выбрать подходящий момент, прилепить монетку к пластилиновому шарику, а затем ее можно смело опускать в стакан. После Вашей команды помощник дергает за ниточку - монетка начинает "танцевать"'

			},
			{
				title: 'Верная сумма',
				
				text: 'У Вас в руках всего два игральных кубика. Бросьте их на стол. Нижние грани кубиков Вам не видны. Возьмите кубики и покажите эти грани зрителю. Пусть он сложит невидимые Вам очки. Отложите кубики в сторону и правильно назовите искомую сумму двух нижних граней',
				
				answer: 'Для этого Вам нужно знать, что на игральных кубиках сумма противоположных сторон равна семи. Если с одной стороны два очка, значит, с другой - будет 5. Вам видна верхняя сторона кубиков. Допустим, с вашей стороны 4 и 1, т.е. в сумме - 5. А общая сумма двух противоположных сторон на обоих кубиках равна 14. Значит, чтобы назвать сумму, известную зрителю, от 14 отнимите 5. Назовите ее - 9. Ведь на гранях кубиков, которые видел зритель, было 3 и 6 очков'

			},
			{
				title: 'Заставьте монету прыгать',
				
				text: 'Это милый домашний фокус. Положите небольшую монету на стол и предложите кому-нибудь поднять ее, не касаясь ни стола, ни монеты. Конечно, никто не сумеет',
				
				answer: 'А фокус прост. Для этого достаточно держать руку недалеко от монеты и сильно дунуть на нее с расстояния 5 см. Воздух, сжатый вашим дуновением, поднимет монету и подбросит ее Вам в руку. Удастся это не сразу, но после нескольких упражнений можно легко проделывать этот фокус'

			},
			{
				title: 'Зачеркнутая цифра',
				
				text: 'Пусть ваш товарищ задумает какое-нибудь число, например, 847. Предложите ему найти сумму цифр этого числа (8+4+7)=19 и отнять ее от задуманного числа. У загадчика окажется: 847-19=828. В том числе, которое получится, пусть он зачеркнет одну цифру - безразлично какую, и сообщит Вам все остальные. Вы немедленно называете ему зачеркнутую цифру, хотя не знаете задуманного числа и не видели, что с ним проделывалось. Как можете Вы это выполнить и в чем разгадка фокуса?',
				
				answer: 'Выполняется все очень просто: подыскивается такая цифра, которая вместе с суммой Вам сообщенных цифр составила бы ближайшее число, делящееся на 9 без остатка. Если, например, в числе 828 была зачеркнута цифра (8) и Вам сообщены цифры 2 и 8, то, сложив 2+8, Вы соображаете, что до ближайшего числа, делящегося на 9, т.е. до 18 - не хватает 8. Это и есть зачеркнутая цифра. Почему так получается? Потому что если от какого-либо числа отнять сумму его цифр, то должно остаться число, делящееся на 9, - иначе говоря, такое, сумма цифр которого делится на 9'

			},
			{
				title: 'Неуязвимая бумага',
				
				text: 'Пустой заклеенный конверт вскройте ножницими с двух сторон. Вставьте туда узкий листок цветной бумаги. Он должен показаться и с левой, и с правой стороны. Теперь конверт разрежьте вместе с бумагой снизу вверх на две одинаковые части. Снова покажите листок - он остался целым!',
				
				answer: 'Конверт заранее прорезан в двух местах, но не насквозь. С лицевой стороны конверта этого видно не будет. Через эти отверстия и продевается цветная бумага. Ее средняя часть при этом остается снаружи, а не внутри конверта. При разрезании ножницы пройдут между конвертом и листком. Поэтому он и останется целым. Показывая фокус, держите конверт прорезями к себе'

			},
			{
				title: 'Как завязать узел на веревке, не выпуская из рук ее концов',
				
				text: 'Можно ли завязать на веревке узел, не выпуская из рук ее концов?',
				
				answer: 'Положите веревку длиной 50-55 см на стол. Переплетите рук на груди. Затем нагнитесь к столу и возьмите поочередно каждой рукой по одному концу веревки. После того как руки будут разведены, на середине веревки появится узел'

			},
			{
				title: 'Встреча четырех неразлучных друзей',
				
				text: 'Фокусник тщательно перетасовывает колоду карт и кладет на стол крапом вверх. Затем просит кого-нибудь разделить колоду на две части, потом каждую половину еще раз разделить на две части. На столе будут лежать четыре стопки карт крапом вверх.<br>Зритель по просьбе исполнителя берет верхнюю карту с первой кучки и кладет ее, также крапом вверх, на вторую кучку. Затем по указанию иллюзиониста зритель снова берет верхнюю карту с первой сопки и кладет ее поверх третьей.<br>В заключение он точно так же берет очередную верхнюю карту с первой стопки и опускает ее поверх четвертой. Фокусник просит зрителя немного отойти, а сам берет сверху каждой стопки по одной карте и показывает их присутствующим. Это оказываются валеты всех четырех мастей.<br>"Вы видите, что неразлучные друзья, четыре валета, всегда вместе!" - говорит исполнитель, заканчивая свой номер.<br>Ваш реквизит - простая колода карт',
				
				answer: 'Все четыре валета кладут вместе, сверху колоды. Тасуя колоду, фокусник следит за этими картами и делает так, чтобы они всегда лежали вместе поверх колоды. Когда зритель начинает перекладывать верхние карты с первой стопки на остальные, исполнитель следит за тем, чтобы тот постепенно и правильно положил бы по одному валету поверх каждой из четырех стопок карт'

			},
			{
				title: 'Превращение воды',
				
				text: 'На столе стоят несколько чистых стаканов и стакан с водой. Попросите зрителей убедиться, что это самые обычные пустые стаканы и в них действительно ничего нет. Можете даже попросить кого-нибудь вымыть их и насухо вытереть. После этого берете в руки стакан с водой и говорите, что попав в пустые стаканы, вода сама собой окрасится в любой из четырех цветов по желанию зрителей: синий, красный, желтый или зеленый. Попросите указать, в каком стакане какого цвета сделать воду и присутствующие с изумлением убедятся, что чистая вода, попадая в пустые стаканы, окрашивается в заказанный цвет',
				
				answer: 'Конечно, секрет заключен в стакане, из которого Вы наливаете воду. Перед выступлением помажьте в четырех местах кромку этого стакана мылом и слегка припудрите эти места порошком для окраски тканей. Запомните расположение цветов на кромке и не спеша наливайте воду из стакана так, чтобы она омывала нужный Вам цвет'

			},
			{
				title: 'Карта-эквилибрист',
				
				text: 'Фокусник, перетасовав колоду карт, берет одну и пытается поставить ее стоймя на стол. Карта падает. Но после нескольких "магических" пассов карта стоит прямо на столе, и зрители хорошо различают ее масть. Исполнитель, взяв бокал с вином, отпивает немного вина и ставит бокал на карту. Сначала она качается, но потом "под влияние пассов" иллюзиониста окал неподвижно устанавливается на карте. Вам понадобятся бокал, наполненный вином, простая колода карт, одна карта, специально препарированная для фокуса',
				
				answer: 'Секрет будет ясен, если взглянуть на карту с той стороны, которая скрыта от зрителей. На нее наполовину приклеена вторая карта, а свободная половина отогнута и служит в качестве опоры для первой карты. Для изготовления такой подставки берут две карты; одну из них сгибают в длину пополам, половину намазывают клеем и приклеивают в длину к крапу другой карты, кладут под пресс и хорошо просушивают. Затем приклеенную карту складывают и помещают под прямым углом к передней карте. Сложив карты вместе, их вкладывают в колоду. В нужный момент фокусник извлекает эту двойную карту. Вначале она несколько раз падает. Тогда исполнитель незаметно отгибает половину второй карты, которая придает gервой, видимой зрителям, устойчивость. Она прочно стоит на столе, и на нее сверху можно поставить бокал с вином. После нескольких репетиций удается легко убедить публику, что трюк этот труден и требует особых, непонятных действий от фокусника'

			},
			{
				title: 'Монетка и иголка',
				
				text: 'Вы демонстрируете зрителям монетку (любого достоинства) и обычную швейную иголку. А затем предлагаете любому желающему проткнуть иголкой монету. После того как все добровольцы потерпят неудачу, Вам, понятно, ничего не останется, как взяться за дело самому',
				
				answer: 'Понадобится пробка (обычная, из коры побкового дуба), два кубика (например, детских деревянных), молоток и щипцы. Сначала проткните иглой побку так, чтобы снизу чуть выступило острие. Щипцами откусите точащее сверху ушко. Затем положите монетку на два кубика, расположенных не небольшом расстоянии друг от друга, поверх установите пробку с иглой и несколько раз сильно ударьте по ней молотком. Игла легко проколет более мягкий металл'

			},
			{
				title: 'Волшебный листочек',
				
				text: 'Перед Вами на столе лежит стопка папиросной бумаги. Вы берете из нее один листочек и показываете зрителям, что кроме него в Ваших руках ничего нет. Разорвав листочек на мелкие кусочки, Вы скатываете из них шарик и вновь демонстрируете зрителям, что в руках у Вас больше ничего нет. Теперь, совершив правой рукой над шариком магические пассы и три раза дунув, Вы медленно на глазах у зрителей вытягиваете из шарика целый лист бумаги!',
				
				answer: 'Конечно, под стопкой папиросной бумаги на столе Вы заранее спрятали бумажный шарик, скатанный из целого листочка. Вытаскивая лист бумаги из стопки, Вы незаметно прихватываете и бумажный шарик, зыжимая его сначала междукончиками указательного и среднего пальцев, а потом между большим и указательным пальцами вместе с уголком вытащенного из стопки листочка. Зрители его, естественно, не заметят. Теперь разрываете лист на мелкие кусочки и скатываете их в комочек. Разумеется, в нем окажется и спрятанный у Вас в руках бумажный шарик. Аккуратно разворачиваете его и показываете зрителям неповрежденный листочек, а оставшиеся бумажные клочки незаметно зажимаете между большим и указательным пальцами. Наконец, смяв все, что у Вас в руках, бросаете комок на стол'

			},
			{
				title: 'Исчезающие предметы',
				
				text: 'Подобный фокус можно проделывать с разнообразными мелкими предметами: пуговицами, монетами, жетонами и пр.<br>Вы просите у зрителей монетку, кладете в ладонь правой руки и, зажав ее в кулаке, демонстрируете, что в левой руке монеты нет. Теперь, совершив над правой рукой необходимые для фокуса пассы, разжимаете кулак - монеты там нет! Касаетесь на мгновение левой рукой правой ладони, и в ней снова появляется монета',
				
				answer: 'Для демонстрации этого фокуса необходимо заранее подготовить несложное приспособление. Возьмите небольшую капроновую нить под цвет руки и свяжите ее в кольцо так, чтобы оно свободно обхватывало основание большого пальца. К узлу прикрепите пластилиновый шарик размером с горошину. Теперь можно приступать к показу фокуса. Взяв монету, Вы не просто кладете ее в правую руку, а прижимаете ее к пластилиновому шарику. Монета приклеится к пластилину и повиснет на петле. Немного потренировавшись, Вы научитесь быстро поворачивать петлю с монетой на 180 град. вокруг большого пальца так, чтобы монета перемещалась на т тыльную сторону ладони и обратно. Во время демонстрации фокуса ладонь правой руки должна быть все время обращена к зрителям'

			}

		]

	};

}(window));