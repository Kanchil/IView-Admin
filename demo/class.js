/**
 * 功能说明：es6类语法学习
 * Copyright Kanchil Technology (Tianjin) Co., Ltd.
 * 修订记录：
 * @Date 2018/2/28 9:57
 */
//定义类
let person = new class {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}('张三');

person.sayName();
