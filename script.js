document.addEventListener('DOMContentLoaded', () => {

    // Перша фітча
    document.querySelector('#submit').disabled = true;

    document.querySelector('#placeholder').onkeyup = () => {
        if (document.querySelector('#placeholder').value.length > 0) {
            document.querySelector('#submit').disabled = false;
        }
        else {
            document.querySelector('#submit').disabled = true;
        }
    }

    document.querySelector('.first-form').onsubmit = () => {
        const task = document.querySelector('#placeholder').value;
        console.log('#placeholder');

        const li = document.createElement('li');
        li.innerHTML = task;

        document.querySelector('#task').append(li);

        document.querySelector('#placeholder').value = '';
        document.querySelector('#submit').disabled = true;

        return false;

    }

    // Друга фітча
    const changeText = document.querySelector('#change-text');
    const btn = document.querySelector('.second');

    document.querySelectorAll('#button').forEach(btn => {
        btn.onclick = () => {
            changeText.style.color = btn.dataset.color;
        }
    });

    //Третя фітча
    const feedback1 = document.querySelector('#feedback1');
    const feedback2 = document.querySelector('#feedback2');
    const rightAnswer = document.querySelector('.correct');
    let wrongAnswers = document.querySelectorAll('#incorrect');

        rightAnswer.onclick = () => {
            rightAnswer.style.backgroundColor = 'green';
            feedback1.innerHTML = 'Correct!'; 
            document.querySelectorAll('#incorrect').forEach(wrongAnswers => {
                wrongAnswers.disabled = true;
            })
        };
    
        for (let i = 0; i < wrongAnswers.length; i++){
            wrongAnswers[i].addEventListener('click', function() {
                wrongAnswers[i].style.backgroundColor = 'red';
                feedback2.innerHTML = 'Incorrect!';
            })
        }


    // Четверта фітча
    let counter = 0;

    const count = document.querySelector('#count');
    const plusClick = document.querySelector('#plus');
    const minusClick = document.querySelector('#minus');
    const restart = document.querySelector('.counter-st');

    plusClick.onclick = () => {
        counter++;
        count.innerHTML = counter;
    }

    minusClick.onclick = () => {
        counter--;
        count.innerHTML = counter;
    }

    //Пята фітча

    document.querySelector('#colors').onchange = function() {
        document.querySelector('#color-text').style.color = this.value;
    }

    //Шоста фітча
    

    //Сьома фітча
    const textAnimation = document.querySelector('#animation-text');
    const buttonAnimation = document.querySelector('#ani-btn');
    textAnimation.style.animationPlayState = 'paused';

    document.querySelector('#ani-btn').onclick = () => {
        if(textAnimation.style.animationPlayState === 'paused'){
            textAnimation.style.animationPlayState ='running';
            buttonAnimation.innerHTML = 'Stop me';

        } else {
            textAnimation.style.animationPlayState = 'paused';
            buttonAnimation.innerHTML = 'Play me';
        }
    }
    
});