pipeline {
  agent {
    docker {
      args '-p 8000:8000'
      image 'node:17-alpine'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'sudo npm install -g gatsby-cli'
        sh 'gatsby build'
      }
    }

  }
}
