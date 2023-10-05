pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                echo 'Testing app...'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
            }
        }
        stage('Deploy on Test') {
            steps {
               echo 'Deploying on Test'
            }
        }
        stage('Deploy on Prod') {
            steps {
                echo 'Deploying on prod'
                sh '''
                '''
            }
        }
    }
}
