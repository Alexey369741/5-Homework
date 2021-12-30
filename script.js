const students = [
    {
      id: 10,
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
      id: 11,
      name: 'John Doe',
      marks: [ 9, 8, 7, 6, 7 ]
    },
    {
      id: 12,
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8 ]
    },
    {
      id: 13,
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9 ]
    }
  ];

  function averageStudentMark(id) {
    const student = students.find((student) => student.id === id);

    if(student) {
        const avr = student.marks.reduce((acc,mark) => acc + mark) / student.marks.length;

        return avr;
    }
}

function averageGroupMark(students) {
    const marks = students.reduce((acc, student) => acc.concat(student.marks), []);
    const avr = marks.reduce((acc,mark) => acc + mark) / marks.length;

    return avr;
}

console.log(averageStudentMark(10));
console.log(averageGroupMark(students));