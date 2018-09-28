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
shell.cd('..')

// login
shell.cd('login')
shell.exec(`${instalador} install`)
shell.cd('..')

// front clientes

// att
shell.cd('front_apps/att/estudiantes')
shell.exec(`${instalador} install`)
shell.cd('..')
shell.cd('profesores')
shell.exec(`${instalador} install`)
shell.cd('../../..')

// assessment
shell.cd('assessment/estudiantes')
shell.exec(`${instalador} install`)
shell.cd('..')
shell.cd('profesores')
shell.exec(`${instalador} install`)
shell.cd('../..')

// admin

// login
shell.cd('login')
shell.exec(`${instalador} install`)