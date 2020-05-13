import Semesterplan from "gatsby-theme-timetable/src/ics";

console.log("-- start ics generation --");
let ics = new Semesterplan();
ics.addTeachers("./src/data/IAD2019/teachers.yaml");
ics.add("./src/data/IAD2019/semester2019HS.yaml");
ics.add("./src/data/IAD2019/semester2020FS.yaml");
ics.add("./src/data/IAD2019/semester2020HS.yaml");
ics.ics("./public/IAD.ics");
console.log("-- end ics generation --");
