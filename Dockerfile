FROM openjdk:8
EXPOSE 8082
ADD /target/Candidate5Twin3Semaine3-0.0.1-SNAPSHOT.jar Candidate5Twin3Semaine3.jar
ENTRYPOINT ["java", "-jar", "Candidate5Twin3Semaine3.jar"]


