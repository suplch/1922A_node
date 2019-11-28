### mongodb 环境配置安装
> 在`Mongodb`官网下载最新版本的[Mongodb下载地址](https://cloud.mongodb.com/)
> 
> 下载`msi`的`window`安装包，可以装到C盘或者D盘目录下
> 
> # 配置
> ```shell
> D:\Program Files (x86)\MongoDB\Server\3.2\bin
> ```
> 
> 所以在bin文件夹下找到mongod.exe命令，然后通过管理员执行`mongod --dbpath x路径x`，路径可以是任何地方，我这里选择在D盘的MongoDB目录下，当然路径不要包含特殊的字符串，比如`Program Files (x86)`也不行
> 
> ```shell
> mongod --dbpath D:\mongodb\data\db
> ```
> 
> ![image](https://user-images.githubusercontent.com/17243165/31977540-fc0a5a6e-b96f-11e7-9a2b-34d66d7241c4.png)
> 
> # 命令行
> 经过上面的配置之后，就可以返回bin目录下找到`mongo.exe`命令，并管理员下执行，就可以出现mongodb的命令行模式
> 
> ```shell
> D:\Program Files (x86)\MongoDB\Server\3.2\bin
> ```
> 
> ![image](https://user-images.githubusercontent.com/17243165/31978099-57bce3ca-b972-11e7-88bd-30f5d68036ed.png)
> 
> 然后就可以使用下面的命令来测试了
>
### mongod
> ```js
> db.help()//帮助
> db.stats()//统计
> ```
> 
> # 显示数据库
> ```
> show dbs
> ```
> 
> 检查当前选择的数据库
> 
> ```
> db
> ```
> 
> # 添加数据库
> **数据库名**为数据库创建的名字，使用该命令后会默认切换到对应的数据库，并且在数据库中添加选项，数据库信息才显示，如果默认就有该数据库，那就是切换到对应的数据库里面
> 
> ```
> use 数据库名
> ```
> 
> # 删除数据库
> 先切换到对应的数据库，然后再执行`db.dropDatabase()`删除该数据库
> 
> ```
> use 数据库名
> //switched to db 数据库名
> db.dropDatabase()
> ```
> 
> # 显示集合
> 用一下命令可以检查创建的集合
> 
> ```
> show collections
> ```
> 
> # 添加集合
> 在创建完数据库之后，我们就可以创建集合
> 
> ```
> db.createCollection(集合名字name，设置参数options[对象类型])
> ```
> 
> **name**是要创建的集合的名称。 **options**是一个文档，用于指定集合的配置
> 
> 参数 类型  描述
> name   String  要创建的集合的名称
> options    Document    (可选)指定有关内存大小和索引的选项
> **options**参数是可选的，因此只需要指定集合的名称。 以下是可以使用的选项列表：
> 
> 字段 类型  描述
> capped Boolean (可选)如果为true，则启用封闭的集合。上限集合是固定大小的集合，它在达到其最大大小时自动覆盖其最旧的条目。 如果指定true，则还需要指定size参数。
> autoIndexId    Boolean (可选)如果为true，则在_id字段上自动创建索引。默认值为false。
> size   数字  (可选)指定上限集合的最大大小(以字节为单位)。 如果capped为true，那么还需要指定此字段的值。
> max    数字  (可选)指定上限集合中允许的最大文档数。
> 由于**option**是可选，我们也可以不带配置项创建集合
> 
> ```js
> db.createCollection("mycollection")
> ```
> 
> # 删除集合
> `db.collection.drop()`用于从数据库中删除集合
> 
> ```js
> db.集合名.drop()
> ```
> 
> 比如我们可以测试以下操作
> 
> ```
> db.createCollection("wscats")//创建名为wscats的集合
> show collections//显示该数据库所有集合   wscats
> db.wscats.drop()//删除名为wscats的集合
> ```
> 
> # 查看文档
> 最简单查看文档的方法就是`find()`，会检索集合中所有的文档结果
> 
> ```js
> db.集合名.find()
> ```
> 
> 要以格式化的方式显示结果，可以使用`pretty()`方法。
> 
> ```js
> db.集合名.find().pretty()
> ```
> 
> ## 1.固值寻找
> 寻找age集合里面所有含有属性值为wscats的文档结果，相当于`where name = 'wscats'`
> 
> ```js
> db.age.find({name:"wscats"})
> ```
> 
> ## 2.范值寻找
- 操作 语法  示例  等效语句
- 相等 {:} `db.age.find({"name":"wscats"}).pretty()`   where name = 'wscats'
- 小于 {:{$lt:}}   `db.age.find({"likes":{$lt:50}}).pretty()`  where likes < 50
- 小于等于   {:{$lte:}}  `db.age.find({"likes":{$lte:50}}).pretty()` where likes <= 50
- 大于 {:{$gt:}}   `db.age.find({"likes":{$gt:50}}).pretty()`  where likes > 50
- 大于等于   {:{$gte:}}  `db.age.find({"likes":{$gte:50}}).pretty()` where likes >= 50
- 不等于    {:{$ne:}}   `db.age.find({"likes":{$ne:50}}).pretty()`  where likes != 50
> ## 3.AND和OR寻找
> ### AND
> 在find()方法中，如果通过使用`，`将它们分开传递多个键，则mongodb将其视为**AND**条件。 以下是AND的基本语法
> 
> 寻找`_id`为1并且`name`为wscats的所有结果集
> 
> ```js
> db.age.find(
>    {
>       $and: [
>          {"_id": 1}, {"name": "wscats"}
>       ]
>    }
> )
> ```
> 
> ### OR
> 在要根据OR条件查询文档，需要使用`$or`关键字。以下是OR条件的基本语法
> 
> 寻找`name`为corrine或者`name`为wscats的所有结果集
> 
> ```js
> db.age.find(
>    {
>       $or: [
>          {"name": "corrine"}, {"name": "wscats"}
>       ]
>    }
> )
> ```
> 
> ### AND和OR等结合
> 相当于语句`where title = "wscats" OR ( title = "corrine" AND _id < 5)`
> 
> ```js
> db.age.find({
>   $or: [{
>     "title": "wscats"
>   }, {
>     $and: [{
>       "title": "corrine"
>     }, {
>       "_id": {
>         $lte: 5
>       }
>     }]
>   }]
> })
> ```
> 
> # 插入文档
> 文档的数据结构和JSON基本一样。
> 所有存储在集合中的数据都是BSON格式。
> BSON是一种类json的一种二进制形式的存储格式,简称**Binary JSON**。
> 
> 要将数据插入到mongodb集合中，需要使用mongodb的`insert()`或`save()`方法。
> 
> ```js
> db.集合名.insert(document)
> ```
> 
> 比如我们可以插入以下数据
> 
> ```js
> db.wscats.insert({
>    _id: 100,
>    title: 'MongoDB Tutorials', 
>    description: 'node_tutorials',
>    by: 'Oaoafly',
>    url: 'https://github.com/Wscats/node-tutorial',
>    tags: ['wscat','MongoDB', 'database', 'NoSQL','node'],
>    num: 100,
> })
> ```
> 
> 也可以支持插入多个，注意传入的是数组形式
> 
> ```
> db.wscats.insert([{
>    _id: 100,
>    title: ‘Hello’
> },{
>    _id: 101,
>    title: ‘World’
> }])
> ```
> 
> 在插入的文档中，如果不指定_id参数，那么mongodb会为此文档分配一个唯一的ObjectId
> 要插入文档，也可以使用`db.post.save(document)`。如果不在文档中指定_id，那么`save()`方法将与`insert()`方法一样自动分配ID的值。如果指定_id，则将以save()方法的形式替换包含**_id**的文档的全部数据。
> 
> ```js
> db.wscats.save({
>    _id: 111,
>    title: 'Oaoafly Wscats', 
> })
> ```
> 
> # 更新文档
> ## 1.update()方法
> 寻找第一条title为wscats的值，并且更新值title为corrine和age为12
> 
> ```js
> db.age.update({
>   'title': 'wscats'
> }, {
>   $set: {
>     'title': 'corrine',
>     'age': 12
>   }
> })
> ```
> 
> 默认情况下，mongodb只会更新一个文档。要更新多个文档，需要将参数`multi`设置为true，还可以配合find方法里面的各种复杂条件判断来筛选结果，然后更新多个文档
> 
> 寻找所有title为wscats的值，并且更新值title为corrine和age为12
> 
> ```js
> db.age.update({
>   'title': 'wscats'
> }, {
>   $set: {
>     'title': 'corrine',
>     'age': 12
>   }
> }, {
>   multi: true
> })
> ```
> 
> ## 2.save()方法
> 将`_id`主键为3的文档，覆盖新的值，注意`_id`为必传
> 
> ```
> db.age.save({
>   '_id':3,
>   'title': 'wscats'
> })
> ```
> # 删除文档
> 删除主键`_id`为3的文档，默认是删除多条
> 
> ```js
> db.age.remove({
>   '_id':3
> })
> ```
> 
> 建议在执行`remove()`函数前先执行`find()`命令来判断执行的条件是否正确
> 
> 如果你只想删除第一条找到的记录可以设置**justOne**为1，如下所示
> 
> ```js
> db.age.remove({...},1)
> ```
> 
> 全部删除
> 
> ```js
> db.age.remove({})
> ```
> 
> # Limit与Skip方法
> ## Limit
> 如果你需要在mongodb中读取指定数量的数据记录，可以使用mongodb的Limit方法，`limit()`方法接受一个数字参数，该参数指定从mongodb中读取的记录条数。
> 
> ```js
> db.age.find().limit(数量)
> ```
> 
> ## Skip
> 我们除了可以使用`limit()`方法来读取指定数量的数据外，还可以使用`skip()`方法来跳过指定数量的数据，skip方法同样接受一个数字参数作为跳过的记录条数。
> 
> ```js
> db.age.find().limit(数量).skip(数量)
> //skip()方法默认值为0
> ```
> 
> 所以我们在实现分页的时候就可以用limit来限制每页多少条数据(一般固定一个值)，用skip来决定显示第几页(一个有规律变动的值)
> 
> # 排序
> 在mongodb中使用使用`sort()`方法对数据进行排序，`sort()`方法可以通过参数指定排序的字段，并使用1和-1来指定排序的方式，其中1为升序排列，而-1是用于降序排列。
> 
> 1  升序排列
> -1 降序排列
> ```
> db.集合名.find().sort({键值(属性值):1})
> ```
> 
> 把`age`集合表重新根据`_id`主键进行降序排列
> 
> ```js
> db.age.find().sort({
>   "_id": -1
> })
> ```
> 
> # Node.js连接
> 安装mongodb的模块
> 
> ```
> npm install mongodb
> ```
> 
> ## 1.连接数据库
> ```js
> var MongoClient = require('mongodb').MongoClient;
> //结尾是选择数据库名
> var DB_CONN_STR = 'mongodb://localhost:27017/wscats';
> MongoClient.connect(DB_CONN_STR, function(err, db) {
>   console.log("连接成功！");
> });
> ```
> 
> ## 2.查询数据
> 注意查询回来的结果需要toArray来遍历处理
> 
> ```js
> var MongoClient = require('mongodb').MongoClient;
> var DB_CONN_STR = 'mongodb://localhost:27017/wscats';
> 
> MongoClient.connect(DB_CONN_STR, function(err, db) {
>   console.log("连接成功！");
>   //选中age集合，并用find方法把结果集拿回来进行处理
>   db.collection("age").find({title: "cba"}).toArray(function(err, result) {
>     if (err) {
>       console.log('Error:' + err);
>       return;
>     }
>     console.log(result);
>   });
> });
> ```
> 
> 经过测试，读取大于100条的时候会出现报错[官网解释](https://docs.mongodb.com/manual/tutorial/iterate-a-cursor/#cursor-batches)，可以尝试用`forEach`代替
> 
> ```js
> db.collection('pokemon').find({})
>   .forEach(function(item){
>       console.log(item)
>   })
> ```
> 
> ### 查询ID
> 查询自动生成的`ObjectId`
> 
> ```js
> var ObjectId = require('mongodb').ObjectId;
> let _id = ObjectId("5bcae50ed1f2c2f5e4e1a76a");
> db.collection('xxx').find({
>     "_id": _id
> }).forEach(function (item) {
>     console.log(item)
> })
> ```
> 
> ## 3.插入数据
> insert函数第一个参数是需要插入的值(可以一个也可以多个)，第二个参数是接受一个回调函数，当值插入成功后回返回插入值得一些关键信息，比如`_id`
> 
> ```
> var MongoClient = require('mongodb').MongoClient;
> var DB_CONN_STR = 'mongodb://localhost:27017/wscats';
> 
> MongoClient.connect(DB_CONN_STR, function(err, db) {
>   console.log("连接成功！");
>    const db = client.db("demo");
>   db.collection("age").insert([
>     { 
>       title: "插入的值A"
>     }, {
>       title: "插入的值B"
>     }
>   ], function(err, result) {
>     if (err) {
>       console.log('Error:' + err);
>       return;
>     }
>     console.log(result)
>   })
> });
> ```
> 
> ## 4.更新数据
> 注意如果不加$set就是完全替换原来的那份(没有设置的属性值将会丢失)，加上$set则只是更新对应的属性值，其余不做改变
> 
> ```js
> var MongoClient = require('mongodb').MongoClient;
> var DB_CONN_STR = 'mongodb://localhost:27017/wscats';
> 
> MongoClient.connect(DB_CONN_STR, function(err, db) {
>   console.log("连接成功！");
>   db.collection("age").update({
>     "_id": 1
>   }, {
>     $set: {
>       title: "你好，世界",
>       skill: "js"
>     }
>   }, function(err, result) {
>     if (err) {
>       console.log('Error:' + err);
>       return;
>     }
>     //console.log(result);
>   });
> });
> ```
> 
> ## 5.删除数据
> ```js
> var MongoClient = require('mongodb').MongoClient;
> var DB_CONN_STR = 'mongodb://localhost:27017/wscats';
> 
> MongoClient.connect(DB_CONN_STR, function(err, db) {
>   console.log("连接成功！");
>   db.collection("age").remove({
>     "_id": 1
>   }, function(err, result) {
>     if (err) {
>       console.log('Error:' + err);
>       return;
>     }
>     //console.log(result);
>     //关闭数据库
>     db.close();
>   });
> });
> ```
> 
> ## 6.关闭数据库
> ```js
> db.close();
> ```
> 
> # 封装自定义模块
> 新建`mongo.js`写入以下代码，封装自定义模块，方便其他路由复用，注意`assert`是node自带的断言模块，用于测试代码
> 
> 参考
> 
> * [官网API文档](http://nodejs.cn/api/assert.html)
> * [Node.js的断言模块assert进行单元测试](https://www.cnblogs.com/hong7zai/p/5909914.html)
> 
> ```js
> const MongoClient = require('mongodb').MongoClient;
> const assert = require('assert');
> const url = 'mongodb://localhost:27017';
> const dbName = 'shop';
> function query(callback) {
>    MongoClient.connect(url, function(err, client) {
>        assert.equal(null, err);
>        console.log("Connected successfully to server");
>        const db = client.db(dbName);
>        callback(db);
>        client.close();
>    });
> }
> module.exports = {
>    query
> }
> ```
> 
> 在路由文件中引入和使用
> 
> ```js
> var mongo = require('./mongo.js')
> router.post('/addproduct', function(req, res, next) {
>    mongo.query(function(db) {
>        db.collection("product").insertMany([req.body], function(err, result) {
>            console.log("Inserted 1 document into the collection");
>            res.send('respond with a resource');
>        });
>    })
> });
> ```
>

- 常用的服务器缓存数据库 redis
- 单元测试
## 自动化测试 mocha
Mocha('摩卡')，诞生于2011年，现在比较流行的JavaSscript测试框架之一,可以运行于Node环境和浏览器环境
 
测试框架:可以运行测试的工具。通过他，可以为JavaScript应用 添加测试,从而保证代码质量
> 参考文档
[mochajs](https://mochajs.org/)
[mocha中文文档](https://segmentfault.com/a/1190000011362879)
### 安装配置
 
使用npm 全局安装
 
``` 
$ npm install --global mocha
```
 
项目依赖 局部安装 
 
```
$ npm isntall mocha
```

