document.addEventListener("DOMContentLoaded", function () {
    const noBtn = document.getElementById("no-btn");
    const yesBtn = document.getElementById("yes-btn");
    let noClickCount = 0;
  
    noBtn.addEventListener("click", function () {
      noClickCount++;
      if (noClickCount === 1) {
        noBtn.innerText = "Are you sure? 😢";
      } else if (noClickCount === 2) {
        noBtn.innerText = "Really sure? 🥺";
      } else if (noClickCount === 3) {
        noBtn.innerText = "Think again! 😭";
      } else {
        // Gradually shrink the "No" button
        const newFontSize = Math.max(10, 20 - noClickCount * 2);
        noBtn.style.fontSize = newFontSize + "px";
        noBtn.style.padding = Math.max(5, 15 - noClickCount) + "px";
        noBtn.innerText = "Please? 💔";
        if (noClickCount > 5) {
          noBtn.style.display = "none";
        }
      }
      // Gradually enlarge the "Yes" button
      const currentFontSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
      yesBtn.style.fontSize = (currentFontSize + 5) + "px";
      const currentPadding = parseInt(window.getComputedStyle(yesBtn).padding);
      yesBtn.style.padding = (currentPadding + 5) + "px";
    });
  
    yesBtn.addEventListener("click", function () {
      document.body.innerHTML = `
        <div class="container">
          <h1>Yay! Best Valentine Ever! ❤️🥰</h1>
          <!-- Celebration Cute Penguin GIF courtesy of Giphy: https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGtyeHVmeXRlNTNwcmRrMHNld2xlNThianozNXVnd3BzdHo3cGFhNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wUe3S90MkV9e4MSAAg/giphy.gif -->
          <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGtyeHVmeXRlNTNwcmRrMHNld2xlNThianozNXVnd3BzdHo3cGFhNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wUe3S90MkV9e4MSAAg/giphy.gif" alt="Celebration Penguin" class="penguin-gif">
          <h2>Love you, Palak! 😘</h2>
        </div>`;
    });
  
    // Function to create dancing hearts in the background
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      // Randomize size between 20px and 40px for better visibility
      const size = Math.random() * 20 + 20;
      heart.style.setProperty("--heart-size", size + "px");
      heart.style.width = size + "px";
      heart.style.height = size + "px";
      // Random horizontal position
      heart.style.left = Math.random() * window.innerWidth + "px";
      // Random animation duration between 3s and 6s
      const duration = Math.random() * 3 + 3;
      heart.style.animationDuration = duration + "s";
      // Random opacity between 0.5 and 1
      heart.style.opacity = Math.random() * 0.5 + 0.5;
      
      document.querySelector(".background-hearts").appendChild(heart);
  
      // Remove the heart after the animation completes
      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    }
  
    // Create a new heart every 300 milliseconds
    setInterval(createHeart, 300);
  });
  