import todoSaga from './components/Todo/redux/saga';

// import all sagas in here
// importe todos sagas aqui

export default function * IndexSagas () {
  yield [
    todoSaga()
  ]
}