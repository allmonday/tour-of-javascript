
在首次登陆的时候, 发生了 infinite digest 的情况, 发现需要这么修改 otherwise
具体原因不明, 待理解.

```javascript
// origin
$urlRouterProvider.otherwise("/account/login");

// fixed
$urlRouterProvider.otherwise( function($injector, $location) {
    var $state = $injector.get("$state");
    $state.go("app.home");
});
```
