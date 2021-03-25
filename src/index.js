import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, createStore, compose } from 'redux';
import {rootReducer} from './reducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';





// создаем стор - хранилище
// редюсер - получает экшны
// инишиал стэйт - начальное состояние

// что делает редюсер
// что делает dispatch
// для чего нужны action creators (actions.js)
// в каких случаях action creators возвращает не объект, а функцию
// что в экшне означает type
// что в экшене означает payload
// как работае switch в редюсере
// что в свиче означает default
// опишите параметры в createStore
// для чего нужен Provider в приложении, где его применяют
// как работает хук useRef


// с помощью хука useref получить данные из input[text]
// при нажатии на кнопку вывести в консоль

// https://learn.javascript.ru/generator прочитать
// и сделать, чтобы при нажатии на кнопку, цвет менялся с черного на красный и с красного на черный

const store = createStore(rootReducer,  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ));


// higher order component

ReactDOM.render(

    <Provider store={store}>
      <App />
    </Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
