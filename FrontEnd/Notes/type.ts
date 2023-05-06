function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.enumerable = value;
    };
  }
  
  class MiClase {
    @enumerable(false)
    get prop1() { return 10; }
  
    @enumerable(true)
    get prop2() { return 20; }
  }
  
  const newInstance =  new MiClase()
    console.log(  newInstance.prop1)
    console.log(  newInstance.prop2)
