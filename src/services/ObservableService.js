import { Observable } from 'rxjs'

const getNumbers = new Observable((subscriber) => {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
    setTimeout(() => {
        subscriber.next(4)
        subscriber.complete()
    }, 1000)
})

export default getNumbers