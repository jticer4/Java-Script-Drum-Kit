function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);//select the audio element by the corresponding key code
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);//select div elements with the key class by the corresponding key code
	if(!audio) return; //stop the function from running if theres no audio file associated with that key
	audio.currentTime = 0; //rewinds the audio file to allow users to play the same sound in succession
	audio.play();//plays the audio file that corresponds to that key
	key.classList.add('playing');
}

//removes the transition effect on each key after it has been pressed
function removeTransition(e) {
	if(e.propertyName !== 'transform') return; //if the transition class hasn't been added then don't run the function
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');//sets keys equal to all elements with the key class
keys.forEach(key => key.addEventListener('transitionend', removeTransition));//loops through the elements with the transition applied and runs the removeTransition function
window.addEventListener('keydown', playSound);