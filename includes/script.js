const bubbleContainer = document.querySelector('.bubble-container');
const numBubbles = 70;
const numberImages = 40;

const imagePaths = [];
for(let j = 0; j < numberImages; j++){
    imagePaths[j] = 'includes/imgs/img' + (j+1) + '.jpg';
}

for (let i = 0; i < numBubbles; i++) {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubbleContainer.appendChild(bubble);

  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  const randomBottom = Math.random() * window.innerHeight;
  const randomSize = Math.random() * 50 + 50;

  bubble.style.left = `${randomX}px`;
  bubble.style.top = `${randomY}px`;
  bubble.style.bottom = `${randomBottom}px`;
  bubble.style.width = `${randomSize}px`;
  bubble.style.height = `${randomSize}px`;

  if (i < imagePaths.length) {
    const img = document.createElement('img');
    img.src = imagePaths[i];
    bubble.appendChild(img);
  }
}

function showMessage(){
    var message = document.getElementById('message');
    var displaySetting = message.style.display;
    var messageButton = document.getElementById('showMessage');

    if(displaySetting == 'flex'){
        message.style.display = 'none';
        messageButton.style.content = '&#9679';
        messageButton.style.animation = '';
    }else{
        message.style.display = 'flex';
        messageButton.style.animation = 'animateButton 1s ease-in-out infinite';
    }
}

var sendEmailButtonYes = document.getElementById('send-email-yes');
var messageElement = document.getElementById('messageResponse');
sendEmailButtonYes.addEventListener('click', function(){
    var emailBody = 'It\'s a yes! I am officially your Valentine.';
    location.href = 'mailto:bobadilla.markallen49@gmail.com?subject=YES&body=' + encodeURIComponent(emailBody);
    messageElement.textContent = 'Thank you for saying yes! ^^';
    messageElement.style.display = 'block';
});
var sendEmailButtonNo = document.getElementById('send-email-no');
sendEmailButtonNo.addEventListener('click', function(){
    var emailBody = 'It\'s a no! I am sorry, I need more time.';
    location.href = 'mailto:bobadilla.markallen49@gmail.com?subject=NO&body=' + encodeURIComponent(emailBody);
    messageElement.textContent = 'Thank you for being honest. I\'m willing to wait :>';
    messageElement.style.display = 'block';
});

document.getElementById('showMessage').addEventListener('click', function() {
    const audio = document.getElementById('playSong');
    audio.play();
});