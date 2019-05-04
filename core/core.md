# reviiew
## filters
```
    {{data | my(params1,params2,params3)}}
    filters: {
        my(data,params1,params2,params3){

        }
    }
```

## computed计算属性，不是方法
- 方法不会有缓存，computd会根据依赖（归vue管理的数据，可以响应式变化）的属性进行缓存
- 两部分组成，get和set(不能只写set) 一般情况下，通过js赋值影响其他人或者表单元素设置值的时候会调用set方法