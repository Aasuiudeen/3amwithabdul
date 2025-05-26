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

// function getMyths(newMyths) {
//   const eachMyths = newMyths.map(function (item) {
//     return `<div class="myths-item1">
//                     <h3>${item.mythsItems}</h3>
//                 </div>`;
//   });
//   newEachMyths = eachMyths.join("");
//   mythContainer.innerHTML = newEachMyths;
// }

// function getoldEpisodes(oldepisodesItems) {
//   const newOldEpisodes = oldepisodesItems.map(function (item) {
//     return `<div class="myths-item1">
// //                     <h3>${item.mythsItems}</h3>
// //                 </div>`;
//   });
//   newdisplayEpisode = newOldEpisodes.join("");
//   oldEpisode.innerHTML = newdisplayEpisode;
// }

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
