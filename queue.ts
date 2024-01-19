type QNode<T> = {
  value: T
  next?: QNode<T>
}

class Queue<T>{
  private head?: QNode<T>
  private tail?: QNode<T>
  private length = 0

  constructor(){}
  
  enqueue(val: T):void {
    const current = { value: val } as QNode<T>
    const oldTail = this.tail
    this.length++
    if ( this.length === 1 ){
      this.head = current
      return
    }
    this.tail = current
    if( this.length === 2 ){
      this.head!.next = current
      return
    }
    oldTail!.next = this.tail
  }

  deque(): T | undefined{
    if(!this.length){
      return undefined
    }
    this.length--
    const current = this.head!
    this.head = current.next
    return current.value
  }
  
  peek():T | undefined{
    if(this.length) {
      return this.head!.value
    } else return undefined
  }
}

const q = new Queue<string>()

q.enqueue('5')
q.enqueue(' ')

q.enqueue('  ')
q.enqueue('daf ')
q.deque()
q.deque()
console.log(q.deque())



console.log(q.deque()?.slice())

