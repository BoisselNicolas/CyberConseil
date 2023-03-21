print('Start #################################################################');

db = db.getSiblingDB('cyberconseil');
db.createUser(
  {
    user: 'api_user',
    pwd: 'api1234',
    roles: [{ role: 'readWrite', db: 'cyberconseil' }],
  },
);
db.createCollection('questions');

print('END #################################################################');