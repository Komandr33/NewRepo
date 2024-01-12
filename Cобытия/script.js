'use strict'

/* "Всплытие событий" - это срабатывание обработчика сначала на самом вложенном эл-те,
а после по иерархии вверх (currentTarget позволяет увидеть это всплытие)*/

const btn = document.querySelector('button'),
    btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay'),
    link = document.querySelector('a');


// btn.onclick = function () { // Первое событие
//     alert('Click');
// };

// btn.onclick = function () {  // Второе событие
//     alert('second click');   // при такой записи сработает только второе событие,
// };                           // первое перезатрётся

btn.addEventListener('click', () => {  // срабатывает при клике
    alert('Click');
});

btn.addEventListener('click', () => {  // при такой записи отработат все события
    alert('Second click');
});

btn.addEventListener('mouseover', (e) => { // 'mouseover' и 'mouseenter' срабатывает при наведении курсора 
    // console.log(e);          // (e) в колбеке означает event(событие), передаётся первым аргументом и получает
    console.log('Hover');       // данные об используемом елементе (например координаты или target)
    // console.log(e.target);   //  target - эл-т на котором произошло событие
});

let i = 0;
const delElem = (e) => {
    console.log(e.target);     // как пример действия с элементом с помощью арг. 'e'
    console.log(e.type);       // как пример действия с элементом с помощью арг. 'e'
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', delElem);   // удаляю обработчик события
    // }
}


// btn.addEventListener('click', delElem);     // назначаю обработчик события
// overlay.addEventListener('click', delElem);

// Чтобы назначит обработчик событий нескольким одинаковым элемента используем forEach

btns.forEach((btn) => {
    btn.addEventListener('click', delElem, { once: true }); // здесь, 3й арг.(необяз-й объект) - опции события //-> once: означает, что действие выполнится только один раз(вместо условия 'if') если 'true', бработчик автоматически удаляется при вызове
});

link.addEventListener('click', (e) => {
    e.preventDefault(); // отменяет стандартное поведение браузера с элементом если это возможно
    console.log(e.target);
});




//----------------------------

import ReactDOM from 'react-dom'

export const VideoBlock = () => {
    return <div>
        <VideoHeader />
        <VideoContent />
        <VideoStatistics />
    </div>
}
export const VideoHeader = () => {
    return <div>
        😀 Заголовок видео
    </div>
}
export const VideoContent = () => {
    return <div>
        📼 Контент видео
    </div>
}
export const VideoStatistics = () => {
    return <div>
        📊 Статистика лайков
    </div>
}

ReactDOM.render(<div>
    <VideoHeader />
    <VideoContent />
    <VideoStatistics />
</div>,
    document.getElementById('root')
);

//Что нужно написать вместо ххх, чтобы на экране увидеть:
//😀 Заголовок видео
//📼 Контент видео
//📊 Статистика лайков
// ❗ Ответ дать минимально возможным объёмом кода

//----------------------------

type PropsType = {
    city: string        // 'minsk'
    country: string     // 'belarus'
    coords?: string     // '53.917501,27.604851'
}

export const Wrapper1 = () => {
    // return <PropsComponent1 city='minsk' country={'belarus'} coords={'53.917501,27.604851'} />
}

export const PropsComponent1: React.FC<PropsType> = (props) => {
    return <div>hello</div>
}

// Что МИНИМАЛЬНО ДОСТАТОЧНО нужно дописать в строке 8 (cтрока с ошибкой), чтобы не было ошибки

//---------------------------------------------------------

import ReactDOM from 'react-dom'

export const VideoHeader = (props: { videoName: string }) => {
    return <div>
        😀 {props.videoName}
    </div>
}
export const VideoContent = (props: { videoContent: string }) => {
    return <div>
        📼 <a href={props.videoContent}>{props.videoContent}</a>
    </div>
}
export const VideoDescription = (props: { videoDescription: string }) => {
    return <div>
        📑 {props.videoDescription}
    </div>
}

export const YoutubeVideo = (props: any) => {
    return <div>
        {/* <VideoHeader videoName={'Samurai way'} /> 
      <VideoContent videoContent={'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8'} />
      <VideoDescription videoDescription={'Best free react-course'} /> */}
    </div>
}

export const App = () => {
    const video = {
        title: 'Samurai way',
        link: 'https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8',
        description: 'Best free react-course'
    }

    return <YoutubeVideo video={video} />
}

ReactDOM.render(<App />,
    document.getElementById('root')
);

  //Что нужно написать вместо xxx yyy zzz, чтобы увидеть ожидаемый результат?
  // Ответ дайте через пробел, пример: a={12} ccc={video.id} d={'hello'}


