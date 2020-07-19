// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderBadge(data.license)}

`;
}

module.exports = generateMarkdown;
