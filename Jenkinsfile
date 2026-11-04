
pipeline {
    agent any

    environment {
        IMAGE_NAME = 'jenkins-demo'
        CONTAINER_NAME = 'jenkins-demo-app'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Source code downloaded'
            }
        }

        stage('Testing') {
            steps {
                echo 'Running application tests'
                sh 'npm install'
                sh 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image'
                sh 'docker build -t jenkins-demo:latest .'
            }
        }

        stage('Deployment') {
            steps {
                echo 'Deploying application'
                sh '''
                    docker rm -f jenkins-demo-app || true
                    docker run -d \
                    --name jenkins-demo-app \
                    -p 3000:3000 \
                    jenkins-demo:latest
                '''
            }
        }
    }

    post {
        success {
            echo 'Application deployed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check Console Output.'
        }
    }
}
