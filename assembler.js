const fs = require('fs');
const path = require('path');

function assembleVector(manifestPath) {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  console.log(`Assembling Vector for Constellation: ${manifest.constellation_name}`);
  
  const activeRepos = manifest.repositories.filter(r => r.status === "active");
  return {
    vector_id: `v5_${Date.now()}`,
    repos_included: activeRepos.map(r => r.name),
    count: activeRepos.length
  };
}

module.exports = { assembleVector };
