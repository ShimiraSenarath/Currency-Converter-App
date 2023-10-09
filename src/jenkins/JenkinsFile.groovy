

pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    environment {
        GIT_REPOSITORY_USERNAME = 'true'
        GIT_REPOSITORY = ''
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run') {
            steps {
                sh 'npm start'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test start'
            }
        }
        
    }
}