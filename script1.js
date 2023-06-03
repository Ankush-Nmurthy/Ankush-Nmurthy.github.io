const githubUsername = "YOUR_GITHUB_USERNAME";
const apiUrl = `https://api.github.com/users/${githubUsername}/repos?per_page=100`;

console.log("hello")
function fetchContributionsData() {
  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const contributionsData = data.reduce((accumulator, repo) => accumulator + repo.stargazers_count, 0);
      console.log(data)
      return contributionsData;
    })
    .catch(error => {
      console.error("Error fetching GitHub contributions:", error);
    });
}

function displayContributionsGraph(contributionsData) {
  const githubContributions = document.getElementById("github-contributions");
  
  for (let i = 0; i < contributionsData; i++) {
    const rect = document.createElement("div");
    rect.className = "contribution-rect";
    
    // Add custom styles to the contribution rectangle
    // For example, you can set the background color based on contribution intensity
    
    githubContributions.appendChild(rect);
  }
}

fetchContributionsData()
  .then(contributionsData => {
    displayContributionsGraph(contributionsData);
  });
