document.addEventListener("DOMContentLoaded", () => {
  const infoButton = document.querySelector("#more-info");
  if (infoButton) {
    infoButton.addEventListener("click", () => {
      alert("Minecraft is a sandbox game focused on exploring, building and surviving in a block-based world.");
    });
  }

  const tipButton = document.querySelector("#tip-button");
  if (tipButton) {
    tipButton.addEventListener("click", () => {
      const tips = [
        "Gather basic materials before travelling far from your starting area.",
        "Keep track of your route so you can find your base again.",
        "Store useful resources in clearly labelled chests.",
        "Explore carefully and prepare for the environment you are entering."
      ];
      const chosenTip = tips[Math.floor(Math.random() * tips.length)];
      document.querySelector("#random-tip").textContent = chosenTip;
    });
  }
});
