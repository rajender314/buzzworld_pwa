pipeline {
    agent any

    environment {
        COMMITDATE = ""
    }

    stages {
        stage('setup') {
            steps {
                notifyBuild('STARTED')
                script {
                    COMMITDATE = sh(returnStdout: true, script: "git show -s --format=%ci ${GIT_COMMIT}")
                }
                echo "${COMMITDATE}"
                sh script: 'git rev-parse --abbrev-ref HEAD'
                echo env.GIT_BRANCH
            }
        }

        stage('Stage-Build') {
            when {

                expression { env.GIT_BRANCH == 'origin/master' }

            }
            steps {
                sh 'npm install'
             //   sh 'npm run build'
            }
        }

        stage('Stage-Deploy') {
    when {

        expression { env.GIT_BRANCH == 'origin/master' }

    }
    steps {
        sshagent(['ccf6d521-7384-4ec2-82ff-635c59cfe5d4']) {
            sh "scp -o StrictHostKeyChecking=no -r ${WORKSPACE}/* enterpi@192.168.1.167:/var/www/html/pwa/"
            sh "ssh -o StrictHostKeyChecking=no enterpi@192.168.1.167 'sh /var/www/html/pwa/StagePostDeploymentScript.sh'"
        }
    }
}

}

    post {
        always {
            notifyBuild(currentBuild.currentResult)
            deleteDir()
        }
    }
}

def notifyBuild(String buildStatus = 'STARTED') {
    // Default values
    def colorName = 'RED'
    def colorCode = '#FF0000'
    def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
    def summary = "${subject} (${env.BUILD_URL})"
    def details = """<p>STARTED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]':</p>
    <p>Check console output at &QUOT;<a href='${env.BUILD_URL}'>${env.JOB_NAME} [${env.BUILD_NUMBER}]</a>&QUOT;</p>"""

    // Override default values based on build status
    if (buildStatus == 'STARTED') {
        colorName = 'YELLOW'
        colorCode = '#FFFF00'
        summary = "@here Build <${env.BUILD_URL}|${currentBuild.displayName}> - ${env.JOB_NAME} " + "successfully started "
    } else if (buildStatus == 'SUCCESS') {
        colorName = 'GREEN'
        colorCode = '#00FF00'
        summary = "@here Build <${env.BUILD_URL}|${currentBuild.displayName}> - ${env.JOB_NAME}" + " successfuly built & passed the quality gate verification and deployed to server :thumbsup: "
    } else {
        colorName = 'RED'
        colorCode = '#FF0000'
        summary = "@here Build <${env.BUILD_URL}|${currentBuild.displayName}> - ${env.JOB_NAME}" + " Is unsuccessful due to unable to pass the quality gate inspection :scream: or syntax error or unable to reach the remote server :thumbsdown: "
    }

    // Send notifications
    slackSend(color: colorCode, message: summary)
}
