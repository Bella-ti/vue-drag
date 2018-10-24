# vue-init

> Vue 实现多窗口同时拖拽组件

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

修改z-index

1. DragBox.vue中,给每个Drags.vue都设置一个active属性,继而来控制每个Drags是不是焦点窗口。且在DragBox.vue中设置一个activeIndex变量,使用这一个变量传给子组件Drags.vue
2. 当点击到一个Drags窗口时，先将每个窗口的active，设置为 false,再将activeIndex,重新赋值一次。再根据click时事件拿到的index,设置对应的active为true
2. 在Drags.vue中，通过判断是不是焦点窗口，来重新计算每一个窗口的z-index值。是焦点窗口,z-index : activeIndex +1; 不是焦点窗口,z-index: activeIndex - 1.

还需修改问题
2.窗口个数限制时，大于限制个数则清除旧数据，修改位置，替换新数据，即可
