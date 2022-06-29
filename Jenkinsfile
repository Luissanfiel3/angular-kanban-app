pipeline {
    agent any
    
    tools {
        nodejs '18.4.0'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
      stage('Deploy') { 
            steps {
                sh 'npm run build' 
            }
        }
    }
}
