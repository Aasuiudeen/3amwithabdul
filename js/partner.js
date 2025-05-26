const myths = [
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
  {
    mythsItems: "Job Hunting",
  },
];
const mythContainer = document.querySelector(".myth-item-container");

const record = [
  {
    stepsNo: "Step 1",
    stepName: "Step Name",
    stepText:
      "Get in touch with our Sales and support team to get your questions answered Get in touch with our Sales and support team to get your questions answered.",
  },
  {
    stepsNo: "Step 2",
    stepName: "Step Name",
    stepText:
      "Get in touch with our Sales and support team to get your questions answered Get in touch with our Sales and support team to get your questions answered.",
  },
  {
    stepsNo: "Step 3",
    stepName: "Step Name",
    stepText:
      "Get in touch with our Sales and support team to get your questions answered Get in touch with our Sales and support team to get your questions answered.",
  },
];
function getMyths(getMythsItems) {
  const eachMyths = getMythsItems.map(function (item) {
    return `<div class="myths-item1">
                 <h3>${item.mythsItems}</h3>
                </div>`;
  });
  newEachMyths = eachMyths.join("");
  mythContainer.innerHTML = newEachMyths;
}

window.addEventListener("DOMContentLoaded", function () {
  getMyths(myths);
});

const recordContainer = document.querySelector(".record-mmax-container");

function getRecord(getRecordItems) {
  const eachRecord = getRecordItems.map(function (item) {
    return `<div class="record-container">
            <div class="circle-dashed-line-container">
                <div class="grey-circle"></div>
                <div class="record-dashed-line"></div>   
            </div> 
            <div class="record-item-text">
                <h4>${item.stepsNo}</h4>
                <h3>${item.stepName}</h3>
                <p> ${item.stepText} </p>
            </div>
            
        </div>`;
  });
  newRecord = eachRecord.join("");
  recordContainer.innerHTML = newRecord;
}

window.addEventListener("DOMContentLoaded", function () {
  getRecord(record);
});
