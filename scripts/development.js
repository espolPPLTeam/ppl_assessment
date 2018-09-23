let shell = require('shelljs')
let instalador = 'npm run'
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git')
  shell.exit(1)
}

if (shell.which('yarn')) {
  instalador = 'yarn'
}

// API
shell.cd('api')
shell.exec(`${instalador} install`)
shell.cd('..')

// att
shell.cd('att')
shell.exec(`${instalador} install`)
shell.cd('client')
shell.cd('estudiantes')
shell.exec(`${instalador} install`)
shell.cd('..')
shell.cd('profesores')
shell.exec(`${instalador} install`)
shell.cd('../../..')

// login
shell.cd('login')
shell.exec(`${instalador} install`)
shell.cd('client/login')
shell.exec(`${instalador} install`)
shell.cd('../..')
