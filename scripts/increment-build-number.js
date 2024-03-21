const fs = require('fs');
const shell = require('shelljs');

const environmentFilePath = './src/environments/environment.prod.ts';

try {
  // Read the environment file
  let content = fs.readFileSync(environmentFilePath, 'utf8');

  // Match and increment the buildNumber value
  content = content.replace(/(buildNumber:\s+')(.*?)(')/, (match, p1, p2) => {
    const incrementedBuildNumber = (parseFloat(p2) + 0.1).toFixed(1);
    return `${p1}${incrementedBuildNumber}${p3}`;
  });

  // Write the updated content back to the file
  fs.writeFileSync(environmentFilePath, content, 'utf8');

  console.log('Build number incremented successfully.');
} catch (error) {
  console.error('Error occurred while incrementing build number:', error);
  process.exit(1);
}
