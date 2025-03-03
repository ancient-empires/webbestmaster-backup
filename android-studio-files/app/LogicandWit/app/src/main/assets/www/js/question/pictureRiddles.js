(function (win) {

	"use strict";
	/*global window */

	win.sections = win.sections || {};

	win.sections.pictureRiddles = {
		name: 'Picture riddles',
		lang: 'en', // ru || en
		//вЂ™
		questions: [

			{
				title: 'Open polygon',
				text: 'Connect all 9 dots with 4 straight lines without lifting the pencil off the paper, and without going over the same line twice._!_http://brainden.com/images/9dots.gif ',
				
				answer: 'http://brainden.com/images/9dots-solution.gif'
			},
			{
				title: 'Write numbers',
				text: 'Write the numbers from 1 to 8 into the squares, so that the squares with consecutive numbers do not touch (neither edges nor corners)._!_http://brainden.com/images/numbers.gif',
				
				answer: 'http://brainden.com/images/numbers-solution.gif'
			},

			{
				title: 'Hexagons',
				text: 'Find a looped path through the diagram subject to the following constraints. The path proceeds from one hexagon to an adjacent hexagon through the center of each hexagon, passes through no hexagon more than once, does not go through any numbered hexagon, and never makes a acute angle turn (i.e., a turn at a 60o angle). Each number indicates how many of the adjacent hexagons are part of the path._!_http://brainden.com/images/hexagon.gif',
				
				answer: 'http://brainden.com/images/hexagon-solution.gif'
			},
			{
				title: 'Nessie',
				text: 'A monster snake, 45 m long, hides under water. The picture below shows the area where the monster is hidden. Each square represents 1 meter. Parts of the snake\'s body are connected horizontally or vertically across the squares on the picture below. Above the surface, there is only his head (1), tail (45) and 23rd meter part of body (23). The yellow numbers on the margins show how many squares are occupied by the snake\'s body parts in the corresponding row or column. Black squares are stones, where the snake can\'t be.<br>So where is the snake?_!_http://brainden.com/images/nessie.gif',
				
				answer: 'http://brainden.com/images/nessie-solution.gif'
			},
			{
				title: 'A Rebus Problem',
				text: 'What does does this rebus represents?_!_http://3.bp.blogspot.com/-oRzv4efx4k4/UM10osi61nI/AAAAAAAAEzg/uHBXz9RiGbc/s1600/A-Rebus-Riddle.gif',
				
				answer: 'Diamond Ring'
			},
			{
				title: 'Hero',
				text: 'What does this Image Rebus means?_!_http://1.bp.blogspot.com/-s5MFfmu38U0/UKZkjUIvLqI/AAAAAAAAEbw/X3FcWG0DMUc/s1600/Image-Rebus.jpg',
				
				answer: 'Forgotten heroes'
			},
			{
				title: 'Secret Rebus',
				text: 'What does this Image Rebus means?_!_http://1.bp.blogspot.com/-45kL0UNfe38/UIrdHBv2QcI/AAAAAAAAEIY/eX31Q30NE4M/s1600/Rebus-Riddle.jpg',
				
				answer: 'Top Secret'
			},
			{
				title: 'Simple Rebus Riddle',
				text: 'What word is represented by this rebus._!_http://3.bp.blogspot.com/-nUTb-XPoDeM/UHGLEXrvYaI/AAAAAAAADyE/uC02cemSrHc/s1600/Rebus-Puzzle.gif',
				hint: 'We do it the morning ',
				answer: 'Breakfast'
			},
			{
				title: 'Moral',
				text: 'What does this Rebus Image Riddle Says?_!_http://2.bp.blogspot.com/-AgetRLBJTyc/UHGLBrFJqaI/AAAAAAAADxk/7KOs8Syrf24/s1600/Photo-Puzzle.gif',
				
				answer: 'Moral Support'
			},
			{
				title: 'Picture Star Riddle',
				text: 'This is a puzzle that will keep you thinking for some time. You can see nine stars in the attached picture. Your task is simple. You have to connect all of them using just four lines. Here is the catch, you have to do it in a continuous flow which means you cant lift your hand or that every next line must begin where the first one ended. How will you do it?_!_http://1.bp.blogspot.com/-m3XGuWCMtvw/VBCTN-7H9nI/AAAAAAAAECY/jqRzItEuvhY/s1600/join-stars-puzzle.png',
				
				answer: 'http://3.bp.blogspot.com/-s2Muytp3yew/VBCTNpwxaHI/AAAAAAAAECw/V0aaxjP0vUk/s1600/join-stars-puzzle-solution.gif'
			},
			{
				title: 'Best Picture Brain Teaser',
				text: 'Seeing the picture, can you identify in which direction is it going - left or right? Keep in mind that the bus is moving in UK._!_http://2.bp.blogspot.com/-A4oRIUpE6pw/UvD9_jBzpiI/AAAAAAAAAxw/u76wjKCG5os/s1600/moving-bus-riddle.png',
				
				answer: 'Since the door is not visible in this picture, the bus is moving in the left direction.'
			},
			{
				title: 'Funny Rebus Riddle',
				text: 'What does this funny rebus riddle means?_!_http://2.bp.blogspot.com/-IxTN4IJx23g/URKK0yKveRI/AAAAAAAAFrI/oUBFfEELwG0/s1600/Funny-Rebus-Riddle.jpg',
				
				answer: 'I Ate Some Pie and It Was Delicious'
			},
			{
				title: 'Cats Identical Picture Riddle',
				text: 'You can see nine almost same looking cats in the picture. However, they are not identical; only two of them are. Can you find out those two identical cats?_!_http://4.bp.blogspot.com/-0KKNVXp_PIQ/VBXl73XxxII/AAAAAAAALN8/BNtB9V4mzl4/s1600/identical-cats-puzzle.gif',
				
				answer: 'You can only find it out if you look closely. The second and the fourth cat are identical. In the picture, we have explained how._!_http://1.bp.blogspot.com/-b-tgOBePJJs/VBCTMWoOvnI/AAAAAAAAECE/eGOBcwVeOq8/s1600/identical-cats-puzzle-solution.gif'
			},
			{
				title: 'Form Cube Shape Riddle',
				text: 'If we fold the given open cube to form a perfect cube, which figure will it result in? For your convenience we have given you options._!_http://3.bp.blogspot.com/-Pi_zrrZJAlA/U_Ibd-SBtvI/AAAAAAAAD5Y/x_OnaCciDeo/s1600/fold-the-cube-puzzle.png',
				
				answer: 'This open figure will result in the cube given in the option C.'
			},
			{
				title: 'Missing Number Puzzle',
				text: 'If we tell you that there is a relation between the numbers and letters in the given figure, can you analyze it and find the missing letter in the last box?_!_http://3.bp.blogspot.com/-itw00jLkpbw/U_Iadsld16I/AAAAAAAAD5Q/uPdXiagEzLQ/s1600/missing-dice-throw-puzzle.png',
				
				answer: 'The last missing throw will have 3 as the result. This is because, with each pair of the throws you can find that the total sum is increasing by three and then decreasing by one. Therefore the missing throw be 3.'
			},
			{
				title: 'Logical Cut Brain Teaser Riddle',
				text: 'Your friends are coming over to your birthday party. Your mum has bought this delicious giant doughnut for you guys. Unfortunately she had to go somewhere. Now you have to serve all of them including you. There are a total of nine kids including you. None of you would mind a smaller piece. Can you cut this doughnut into nine pieces in just three straight cuts?_!_http://3.bp.blogspot.com/-TBbm7wNAPLE/U-PWmUZkJPI/AAAAAAAAD1E/oGuwFBBoEC8/s1600/delicious-doughnut-puzzle.jpg',
				
				answer: 'Yes, some people are going get really tiny pieces but you were allowed for that right. Also, there is another way of doing it. Can you think of it?_!_http://3.bp.blogspot.com/-7LZUY2KNISA/U-PWuPg4zSI/AAAAAAAAD1Y/2aWlyPIjo10/s1600/delicious-doughnut-puzzle-solution.png'
			},
			{
				title: 'Picture Mind Teaser',
				text: 'You are given with six marbles of three different colors. Arrange them in a manner that each one of them touches all four marbles of different colors._!_http://2.bp.blogspot.com/--lQ8PchttDE/U8zZDV1oitI/AAAAAAAADrU/mI-LXlv0XL4/s1600/marbles-puzzle.png',
				
				answer: 'To do it, the marbles must be arranged as the vertices of an octahedron. If you are unsure, check the image below._!_http://2.bp.blogspot.com/-8O4YmlUESW0/U8zZDYgzzfI/AAAAAAAADrQ/sqmW5Z0Uyt4/s1600/marbles-puzzle-answer.png'
			},
			{
				title: 'Logic Picture Problem',
				text: 'As you can notice in the picture that ten coins have been arranged to form a triangle pointing upwards. What you have to do is move three coins and make that triangle point downwards. Can you do it in just 3 moves?_!_http://3.bp.blogspot.com/-q2TUV0we5A8/U5bGUha6DdI/AAAAAAAADKg/Q9qJZVq6Rl0/s1600/Visual-Thinking-Puzzle.png',
				
				answer: 'Move the coins as given in the figure and you will get the required result._!_http://2.bp.blogspot.com/-tkgVgEboNIU/U5bGTD_sfYI/AAAAAAAADKc/EC4piJfi_4E/s1600/Visual-Thinking-Puzzle-Answer.png'
			},
			{
				title: 'Trick Picture Sequence Riddle',
				text: 'There is a car parked in the parking. Can you identify the parking number of that slot?_!_http://4.bp.blogspot.com/-7ZZQaCvycj8/U3hWKxMIyAI/AAAAAAAAKIA/z2tyGecXxPg/s1600/Trick+Picture+Sequence+Riddle.jpg',
				
				answer: 'The slot number in which the car is parked is 87. Just invert the image and you will know why.'
			},
			{
				title: 'Pattern Series Picture Puzzle',
				text: 'Use the logical reasoning to find out the missing piece in the picture given with this question. Find the logic in the figure given and find out the missing one._!_http://1.bp.blogspot.com/-SFoUaM2Ylsk/Ux3Ngyg20vI/AAAAAAAAA8o/IBLrtNkwzPo/s1600/hard-puzzle.jpg',
				
				answer: 'If you take a look closely, you will acknowledge the fact that every symbol in the given figure is somehow associated with the surrounding one’s position. The upside-down spade is used to the left of a right-side-up heart every time._!_http://3.bp.blogspot.com/-jf2fVZmXoi8/Ux3Ng-YmToI/AAAAAAAAA8s/txkTnTIF64c/s1600/reversed-spade.jpg'
			},
			{
				title: 'Math Picture Brain Teaser',
				text: 'In the photo attached with this question, you have to place the numbers from 1 to 19 in the circles such that if we add up any side of the triangle, the sum is 17._!_http://3.bp.blogspot.com/-dP3ArNMwtHQ/Ux3P2OJABCI/AAAAAAAAA9U/rCaoXZIRkt8/s1600/nine-numbers-riddle.jpg',
				
				answer: 'http://3.bp.blogspot.com/-ZBQsty1Q3TY/Ux3P1bK3xcI/AAAAAAAAA9M/1zeuzZfGmV4/s1600/nine-numbers-riddle-answer.jpg'
			},
			{
				title: 'Photo Riddle Brain Teaser',
				text: 'In the given picture, there is a fly in the wine glass depicted by the sticks. You have to remove the fly from the glass. You can move only two sticks. Also, you can’t touch the fly._!_http://1.bp.blogspot.com/-NsLKjs7ZyGo/Uv_VIxgdr7I/AAAAAAAAA0Q/p7bwcX9_UDU/s1600/fly-in-wine-glass-riddle.jpg',
				
				answer: 'See the colored sticks in the picture. We have moved those sticks in the position given in the second image corresponding with the color._!_http://1.bp.blogspot.com/-BDn-O4Gdh0U/UwJTc8ZBrYI/AAAAAAAAJY0/jhSnPJQI_mM/s1600/Photo+Riddle+Brain+Teaser+Answer.jpg'
			},
			{
				title: 'Nice Count Matches Picture Riddle',
				text: 'Can you count the number of squares in a chess board ? This is an FAQ question asked in an IAS interview._!_http://1.bp.blogspot.com/-NsLKjs7ZyGo/Uv_VIxgdr7I/AAAAAAAAA0Q/p7bwcX9_UDU/s1600/fly-in-wine-glass-riddle.jpg',
				
				answer: 'See the colored sticks in the picture. We have moved those sticks in the position given in the second image corresponding with the color._!_http://1.bp.blogspot.com/-BDn-O4Gdh0U/UwJTc8ZBrYI/AAAAAAAAJY0/jhSnPJQI_mM/s1600/Photo+Riddle+Brain+Teaser+Answer.jpg'
			},
			{
				title: 'How many squares are there in the following figure?',
				text: 'http://2.bp.blogspot.com/-h60--KU1IGY/UWLhD48FB1I/AAAAAAAAGEk/6rHtrYJ1aFA/s1600/count+the+number+of+squares.jpg',
				
				answer: '40._!_http://2.bp.blogspot.com/-K_Z7DZwbUKY/UWLhErFzGyI/AAAAAAAAGEs/x_RzM9kfGwk/s1600/count-square-animation.gif'
			},
			{
				title: 'Easy Matchstick Brain Teaser',
				text: 'http://2.bp.blogspot.com/-h60--KU1IGY/UWLhD48FB1I/AAAAAAAAGEk/6rHtrYJ1aFA/s1600/count+the+number+of+squares.jpg',
				
				answer: '40._!_http://2.bp.blogspot.com/-K_Z7DZwbUKY/UWLhErFzGyI/AAAAAAAAGEs/x_RzM9kfGwk/s1600/count-square-animation.gif'
			},
			{
				title: 'Circles Counting Riddle',
				text: 'http://1.bp.blogspot.com/-QscCIa23Oxc/U5opNKNnQLI/AAAAAAAADNs/8zhpJpOWw4k/s1600/how-many-circles-can-you-see.jpg',
				
				answer: '17. Explanation: You can see the center circle right? There are 16 more circles. Probably you missed them. Just concentrate on the center circle for a moment and you will find the other 16 circles. Thus there are a total of 17 circles in the given picture.'
			},
			{
				title: 'Find The Missing Number',
				text: 'Can you find out the missing number in this image?_!_http://1.bp.blogspot.com/-qNuCRYRGTvU/U2-QV8syKjI/AAAAAAAAC6Q/wBwpSfqMyOA/s1600/find-the-missing-number-puzzle.jpg',
				
				answer: '0 or 16. Explanation: If you notice, then there is no pattern in this image between the numbers. The only thing is that the numbers are all jumbled up and continuous. Therefore, the missing number can either be 0 or 16.'
			},
			{
				title: 'Ias Exam Picture Question',
				text: 'Can you find out the image that shows the top view of the given pyramid?_!_http://4.bp.blogspot.com/-Z4S8G-Qrh3U/U2_edyJAPpI/AAAAAAAAC7M/Mmjsd6dqUAI/s1600/top-view-pyramid-puzzle.jpg',
				
				answer: 'C is the top view of the given pyramid.'
			},
			{
				title: 'Picture Brain Teaser',
				text: 'http://3.bp.blogspot.com/-ly-2H1hQIlQ/U2yW4AxuUUI/AAAAAAAAC5w/-vz55YdJrOA/s1600/find-three-squares-not-linked-with-others-puzzle.jpg',
				
				answer: 'Three squares - Square number 17, 19 and 23 are not linked with any other square.'
			},
			{
				title: 'Counting Image Brain Teaser',
				text: 'Watch carefully and count the number of pencils in the image below._!_http://4.bp.blogspot.com/-evJOXjqWh-w/Ux3UPjERHNI/AAAAAAAAA9k/Rn72UAmQe2E/s1600/hole-in-paper-puzzle.jpg',
				
				answer: '72(18*4)'
			},
			{
				title: 'Hole In Paper Brain Teaser',
				text: 'In the figure that is given in the question, there is a square piece of paper with a hole that is represented by the circle. Now, you have to make a cut in the paper such that it divides into two different pieces of paper. Please note that it must be only two pieces. But the cut should be made in a manner that if the cut pieces are rearranged, the hole comes in the center of the paper. How will you do it?_!_http://1.bp.blogspot.com/-PvH233m5TYI/U2TKDvgXt-I/AAAAAAAAKCA/ZjuxRtoewqo/s1600/Counting-Image-Brain-Teaser-With-Answer.jpg',
				
				answer: 'The first figure tells you where you have to make the cut in the paper. Now you have two pieces of paper. If you rotate the right piece to 180 degrees, you will get what is shown in the figure two. Now the hole is in the center of the paper._!_http://1.bp.blogspot.com/-wvHuFtBI_wo/Ux3UPMuxi-I/AAAAAAAAA9g/GrWk4MKLZf8/s1600/hole-in-paper-puzzle-solution.jpg'
			},
			{
				title: 'Online Spot The Difference Picture Puzzle',
				text: 'If you can find all the ten differences in the given pictures, you are a genius._!_http://4.bp.blogspot.com/-46ycZFMTtCU/UwJM_GfjwXI/AAAAAAAAJYU/E6k1h4IK7Xk/s1600/Spot-The-Difference-Photo-Riddles-For-Kids.jpg',
				
				answer: 'The ten difference are as follows:<br>1) The direction of the paper plane is changed.<br>2) The amount of white flowers is different.<br>3) There is one extra bird.<br>4) The shoes of the girl are plain white.<br>5) One snail is missing from the picture.<br>6) There is one extra butterfly.<br>7) One apple is missing from the picture.<br>8) Different number of dots of the bow of the girl.<br>9) There is one extra plant.<br>10) If you notice, an airplane is missing from the ground.'
			},
			{
				title: 'Picture Pattern Equation Problem',
				text: 'Solve the equation in the picture below by_!_http://3.bp.blogspot.com/-m4yjQm8k_80/UjSQgRJfAgI/AAAAAAAAHyI/WeYPtxmNPzU/s1600/Picture-Pattern-Equation-Probelm.jpg',
				
				answer: 'B. Sideways clockwise 1/4 turn.'
			},
			{
				title: 'Very Easy Number Sequence Puzzle',
				text: 'Solve the number sequence puzzle by replacing the question mark with the correct number?_!_http://4.bp.blogspot.com/-Kyi_a2YFmWI/UbNjly69uyI/AAAAAAAAGh8/My4eIhQUsrU/s1600/Very-Easy-Number-Sequence-Puzzle.jpg',
				
				answer: '5. (8+7) * 5 => 75'
			},
			{
				title: 'Maths grid puzzle for kids',
				text: 'Can you solve the maths puzzle by replace the question mark with the correct number?_!_http://1.bp.blogspot.com/-iIc00-BIgzY/UayrwRhz_FI/AAAAAAAAGeI/5VoMQaU2yyg/s1600/maths+grid+puzzle+for+kids.jpg',
				
				answer: '8'
			},
			{
				title: 'What number should replace the question mark',
				text: 'Which number replaces the question mark in the picture below?_!_http://4.bp.blogspot.com/-0cOJFsya-fU/UX-haFaUIBI/AAAAAAAAGOs/Vlaiqbf2Bow/s1600/What-number-should-replace-the-question-mark.jpg',
				
				answer: '4. 92 - 38 = 54. 5 is given and 4 is missing.'
			},
			{
				title: 'Which Number Replaces The Question Mark',
				text: 'Which number should replace the question mark in the picture below?_!_http://3.bp.blogspot.com/-E5hW9qZqp6U/UX-jA-SCECI/AAAAAAAAGPE/1sFN-aJpwjU/s1600/Which-Number-Replaces-The-Question-Mark.jpg',
				
				answer: '4. 6*3 equals 18. 7*9 equals 63. 6*4 equals 24. 7*6 equals 42, ? should be replaced by 4.'
			}

		]

	};

}(window));