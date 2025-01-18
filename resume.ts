document.getElementById("form")?.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const PhoneNoElement = document.getElementById("PhoneNo") as HTMLInputElement;
  const addressElement = document.getElementById("address") as HTMLInputElement;
  const summaryElement = document.getElementById("summary") as HTMLInputElement;
  const educationElement = document.getElementById(
    "education"
  ) as HTMLInputElement;
  const experienceElement = document.getElementById(
    "experience"
  ) as HTMLInputElement;
  const skillsElement = document.getElementById("skills") as HTMLInputElement;
  if (
    nameElement &&
    emailElement &&
    PhoneNoElement &&
    addressElement &&
    educationElement &&
    experienceElement &&
    skillsElement
  ) {
    const name = nameElement.value;
    const email = emailElement.value;
    const PhoneNo = PhoneNoElement.value;
    const address = addressElement.value;
    const summary = summaryElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

    const resumeOutput = `
            <h1>Resume</h1>
            <div id="generatedResume">
            <table>
            <tr>
            <td id="left_panel" rowspan="4">
            <h1 class="left_panel_element"><span contenteditable="true">${name}</span></h1>
            <p class="left_panel_element"><span contenteditable="true">${summary}</span></P>
            <h2 class="left_panel_element">Personal Information</h1>
            <ul class="left_panel_element">
            <li>
            <p><b>Email:</b><span contenteditable="true">${email}</span></p></li>
            <li>
            <p><b>Address:</b><span contenteditable="true">${address}</span></p>
            </li>
            <li>
            <p><b>Phone No:</b><span contenteditable="true">${PhoneNo}</span></p>
            </li>
            </ul>
            </td>


            
            <td>
            <h3 class="right_panel">Education:</h3>
            <pre class="format-input"><span contenteditable="true">${education}</span></pre>
            </td>
            </tr>

             <tr>
             <td>
            <h3 class="right_panel">Experience:</h3>
            <pre class="format-input"><span contenteditable="true">${experience}</span></pre>
            </td>
            </tr>
            
            <tr>
            <td>
            <h3 class="right_panel">Skills:</h3>
            <pre class="format-input"><span contenteditable="true">${skills}</span></pre>
            </td>
            </tr>
            </table>
            </div>
            `;
    const resumeOutPutElement = document.getElementById(`resumeOutput`);
    if (resumeOutPutElement) {
      resumeOutPutElement.innerHTML = resumeOutput;
    } else {
      console.error(`The Resume OutPut elements are missing`);
    }
  } else {
    console.log(`One or more output elements are missing`);
  }
});
