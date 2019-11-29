const class_list = [
    {
        name: 'H5_1910',
        students: [
            {name: '张三', sex: '男', age: 21, score: 80},
            {name: '李四', sex: '男', age: 25, score: 70},
            {name: '王五', sex: '男', age: 19, score: 82},
            {name: '赵六', sex: '男', age: 22, score: 100},
        ]
    },
    {
        name: 'UI_1909',
        students: [
            {name: '小杜', sex: '男', age: 20, score: 97},
            {name: '小张', sex: '男', age: 21, score: 92},
            {name: '小芳', sex: '女', age: 21, score: 72},
            {name: '小燕', sex: '女', age: 26, score: 100},
            {name: '小刘', sex: '男', age: 23, score: 100},
        ]
    },
    {
        name: 'JAVA_1908',
        students: [
            {name: '大杜', sex: '男', age: 22, score: 97},
            {name: '大张', sex: '男', age: 29, score: 92},
            {name: '大刘', sex: '男', age: 25, score: 87},
            {name: '大芳', sex: '女', age: 21, score: 100},
            {name: '大燕', sex: '女', age: 18, score: 68},
        ]
    },
    {
        name: 'Python_1907',
        students: [
            {name: '杜同学', sex: '男', age: 22, score: 97},
            {name: '张同学', sex: '男', age: 29, score: 92},
            {name: '芳同学', sex: '女', age: 21, score: 100},
            {name: '刘同学', sex: '男', age: 25, score: 87},
            {name: '燕同学', sex: '女', age: 18, score: 68},
        ]
    },
];

const teacher_list = [
    {name: '张老师'},
    {name: '李老师'},
    {name: '赵老师'},
];

const teacher_classes = [
    {t: 0, c: 0},
    {t: 0, c: 1},
    {t: 1, c: 1},
    {t: 1, c: 3},
    {t: 2, c: 1},
    {t: 2, c: 2},
    {t: 2, c: 3},
];

const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect('mongodb://localhost/school',  { useUnifiedTopology: true, useNewUrlParser: true });

const StudentSchema = mongoose.Schema({
    name: String,  // 学生姓名
    age: Number,   // 学生年龄
    score: Number, // 成绩
    class_id: {    // 学生是属于某个班
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }
});

const ClassSchema = mongoose.Schema({
    name: String   // 班级名称
});

const TeacherClassSchema = mongoose.Schema({
    teacher_id: {       // 老师  外键
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    class_id: {         // 班级 外键
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }
});

const TeacherSchema = mongoose.Schema({
    name: String,    // 老师名字
    age: Number,     // 年龄
});

const Student = mongoose.model('Student', StudentSchema);
const Class = mongoose.model('Class', ClassSchema);
const Teacher = mongoose.model('Teacher', TeacherSchema);
const TeacherClass = mongoose.model('TeacherClass', TeacherClassSchema);

async function initData() {
    await TeacherClass.deleteMany().exec();  // 删除 老师 班级 关系 表
    await Class.deleteMany().exec();         // 删除 学生表
    await Teacher.deleteMany().exec();       // 删除 老师表
    await Student.deleteMany().exec();       // 删除 学生表

    let class_record_list = [];
    for (let a_class of class_list) {
        // 创建班级记录
        const class_record = await Class.create({name: a_class.name});
        class_record_list.push(class_record);

        for (let student of a_class.students) {
            // 创建 学生记录   class_id 外键 关联 新创建的 班级 id
            const student_record = await Student.create({...student, class_id: class_record._id});
        }
    }

    let teacher_record_list = [];
    for (let teacher of teacher_list) {
        // 创建 老师 数据
        const teacher_record = await Teacher.create(teacher);
        teacher_record_list.push(teacher_record);
    }

    for (let t_c of teacher_classes) {
        // 创建 老师 班级 关联数据
        await TeacherClass.create({
            teacher_id: teacher_record_list[t_c.t]._id,
            class_id: class_record_list[t_c.c]._id
        });
    }
    mongoose.connection.close();
}

initData().then(function () {
    console.log('数据初始化')
});
