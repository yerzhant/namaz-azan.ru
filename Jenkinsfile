pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'ssh azan_kz@kvs02 "cd; sh deploy-azan.ru-namaz.sh"'
            }
        }
        stage('Production') {
            steps {
                sh 'ssh azan_kz@kvs01 "cd; sh deploy-azan.ru-namaz.sh"'
            }
        }
    }
    post {
        failure {
            mail to: 'yerzhan.tulepov@gmail.com',
                 subject: "Pipeline failed: ${currentBuild.fullDisplayName}",
                 body: "Build with ${env.BUILD_URL} failed."
        }
        unstable {
            mail to: 'yerzhan.tulepov@gmail.com',
                 subject: "Pipeline unstable: ${currentBuild.fullDisplayName}",
                 body: "Build with ${env.BUILD_URL} unstable."
        }
    }
}
