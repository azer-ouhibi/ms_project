FROM openjdk:8
EXPOSE 8082
ADD /target/RapportMS-0.0.1-SNAPSHOT.jar RapportMS.jar
ENTRYPOINT ["java", "-jar", "RapportMS.jar"]