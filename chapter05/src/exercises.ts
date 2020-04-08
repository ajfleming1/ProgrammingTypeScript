// 1. What is the differences between and class and an interface?
/* An interface defines a shape and provides no implementation. A class can implement and interface. Multiple inferfaces can be inheritited by a class, but only one class can be intherited by another class. Iterfaces are mostly equivilent to types except that interfaces cannot be used on the right side of expressions. Classes generate JavaScript code and interfaces do not. Classes can use access modifiers and interfaces cannot. */

// 2. When you mark a class's constructor as private, that means you cannot instantiate or extend the class. What happens when you mark it was protected instead?

/* Constuctor of class Dog is protected and only accessiable within the class defintion. No classes can be newed with a protected constructor. */

// 3
type Shoe = {
  purpose: string;
}

class BalletFlat implements Shoe {
  purpose = 'dancing';
}

class Boot implements Shoe {
  purpose = 'work'
}

class Sneaker implements Shoe {
  purpose = 'walking'
}

type ShoeCreator = {
  create(type: 'balletFlat'): BalletFlat
  create(type: 'boot'): Boot
  create(type: 'sneaker'): Sneaker
}

let Shoe: ShoeCreator = {
  create(type: 'balletFlat' | 'boot' | 'sneaker'): Shoe {
    switch(type){
      case 'balletFlat': return new BalletFlat();
      case 'boot': return new Boot();
      case 'sneaker': return new Sneaker();
    }
  }
}


let myShoe = Shoe.create('boot');

// 4
class RequestBuilder {
  protected url: string | null = null;
  protected method: 'get' | 'post' | null = null;
  protected data: Object | null = null

  setData(data: Object | null) {
    this.data = data;
    return this;
  }

  setMethod(method: 'get' | 'post' | null) {
    return new RequestBuilderWithMethod().setMethod(method).setData(this.data);
  }
}

class RequestBuilderWithMethod extends RequestBuilder {
  setMethod(method: 'get' | 'post' | null) {
    this.method = method;
    return this;
  }

  setUrl(url: string | null) {
    return new RequestWithUrlAndMethod().setMethod(this.method).setData(this.data).setUrl(url);
  }
}

class RequestWithUrlAndMethod extends RequestBuilder {
  setUrl(url: string | null) {
    this.url = url;
    return this;
  }

  send() {
    // Send
  }
}

new RequestBuilder()
  .setMethod('get')
  .setData({})
  .setUrl('foo.com')
  .send()


interface BuildableRequest {
  data?: Object;
  method: 'get' | 'post';
  url: string;
}

class RequestBuilder2 {
  data?: Object;
  method?: 'get' | 'post';
  url?: string;

  setData(data: object): this & Pick<BuildableRequest, 'data'> {
    return Object.assign(this, {data});
  }

  setMethod(method: 'get' | 'post'): this & Pick<BuildableRequest, 'method'> {
    return Object.assign(this, {method});
  }

  setUrl(url: string): this & Pick<BuildableRequest, 'url'> {
    return Object.assign(this, {url});
  }

  build(this: BuildableRequest) {
    return this;
  }
}

new RequestBuilder2()
  .setData({})
  .setMethod('post') // Try removing me!
  .setUrl('bar') // Try removing me!
  .build()
