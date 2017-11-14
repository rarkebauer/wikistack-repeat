const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: true
});

// const Project = sequelize.define('project', {
//   title: Sequelize.STRING,
//   description: Sequelize.TEXT
// })

// const Task = sequelize.define('task', {
//   title: Sequelize.STRING,
//   description: Sequelize.TEXT,
//   deadline: Sequelize.DATE
// })

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  urlTitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

var User = db.define('user', {
  name: {
      type: Sequelize.STRING
  },
  email: {
      type: Sequelize.STRING
  }
});


module.exports = {
  Page: Page,
  User: User
}
