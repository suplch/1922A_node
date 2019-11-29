const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
// 连接 school数据库
mongoose.connect('mongodb://localhost/school',  { useUnifiedTopology: true, useNewUrlParser: true });

const StudentSchema = mongoose.Schema({ // 定义学生数据结构模型
    name: String,  // 学生姓名
    age: Number,   // 学生年龄
    score: Number, // 成绩
    class_id: {    // 学生是属于某个班
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }
});

const ClassSchema = mongoose.Schema({  // 定义 班级数据结构模型
    name: String  // 班级名称
});

const TeacherClassSchema = mongoose.Schema({   // 老师 带班 数据结构模型
    teacher_id: {    // 老师 id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher'
    },
    class_id: {      // 班级 id
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class'
    }
});

const TeacherSchema = mongoose.Schema({  // 定义 老师 数据结构模型
    name: String,
    age: Number,
});

const Student = mongoose.model('Student', StudentSchema);
const Class = mongoose.model('Class', ClassSchema);
const Teacher = mongoose.model('Teacher', TeacherSchema);
const TeacherClass = mongoose.model('TeacherClass', TeacherClassSchema);

async function findStudent() {
    const students = await Student.find().populate('class_id').exec();
    for (let student of students) {
        const teacher_class_relations = await TeacherClass.find({class_id: student.class_id._id}).populate('teacher_id').exec();
        let teacher_names = [];
        for (let tcr of teacher_class_relations) {
            teacher_names.push(tcr.teacher_id.name);
        }

        console.log('-----------------------------------------------------------');
        console.log(`  ${student.name} 同学 在 ${student.class_id.name} 学习`);
        console.log(`  教过他的老师 有 ${teacher_names.join(' , ')}`);
        console.log('-----------------------------------------------------------');
        console.log();
    }
}

findStudent().then(function () {
    mongoose.connection.close();
});

