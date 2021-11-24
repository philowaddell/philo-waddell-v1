pipeline {
  agent {
    docker {
      args '-u root -p 8000:8000'
      image 'node:17-alpine'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install -g gatsby-cli'
        sh 'gatsby build'
      }
    }

  }
}
