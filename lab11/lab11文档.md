1.The function of COOKIE & SESSION：
 追踪浏览器用户身份的会话方式，可以保存用户的信息，在下次访问同一网站的时候，可以自动填写一些基本信息。
2.The advantage&disadvantage of COOKIE&SESSION:
COOKIE:
   Advantage:可以控制cookie的生命期。
 Disadvantage:数量和长度有限制，每个不能超过4kb。数据保存在客户端，安全性较低。
SESSION:
   Advantage:数据保存在服务器端，安全性更高。可以在多个web页传递一个变量。
 Disadvantage:session会在一定时间内保存在服务器上，当访问增多时，服务器可能无法正常运行。过度使用session变量将会导致代码不可读且不好维护。