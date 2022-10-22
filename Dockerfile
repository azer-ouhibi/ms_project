FROM openjdk:8
EXPOSE 8088
ADD /target/demoReclamation-1.0.jar demoReclamation-1.0.jar
ENTRYPOINT ["bash", "-jar", "demoReclamation-1.0.jar"]