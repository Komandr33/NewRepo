'use strict';

function pow(x, n) {
    let r = 1;
    for (let i = 0; i < n; i++) {
        r *= x;
    }
    return r;
}

function pow1(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow1(x, (n - 1));
    }
}

console.log(pow1(2, 4));

let students = {
    js: [{
        name: 'John',
        progress: 100
    },
    {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        },
        {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
}

function getTotalProgressByIteraion(data) {
    let total = 0;
    let students = 0;

    for (course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

console.log(getTotalProgressByIteraion(students));

