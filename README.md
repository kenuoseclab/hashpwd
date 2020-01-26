# 前端慢速加盐散列  

本库为[《数据安全架构设计与实战》](https://www.janusec.com/articles/books/1579693643.html)一书中推荐的身份认证实践：前端慢速加盐散列。这种方式不收集用户原始口令，在用户侧执行前端慢速加盐散列后再传输，好处主要有：  

* 可防止用户口令泄露（传输的是单向散列值，不可还原）。  
* 可防止撞库（原始口令无效，前端慢速加盐散列极大地提高了撞库门槛）。  

## 用法  

可直接下载 https://github.com/Janusec/hashpwd/blob/master/dist/hashpwd.js ，并在网页中引用：
```
 <script src="/path/to/hashpwd.js"></script>
```

该库提供了一个函数：
GetHashPwd(username, password)
返回慢速加盐散列后的值。

只需要在Form标签中添加一个onsubmit函数，在提交前将原始口令转换为慢速加盐散列值即可。

 ```
 <form name="loginForm" method="POST" onsubmit="loginForm.password.value=GetHashPwd(loginForm.username.value, loginForm.password.value)">
```
