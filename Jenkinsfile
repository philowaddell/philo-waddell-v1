pipeline {
  agent {
    docker {
      args '-p 8000:8000'
      image 'node:17'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm ci'
        sh 'npm run build'
      }
    }

  }
}
