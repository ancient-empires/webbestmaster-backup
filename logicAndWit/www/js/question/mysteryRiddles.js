(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.mysteryRiddles = {
		name: 'Mystery riddles',
		lang: 'en', // ru || en
		//вЂ™
		questions: [
			{
				title: 'CID Murder Mystery Problem',
				text: 'An old man ankit lives alone in a flat. Because of his age , he is not able to move comfortably and hence most of the things used to be delivered to his house. On Friday while delivering the mail , postman feels something suspicious in the flat and try to look inside through the key hole and he saw a blood filled body of the old man. CID arrived the scene. On the outside of flat , he found two bottles of warm milk , Tuesday newspaper, some unopened mails , some gifts. CID waste no time to find the murderer. Who was the murderer ?',
				hint: '',
				answer: 'Newspaper delivery man was the murderer because of absence of Wednesday and Thursday missing newspaper. This indicates he already know that there is no one to read it.'
			},
			{
				title: 'Detective Hercule Murder Mystery Puzzle',
				text: 'Hercule Poirot Detective reviewed the information they had on the case so far. A lady named \'monica\' was found shot and Hercule already had a list of suspects : rooney , torres , dabid , messi , ronaldo.  Killer is a fan of Hercule and chalenge him by leaving notes at various places.<br># The first was found in a drawing room.<br># The second was found in an art room.<br># The third was in a bed room.<br># The fourth in an ice-cream room.<br># The fifth at the desk room<br>All of the notes read the same thing, \'The clues are where you find the notes.\' Still , nothing was found anywhere. Hercule Poirot pause for a moment and den arrested the killer. Who was the killer ?',
				hint: '',
				answer: 'Dabid is the killer. drawing room(D) , art room(a) , bed room (b) , ice-cream room (i) , desk room (d)'
			},
			{
				title: 'Murder Mystery Puzzle',
				text: 'One evening there was a murder in the home of married couple, their son and daughter. One of these four people murdered one of the others. One of the members of the family witnessed the crime. The other one helped the murderer. These are the things we know for sure:<br>1. The witness and the one who helped the murderer were not of the same sex.<br>2. The oldest person and the witness were not of the same sex.<br>3. The youngest person and the victim were not of the same sex.<br>4. The one who helped the murderer was older than the victim.<br>5. The father was the oldest member of the family.<br>6. The murderer was not the youngest member of the family.<br>Who was the murderer?',
				hint: '',
				answer: 'Mother. We know from (3) that the youngest person was not the victim, from (4) that the youngest person was not the helper and from (6) that the youngest person was not the killer. The youngest person can only have been the witness therefore. If we make up a chart there are now three possible combinations:<br>Oldest person (father) H H M<br>Next to oldest (mother) V M H<br>Next to youngest (son) M V V<br>Youngest (daughter) W W W<br>(H = Helper ; V = Victim ; M = Murderer ; W = Witness)<br>We can work out from (5) that the father was the oldest, from (2) that the youngest person must have been the daughter. Therefore the next to the youngest must have been the son and the next to the oldest, the mother.'
			},
			{
				title: 'Hercule Poirot Puzzle',
				text: 'Detective Hercule Poirot was in his house watching the football world cup match. Suddenly a football came crashing through his window, breaking it. He got up and looked out the window just in time to see three neighborhood kids who were brothers run around a corner. Their names were Mark Benson , Steve Benson , Starc Benson.The next day Hercule got a note on his door that read "? Benson\' broke your window". Which of the three Crimson Benson should Hercule Poirot question about the incident ?',
				hint: '',
				answer: 'Mark Benson. "?"" = question MARK, so the note on the door reads "Question Mark Crimson broke your window."'
			},
			{
				title: 'Hercule Poirot Puzzle',
				text: 'Ganpat is found dead in his office at his desk. Sherlock Holmes was working on this case and have narrowed the suspects down to three people:<br>1. His Friend Mr Rakesh Gupta<br>2. Ganpat\'s wife "Bhawna"<br>3. His Secretary "Jason Kumar"<br>All three suspects visited ganpat on the day of his murder for various reason as they told to sherlock. As we know where police failed, sherlock comes.<br>He was able to find a note at the corner of the wall. "7B91011" was written on it. Sherlock waste no time in announcing the killer. Who was the killer ?',
				hint: '',
				answer: 'Jason Kumar. The number on the calendar was written in a hurry.Sherlock matched the written number with the months of the year. So the B was an 8, thereby giving us 7-8-9-10-11: July, August, September, October, November. Use the first letter of each month and it spells J-A-S-O-N.'
			},
			{
				title: 'Sherlock Holmes Mystery Puzzle',
				text: 'Ganpat is found dead in his office at his desk. Sherlock Holmes was working on this case and have narrowed the suspects down to three people:<br>1. His Friend Mr Rakesh Gupta<br>2. Ganpat\'s wife "Bhawna"<br>3. His Secretary "Jason Kumar"<br>All three suspects visited ganpat on the day of his murder for various reason as they told to sherlock. As we know where police failed, sherlock comes.<br>He was able to find a note at the corner of the wall. "7B91011" was written on it. Sherlock waste no time in announcing the killer. Who was the killer ?',
				hint: '',
				answer: 'Jason Kumar. The number on the calendar was written in a hurry.Sherlock matched the written number with the months of the year. So the B was an 8, thereby giving us 7-8-9-10-11: July, August, September, October, November. Use the first letter of each month and it spells J-A-S-O-N.'
			},
			{
				title: 'Karamchand Detective Mystery Cipher Riddle',
				text: 'Karamchand , A well known consulting detective is currently working on an international case where oil is illegally sold. While inspecting he finds a note under a shelf : 710 57735 34 5508 51 7718. Currently there are 3 suspects: Rooney Bill and Owen. He breaks the code and found the suspect. can you ?',
				hint: '',
				answer: 'Bill. If you read the message upside down, you\'ll notice that the numbers resemble letters and that those letters form legible sentences. The message is "Bill is boss. He sells oil."'
			},
			{
				title: 'Hard Murder Mystery Puzzle',
				text: 'Detective Ixolite of the NYPD was investigating a murder at Chicago. It was a difficult case, and Ixolite was completely stumped until he noticed a message sent to him by the killer cunningly hidden in a newspaper advertisement selling Car Licence Plates. Detective Ixolite thought about it for a while, and when he had solved the puzzle, immediately arrested the guilty man.<br>Q1) How did Ixolite know the advert was a clue for him?<br>Q2) Solve the code and tell me who Ixolite arrested.<br>This is the newspaper advert (Car licence plates for sale) that Detective Ixolite saw.<br>Plates For Sale;<br>[W 05 NWO]<br>[H 13 HSR ]<br>[O 05 EBM]<br>[D 08 UNE]<br>[U 10 HTY]<br>[N 04 BRE]<br>[N 16 TTE]<br>[I 26 LHC ]<br>[T 10 AEE]<br>[I 26 CNA]<br>[X 22 VDA]',
				hint: '',
				answer: '1)The first bit is easy, as the first letter of each plate spells WHODUNNIT IX(A challenge to our Detective.)<br>2)The second bit is a little trickier, but I gave you the solution.If you read the last three letters in each plate from the bottom up and right to left you get ADVANCE EACH LETTER BY THE NUMBER SHOWN, so advance W by 5 to get B, H by 13 to get U and so on until you spell BUTLER DID IT.'
			},
			{
				title: 'Mysterious Riddle',
				text: 'It was a dark stormy night and a couple were in a car racing madly through a foreign city. The car broke down and the husband had to go get help from someone who spoke his language. He was afraid to leave his wife alone in the car so he pulled up the windows and locked the car before leaving. When he came back, the car was in the same state as he had left it but his wife was dead, there was blood on the floor and there was a stranger in the car. What happened?',
				hint: '',
				answer: 'The wife was about to have a baby. They were driving to the hospital. The baby was born, and the wife didn\'t survive the birth'
			},
			{
				title: 'Extraordinary Question',
				text: 'Something Extraordinary happened on May 6Th 1978 at 12:34am what was that?',
				hint: '',
				answer: 'At that moment, the time, and day could be written as "12:34 5/6/78"'
			},
			{
				title: 'Detective Murder Or Suicide Puzzle',
				text: 'A homicide team enters a crime scene where a dead body of a fat old man lies there on the floor with blood oozing out of his head. The victim is holding a gun and a tape recorder lies there by his side. One of the detective picks up the recorder and plays it "I am tired of this life and hence I have decided to relieve myself from the worldly pains". A gunshot follows the message. The teams starts investigating a murder investigation. Why?',
				hint: '',
				answer: 'If the man killed himself, he would not have been able to rewind the cassette. Thus it is clear someone else killed him.'
			},
			{
				title: 'Logical Murder Puzzle',
				text: 'Four kids having five rocks each were playing a game in which they need to throw the rock at solid area in the water. Kid1: Succeeded in throwing three rocks at solid area but one of the rock sunk. Kid3: His aim was so bad that all rocks got sunk. Kid4: He was awesome and none of the rocks got sunk. Kid2 was the winner but was struck by a rock in the head and died. Who killed Kid2 ?',
				hint: '',
				answer: 'Kid1, he was left with one rock.'
			},
			{
				title: 'Suicide Mystery Riddle',
				text: 'A man 5\'11" high is found dead in an closed room.  This room is found empty with some puddle of water. The man was died by hanging himself to a 12 feet high fan. How did the man die ?',
				hint: '',
				answer: 'He hung himself using big Ice slabs, which are now now melted and hence puddle of water.'
			},
			{
				title: 'Survive The Fire Brain Teaser',
				text: 'Isaac Newton is stranded on an island covered in forest. One day, when the wind is blowing from the west, lightning strikes the west end of the island and sets fire to the forest. The fire is very violent, burning everything in its path, and without intervention the fire will burn the whole island, killing the man in the process. There are cliffs around the island, so he cannot jump off. How can the Isaac Newton survive the fire? (There are no buckets or any other means to put out the fire)',
				hint: '',
				answer: 'Isaac Newton picks up a piece of wood and lights it from the fire on the west end of the island. He then quickly carries it near the east end of he island and starts a new fire. The wind will cause that fire to burn out the eastern end and he can then shelter in the burnt area. (Funny Part : Isaac Newton survives the fire, but dies of starvation, with all the food in the forest burnt )'
			},
			{
				title: 'Murder Or Suicide Riddle',
				text: 'On a homicide case, the police is unable to find anything. However, they have five suspects who could have killed the person – Samoa, Richard, Neil, Jenifer and Sia. Suddenly, an officer notices that there is something written on the calendar. He finds out that they are numbers – 9, 4, 5, 10, 8. He smiles, as he know who the killer is. Do you ?',
				hint: '',
				answer: 'Yes, the killer is Samoa. The numbers on the calendar represents the months and the initial of every month reflects the name of the killer.<br>9 – September (S)<br>4 – April (A)<br>5 – May (M)<br>10 – October (O)<br>8 – August (A)'
			},
			{
				title: 'Murder Mystery Brain Teaser',
				text: 'A homicide detective is called upon a crime scene. He finds that a body is lying on the ground in front of a multistory building. By all the means, it looks like a simple suicide case. But there are doubts in his mind. He goes to the first floor and moves into the room facing the direction of the body. He opens the window in that direction and looks down towards his team. The he goes to the second floor and again moves into the room facing that direction, opens the window and looks down at his team. He continues with the same process till the top floor. After that, he returns back to where his team is standing. He tells them that it is a suicide. How did he come to such a conclusion?',
				hint: '',
				answer: 'At every floor, the detective had to open the window himself. If the man had committed suicide, then at least one of the windows must have been open. A person who is committing suicide won’t close the window behind him. Thus he knows that someone pushed him off the edge and closed the window afterwards.'
			},
			{
				title: 'Best Thinking Brain Teaser Ever',
				text: 'Three men are living in a desert namely – Alex, Brian and Chris. Alex hates Chris and thus he decides to kill him. To succeed in his evil intentions, he poison the water supply of Chris. Since they are living in desert, he will have to drink water or he will die of thirst. Brian is not aware of the actions of Alex and he plans to kill Chris as well. To do this, he killed the water supply of Chris. Chris dies due to his thirst. Who killed him?',
				hint: '',
				answer: 'This is more of a philosophical question than being a riddle or a puzzle. The action of Brian directly led to the result which is the death of Chris. Thus he murdered Chris. In a sense, Chris died due to the lack of water. It is the circumstances that ultimately led to his death.'
			},
			{
				title: 'Secret Code Riddle',
				text: 'You are giving an intelligence test. In that, you are provided by the code - MOD OAT AIM DUE TIE. You know that only one word from this code is true and the rest ones are only put in to make the task difficult for you. To understand, you are provided with a clue – If you are told any one of the characters of the code word, you can find out the word easily.  Can you deduce the actual code word from the entire code?',
				hint: '',
				answer: 'The code word is TIE. Let us assume that the word is MOD. Now if you are told one character of this word, you would not be able to identify the number of vowels in the word. For example if you are told M, then the word can be MOD or AIM but they both have different number of vowels. If you are told about O, then there are two words MOD and OAT which again have different number of vowels. If you are told about D, there are two words again MOD and DUE which have different numbers of vowels again. In such manner, all the words that have M, O or D in them can be excluded. Then only word that remains is TIE. If you are told about T, there are two words OAT and TIE which both have two vowels. If you are told about I, there are two words AIM and TIE which both have two vowels. If you are told about E, there are two words DUE and TIE which both have two vowels. Thus TIE is the code word.'
			},
			{
				title: 'Logical Murder Mystery Brain Teaser',
				text: 'The store room of your house is locked with a certain lock that can be closed without a key but requires a key to open which you own (there is no duplicate key). You decide to move your old stuff in the storeroom. After keeping the things carefully, you lock it back again perfectly. The next day, a dead body is found in your closed store room. Since only you have the key to the store room and you live alone, the police suspects you as a murderer. You can’t understand anything when suddenly a thought strikes your mind. There is a possible way using which the dead body could have been placed by someone else. Can you find that way so you can tell the police and prove yourself to be innocent?',
				hint: '',
				answer: 'When you were inside the shed, the murderer replaced the lock with his own one that was identical to your original lock. When you locked the store room, you did not require a key and there was nothing abnormal for you. When you left, the murderer opened the lock with his key, planted the dead body inside and replaced the lock again putting the original lock in the place. He then closed it without any problem.'
			},
			{
				title: 'Famous Elevator Riddle',
				text: 'Tanu lives on the 13th floor takes the elevator down to the ground floor every morning and goes to her office. In the evening, when she comes back on a rainy day , or if there are other people around in the elevator, she goes to her 13th floor directly. Otherwise, she goes to the 1oth floor and walks up three flights of stairs to his apartment. Whats the reason for her unusual behavior ?',
				hint: '',
				answer: 'The women is a of short stature. She can\'t reach the upper elevator buttons, but can push is with his umbrella.'
			},
			{
				title: 'Cake Grandma bridge Logic Problem',
				text: 'Rohit is on his way to visit your Grandma, who lives at the end of the state.It\'s her birthday, and he want to give her the cakes that he has made.Between his place and her grandma house, he need to cross 7 toll bridges. Before you can cross the toll bridge, you need to give them half of the cakes you are carrying, but as they are kind trolls, they each give you back a single cake. How many cakes do rohit have to carry with him so he can reach his grandma home with exactly 2 cakes?',
				hint: '',
				answer: '2 cakes. At each toll bridge you are required to give half of your cakes, and you receive one back. Which leaves you with 2 cakes after every bridge.'
			},
			{
				title: 'Terrorist Plane Hijack Puzzle',
				text: 'Carsten Bockstette (a terrorist) hijacks a plane with 10 passengers and there is lots of gold in the plane. After talking the gold , he asked the government officials for 11 parachutes. He killed all the passenger so that no one can identify him , take one parachute and jumps off. Was he stupid to ask for 11 parachutes if he need only one ?',
				hint: '',
				answer: 'He was genius. Officials must have thought he was jumping with a hostage, they would never risk giving him a faulty parachute.'
			},
			{
				title: 'Whatsapp Murder Mystery',
				text: 'A man is found dead with all his bones crushed. At a couple of feet near to him is an unopened package. Nobody could be found anywhere around the body. Can you determine the cause of death? * This riddle was very popular on whatsapp',
				hint: '',
				answer: 'The man had jumped from an aircraft and when he tried opening his parachute, he was unsuccessful. He hit the ground crushing all his bones and died on the spot. The unopened package found near his body is the parachute.'
			},
			{
				title: 'IAS Murder Brain Teaser Riddle',
				text: 'Two friends are standing in a large hall that is vacant except them both. They are facing each other. First friend predicts the future of the second one and says that in five minutes, the second will be stabbed by someone in the back. The clock is hanging on the wall in front of the second one.  He is shocked to hear this and impatiently sees the clock ticking away. After five minutes, he is stabbed on his back. Who stabbed him and how did it happen?',
				hint: '',
				answer: 'After five minutes, the second friend turned around to see if anyone was there or not. At this moment, he was stabbed on back by his friend.'
			},
			{
				title: 'Brain Teasers Detective Stories',
				text: 'You are called to investigate a murder in a house. There are six suspects of the murder. The corpse was found in the living room. You begin your investigation by asking three questions to all of them. Four people among the six suspects are liars. Thus, they speak at least one lie but not necessarily all lies. It is confirmed that one of them is a murderer. The responses of all six people are as given below:<br>Jerry:<br>Patrick was in the 2nd bedroom.<br>So was I.<br>Max was in the bathroom.<br>Molly:<br>I agree with Jerry that Max was in the bathroom and Patrick was in the 2nd bedroom.<br>But I think that Jerry was in the living room, OH MY GOD!<br>Patrick:<br>Molly was in the kitchen with Mike.<br>But I was in the bathroom.<br>Max:<br>I still say Patrick was in the 2nd bedroom and Catherine was in the bathroom.<br>Jerry was in the 1st bedroom.<br>Catherine:<br>Patrick was in the bathroom with Mike.<br>And Molly was in the kitchen.<br>Mike:<br>Max was in the kitchen.<br>And I was in the 2nd bedroom with Patrick.<br>The house accommodates eight rooms: Living Room, 3 Bedrooms, Kitchen, Bathroom, Garage and Basement. Any number of people could have been present in any of the rooms at the same time. Can you identity the killer, the four liars and the position of each one of them during murder?',
				hint: '',
				answer: 'Molly. Explanation:<br>Let us suppose that Patrick was not in the second bedroom. This proposes that Jerry, Molly, Max and Mike are liars. It infers that Patrick and Catherine speak truth. But that is not possible as they do not coincide on Mike\'s location. Therefore, we are wrong with our assumption and Patrick was in the second bedroom. So far, we have established the fact that Patrick was in the second bedroom. Additionally, Patrick and Catherine are liars Now, let us suppose that Jerry speaks truth. This proposes that Max was in the bathroom and Jerry in the second bedroom. This infers that Molly and Max are liars as they told that Jerry was not in the second bedroom. Also it implies that Mike lied, as he said Max was in kitchen. Therefore we have three new liars now, which totals the number of liars to 5, which contradicts the given situation in the question. Hence, now we have established the fact that Jerry is a liar. Let us now suppose that Molly speaks truth. This proposes that Jerry was in the living room and Max was in the Kitchen. This infers that Max and Mike are liars. But again, this is contradicting the situation as we have already established the fact that there are again 5 liars (counting above 3 established liars). Therefore, now we have established that Molly is a liar. Max and Mike speak truth. Catherine was in the bathroom. Jerry was in the first bedroom. Max was in the kitchen. Mike was in second bedroom with Patrick. The killer has to be Molly as no one else was present in the living room.'
			},
			{
				title: 'Murder Logic Question',
				text: 'A man killed his wife for he was not sure of her fidelity. He stabbed her on heart with a knife. To cover up his crime, he pushed her body in his car. He drove a few miles and then threw her body in an alley. He carefully wiped his finger prints and threw the knife on the crime scene. Then, he drove back to his home. After an hour, he received a call from the local sheriff. The sheriff told him that his wife was murdered and that he must reach at the crime scene. But when he reached the crime scene, he was arrested by him. How did the sheriff know that he was the culprit?',
				hint: '',
				answer: 'It is simple. The sheriff never told him where the crime scene was. But still he reached at the right place. This points towards the fact that he knew it already and that he is the killer himself.'
			},
			{
				title: 'Suicide Brain Teaser',
				text: 'A couple went on for river crossing outside the country. After a day, only the woman returned and told the police that her husband drowned while crossing the river. The next day the Sherriff visited her again and arrested her. “Your travel agent called. You are arrested for murdering your husband” he said. How did the travel agent know about the murder?',
				hint: '',
				answer: 'The wife booked a two way ticket for herself and booked a one way ticket for her husband.'
			},
			{
				title: 'Mysterious Suicide brain teasers',
				text: 'The investigation department is called after the local officer confirms a suicide. On analyzing the scenario the facts are as follows. The man was found with a knife in his back in his room. A chair was found beside him and there was moisture around the body. How can it be a suicide?',
				hint: '',
				answer: 'The dead man used an ice knife to commit suicide. The ice held the knife pointing upwards as he dropped on the chair with his back facing the knife. Later, the ice melted leaving moisture around the body.'
			},
			{
				title: 'Murder Brain Teaser',
				text: 'Two men wake up only to find out that they are trapped in a jigsaw trap with their hands trapped in sort of metal bars and body tied to a chair. In front of them is one large glass of a drink topped up with ice cubes. Suddenly a picture appears on the screen in the room. The jigsaw doll appears and it says, The drink that are kept before you are poisoned. But in order to survive, you must drink all of them lifting the glass from your mouth. After you drink them, your hands will be freed automatically from the hold of the bars. If you throw that drink, you are doomed here forever. Can you push your limits in order to survive? Immediately after, one of them lifts the glass from mouth and gulps down the entire drink which feels pretty cold due to so many ice cubes. Immediately after drinking, the bars holding his hands are lifted and he is set free. Seeking that he might die with the poison soon, he tries to help the other person. After about half an hour when he is not able to set the other person free, he acknowledges that he managed to survive. Both of them thinks that it might be a hoax warning after all and thus the second person drinks his drink as well. The metal bars are lifted and he is set free but he dies after a couple of minutes. How is this possible that only one of them died after drinking the same drink? (The poison was in both the glasses)',
				hint: '',
				answer: 'It is quite possible. The poison was not on the drink but in the middle of ice cubes. The first one drank immediately and thus the poison could not reach his body while when the other drank after half an hour, the ice cubes had melted. Thus he died.'
			},
			{
				title: 'Sherlock Holmes Brain Teaser',
				text: 'A guy is found dead in his living room in front of a mirror in semi naked state. The police begin with the investigation and come across some awkward facts. When the man was killed, the room was closed from the inside. There was no way any one would have come through the window. No signs of struggles were found on the scene. The pants of the guy were found on the floor with the belt still around it. There was a lot of blood around his dead body which indicated murder through a sharp object. But the forensic team could not find any incision on the body. Seeking all these facts, the police was unable to solve the mystery behind the murder. Sherlock Holmes was called and he deduced the method of murder. Can you? Spoiler Alert : Sherlock Season 3 Episode 2 (The Sign of Three)',
				hint: '',
				answer: 'The guy was killed a long ago, but he could not realize it till he reached his room. No need to be confused. Actually the killer has somehow inserted an extremely fine and thin incision blade in the belt of the guy. The guy did not feel anything at the moment as it was extremely fine. But when he was changing his clothes and took of his pant, the incision knife that was in his body, came out stuck to the belt cutting him very finely on the insides. That is the reason there was so much blood loss that he died and it was so fine that it was not visible to the naked eyes.'
			},
			{
				title: 'Nice Death Puzzle',
				text: 'My grandmom told me a story. Once a father and his 3 sons lives in a village. One day the father met with a terrible accident , so death comes to take the father. Oldest son begs to the death to let his father live for some years, death was kind and so agreed. After an year and half death returned back to take away the father with him.Second son beg and so death agreed and grant him some more time. After 6 months death returned again to take the father. Now the youngest son request to allow his father to live till the candle wick of the candle on his hand burned out.Death agreed. Now as the youngest son thought , the death never returned back. How come ?',
				hint: '',
				answer: 'The youngest son went over and blew out the candle after Death left because the son said \'till the candle wick burns out\', not \'till the candle burns out\'.'
			},
			{
				title: 'Logic Trick Teaser',
				text: 'On a dark night Tushar and Tanu were sitting together.Tushar was watching the baseball match in his TV while his wife Tanu was reading a novel.Suddenly the power went out and Tushar decided to go to bed, but strangely Tanu kept on reading. There was no artificial light around, Tanu kept on reading. How come ?',
				hint: '',
				answer: 'Tanu was blind and she was reading book by Braille.'
			},
			{
				title: 'Detective Conan Riddle',
				text: 'Detective Conan got call from his one of the informer that Youssef had killed a person in a building. Detective Conan inspector reached at the incedent with-in 4 minutes. When the inspector reach there, he found that 11 people were playing cricket. However without any communicator or any hesitation he immediately arrested one of the. How\'s the detective so sure ?',
				hint: '',
				answer: 'Youssef is name of a man , and out of 11 people only one is male'
			},
			{
				title: 'Whats the Motto of killing Problem',
				text: 'A girl, at the funeral of her mother, met a guy whom she did not know. She fell for him and just kept looking at him.Sometime later she realized that the guy is gone and she forgot to take the number of the guy and now she can\'t find him. A few days later she killed her elder brother. Question: What is her motive in killing her brother ?',
				hint: '',
				answer: 'She was hoping that the guy would appear at the funeral again.'
			},
			{
				title: 'Logic Riddle',
				text: 'Football, shoes and socks were stolen. 3 suspects got caught: Wayne Rooney, Robin Persie and Danny welbeck. All we know that each person stole one item, but we do not know who stole which.  Here are the investigation statements. Wayne Rooney said: Danny welbeck stole the football.  Robin Persie said: Danny welbeck stole the shoes.  Danny welbeck said: They both were lying. Later on, the Alex Ferguson found out the man who stole the socks told a lie. The man who stole the football told the truth. Can you find out who stole which?',
				hint: '',
				answer: 'Wayne Rooney stole socks. Danny welbeck stole shoes. Robin Persie stole football.'
			},
			{
				title: 'Friday 13th Unlucky Puzzle',
				text: 'Many people would think Friday the 13th will be an unlucky day. Is it possible that there is no Friday on 13th through the whole year? How many Fridays at 13th can we have in a year at most? Can you calculate it out?',
				hint: '',
				answer: 'We can calculate out how many days there will be for the 13th on each month if we count from the beginning of the year (January 1). Then we divide total days by 7 to get the remainders. We also need to consider the leap year. Through the whole year we had all kinds of remainders, from 0 to 6. The minimum of occurence for all the unique remainders was 1. It means that we have at least one Friday on 13th. In a regular year, the best chance you can get 3 Fridays on 13th, which are in February, March and December because the remainders of these 3 months are 2. In a leap year, the best chance you also can get 3 Fridays on 13th, which are in January, April and July because the remainders of these 3 months are 6.'
			},
			{
				title: 'Weird Death Riddle',
				text: 'A dead body is found in a forest. The dead person is a male in his late twenties. He is found in his swimming trunks, with a face mask and snorkel. The disturbing fact is that the nearest lake around his body is about seven miles away. The sea cannot be found in the hundred miles range. What was he doing with snorkeling equipment and how did he die ?',
				hint: '',
				answer: 'The forest in which the body is found was on fire. Thus a fire fighting plane was appointed on the task of putting off the fire. The plane went to the nearest lake and scooped up the water to put on the fire. Accidentally while scooping up the water, they also picked up the man swimming in the lake. Unfortunately they did not know the fact and dropped him on the fir along with the water. He died on the spot.'
			},
			{
				title: 'Fun Murder Mystery Problem',
				text: 'When I woke up this morning, I spotted a minuscule splash of blood on the ceiling of my bedroom. How did it get there? There was no murder that took place in the room. No one even played a prank on me. Do you have any possible logical explanation?',
				hint: '',
				answer: 'The blood came from a mosquito. It bit and sucked my blood last night. It then flew and sat on the ceiling. Determined to kill it I swatted it right there and the minuscule splatter came from it only.'
			},
			{
				title: 'Short Murder Mystery Riddle',
				text: 'Adam killed his wife in front of so many people. Yet, no one has the power to accuse him of the murder and send him to prison for his crime. How ?',
				hint: '',
				answer: 'This is because Adam is a hangman by profession. Apparently, his wife has been sentenced to death and he had to do it with his own hands.'
			}
		]

	};

}(window));