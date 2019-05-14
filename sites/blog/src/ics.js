import Semesterplan from "gatsby-theme-timetable/src/ics";

console.log("-- start ics generation --");
let ics = new Semesterplan();
ics.addTeachers("./src/data/IAD2019/teachers.yaml");
ics.add("./src/data/IAD2019/semester2017HS.yaml");
ics.add("./src/data/IAD2019/semester2018FS.yaml");
ics.add("./src/data/IAD2019/semester2018HS.yaml");
ics.add("./src/data/IAD2019/semester2019FS.yaml");
ics.ics("./public/IAD.ics");
console.log("-- end ics generation --");
