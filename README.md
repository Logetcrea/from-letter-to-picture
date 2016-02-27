#Steel-Ant, Input/Output, P5.js

-

###[from letter to picture](http://logetcrea.github.io/from-letter-to-picture/index.html)

---

######about

In this project I am trying to translate the different layout types of letters to artificial coded  pictures.  
I created this project in 2015 as part part of the course [*"Steel Ant - Input/Output"*](https://github.com/FH-Potsdam/steel-ant-input-output) at the **University of Applied Science** in Potsdam (Germany).  
We dealed with the topic *generative design* and became acquainted with [P5.js](http://p5js.org/) supported by Fabian Morón Zirfas [fabiantheblind](https://github.com/fabiantheblind) and also influenced by [Mey Lean Kronemann](http://meyleankronemann.de/).

-
 

######first analog algorithm

I asked people to follow these steps:  

	- take a white DIN-A4 paper
	- paint with your finger a crescent on the lower half of the paper
	with its opening to the top of the paper with a color of your desire
	- write a letter, the date in red, the addressee in blue and the sender in green;
	the rest with a pen, but use instead of words and numbers irregular wavy lines
and I got results like these:

<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/1.version/4.JPG" width="19%"  />
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/1.version/7.JPG" width="19%"  />
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/1.version/2.JPG" width="19%"  />
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/1.version/10.JPG" width="19%" />
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/1.version/8.JPG" width="19%" />

-

######second analog algorithm

I asked people to follow these steps:  

	- take a white DIN-A4 paper
	- paint with a wax crayon in turquoise on the lower half of the paper
	a non-filled rectangle (2:1)
	- fill with turquoise if you're happy the lower half,
	if you're unhappy the upper half of this rectangle;
	if you're neither happy nor unhappy, draw a filled rectangle
	centered in the non-filled rectangle with the same width, but only the half height
	- if you're either happy or unhappy, draw two filled triangle
	starting each in an empty edge of the non-filled rectangle
	to the filled rectangle in 45° and then to closest side of the non-filled rectangle
	- write a letter above these forms, but draw instead of the date a darkgreen filled
	rectangle, instead of the addressee a lightblue non-filled rectangle,
	instead of the sender a darkblue non-filled rectangle,
	write the rest of the letter in lightgreen, but use instead of words straight lines
	- draw in each blue rectangle an filled ellipse with the color of your iris
and I got results like these:

<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/2.version/2.png" width="19%"  />
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/2.version/4.png" width="19%"  />
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/2.version/1.png" width="19%"  />
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/2.version/3.png" width="19%"  />
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/2.version/7.png" width="19%"  />


-

######digital algorithm process

I started simple and drew just static forms, with different probabilities of their position:

<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/digital-process/img (1).png" width="19%"  />
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/digital-process/img (2).png" width="19%"  />  

then I decided to let these forms rotating around their own center and flowing over a black paper:

<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/digital-process/img (2) Kopie.png" width="19%" />
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/digital-process/img (5).png" width="19%" />

I deleted the filling to get the forms lighter and changed the color and the opacity:

<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/digital-process/img (6).png" width="19%" />
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/digital-process/img (7).png" width="19%" />  

I decided to change the format to square and again the background to white:

<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/digital-process/img (25).png" width="19%"  height="25%"/>
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/digital-process/img (26).png" width="19%"  height="25%"/>

In the next steps I changed some values of the range and the rotation of the rectangles, refined the color choice and set the .js file to no background but wrote into the .html a black one. So if you safe via clicking "s" a generated picture, you'll get only the drawn picture as .png file.

-

######digital algorithm

The three rectangles symbolize the areas of the date, green, addressee, blue,  and the sender, violet.  
The startpositions of these rectangles depend on the probability for being there in normal kinds of letter layouts.  
The different movements symbolize the many different kinds of writing a letter.  

[algorithm](http://logetcrea.github.io/from-letter-to-picture/index.html)

-

######implementation

There are a lot opportunities to use my algorithm.  

use as carpet:  
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/implementations/carpet.png" width="100%" />

use as lamp:  
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/implementations/carpet, lamp.png" width="100%" />  

use as pool floor:  
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/implementations/pool-floor.png" width="100%" />  

use as post card to pick up the main idea of a letter:  
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/implementations/post-card.JPG" width="49.5%" />
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/implementations/postcard.png" width="49.5%" /> 
  

My personal favorite is to transfer the picure into 3D. The different colors are different platforms with different lights and fountains if you use as fountain-light-installation:  
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/implementations/fountain up.png" width="100%" />
<img src="https://raw.githubusercontent.com/logetcrea/from-letter-to-picture/master/screenshots/implementations/fountain.png" width="100%" />  

-

###### License


**©** 2015 Paul Klinski "logetcrea", University of Applied Sciences Potsdam (Germany).  
Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

see also [Apache License](http://choosealicense.com/licenses/apache-2.0/)
