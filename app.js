document.addEventListener('DOMContentLoaded', () => {
   let inputValue = document.querySelector('.input');
   let keyboardButtons = document.querySelectorAll('.keyboard-btn');
   let capsButton = document.querySelector('.caps');
   const changeBgButton = document.querySelector('.change-bg');


   const keyboardButtonAnimUp = (e) => {
      let target = e.target;
      if (target.closest('img')) {
         let parent = target.closest('img').parentNode;
         parent.style.left = '0px';
         parent.style.top = '0px';
         parent.style.boxShadow = '5px 5px 3px -2px rgba(0,0,0,0.67)';
      }
      if (target.classList.contains('keyboard-btn')) {
         target.style.left = '0px';
         target.style.top = '0px';
         target.style.boxShadow = '5px 5px 3px -2px rgba(0,0,0,0.67)';
      }
   }
   const keyboardButtonAnimDown = (e) => {
      let target = e.target;
      if (target.closest('img')) {
         let parent = target.closest('img').parentNode;
         parent.style.left = '1px';
         parent.style.top = '1px';
         parent.style.boxShadow = '2px 2px 3px -1px rgba(0,0,0,0.67)';
      }
      if (target.classList.contains('keyboard-btn')) {
         target.style.left = '1px';
         target.style.top = '1px';
         target.style.boxShadow = '2px 2px 3px -1px rgba(0,0,0,0.67)';
      }

   }

   const keyboardButtonPress = (e) => {
      let buttonText = e.target.innerText;
      let target = e.target;
      let inputArray = inputValue.value.split('');
      const modal = document.querySelector('.modal');
      const modalTextMessage = document.querySelector('.message-text');

      if (target.classList.contains('enter')) {
         
         if(inputValue.value == '') {
            alert('write message')
         }
         else {
            modal.classList.add('active');
            modalTextMessage.innerText = inputValue.value;
            window.addEventListener('click', (e) => {
               if (e.target.classList.contains('modal')) {
                  modal.classList.remove('active');
               }
            })
            setTimeout(() => {
               modal.classList.remove('active');
            }, 10000);
         }
         
      }


      if (inputArray[0] === ' ') return inputValue.value = '';

      if (target.classList.contains('space-btn') || target.closest('.space-btn')) {
         inputValue.value += ' ';
      }

      if (target.classList.contains('backspace') || target.closest('.backspace')) {
         inputArray.pop();
         inputValue.value = inputArray.join('');
      }
      if (!target.classList.contains('enter') && !target.classList.contains('caps')) {
         inputValue.value += buttonText;
      }
   }

   let num = 0;
   const imageArray = ['img/wp-3.jpg', 'img/wp-1.jpg', '#602faf'];
   const keyboard = document.querySelector('.keyboard');

   changeBgButton.addEventListener('click', () => {

      if (num == imageArray.length) {
         num = 0;
      }
      // keyboard.style.background = `url(${imageArray[num]}) 0 0/100% auto no-repeat;`
      keyboard.style.backgroundImage = `url(${imageArray[num]})`;
      keyboard.style.backgroundPosition = `0 0`;
      keyboard.style.backgroundRepeat = `no-repeat`;
      keyboard.style.backgroundSize = `100% auto`;

      changeBgButton.style.backgroundImage = `url(${imageArray[num]})`;
      changeBgButton.style.backgroundPosition = `0 0`;
      changeBgButton.style.backgroundRepeat = `no-repeat`;
      changeBgButton.style.backgroundSize = `105% 105%`;
      num++;
      
   })

   capsButton.addEventListener('click', (e) => {
      let circle = document.querySelector('.caps-circle');
      circle.classList.toggle('caps-circle-active')
      keyboardButtons.forEach(item => {
         if (!item.classList.contains('enter') && !item.classList.contains('caps') && !item.classList.contains('change-bg')) {
            item.classList.toggle('upperCase');
            console.log(1);
         }
      })

   })
   keyboardButtons.forEach(item => {
      item.addEventListener('click', keyboardButtonPress);
      item.addEventListener('mousedown', keyboardButtonAnimDown);
      item.addEventListener('mouseup', keyboardButtonAnimUp);
   })




})