// Use Javascript to hold multiple sections of one course


const aCourse = {
    name: "Creative Writing", 
    code: "WDD131", sections: [
        {sectionNum: 1, roomNum: "SMI 231", enrolled: 13, days: "TTh", instructor: "Brother Griffin"},
        {sectionNum: 2, roomNum: "SMI 243", enrolled: 22, days: "MWF", instructor: "Sister Bird"},
    ],


        // sectionNum represents the section the user wants to add students to
        // find that section in array and add student to it

    // enrollStudent: function(sectionNum) {
    //     this.sections.forEach(function(section) {
    //         if(section.sectionNum == sectionNum) {
    //             section.enrolled++;
    //             renderSections(this.sections);
    //             return;
    //         }

    //     })
    // }}

enrollStudent: function(sectionNum) {
    this.sections.forEach(section => {
        if (section.sectionNum == sectionNum) {
            section.enrolled++;
        }
    });

    renderSections(this.sections);
}
}

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
          

