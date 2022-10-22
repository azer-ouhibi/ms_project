FROM openjdk:8
EXPOSE 8089
ADD /target/devis-0.0.1-SNAPSHOT.jar devis.jar
ENTRYPOINT ["java", "-jar", "devis.jar"]


