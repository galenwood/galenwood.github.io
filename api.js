document.addEventListener('DOMContentLoaded', () =>{
    const dog_btn = document.querySelector('#btn');
    const dogRandomImg = document.querySelector('div');

    dog_btn.addEventListener('click', getRandomDog)

    function getRandomDog() {
        fetch('https://random.dog/woof.json')
            .then(res => res.json())
            .then(data => {
                if(data.url.includes('.mp4')) {
                    getRandomDog();
                }
                else {
                    dogRandomImg.innerHTML = `<img src=${data.url} alt="dog" />`;
                }
            });
    }
});