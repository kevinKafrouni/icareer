/* PL/SQL */

/*TRIGGER 1 : This trigger updates the status_change_date column in the job_applications table whenever the app_status_id is updated.*/

CREATE TRIGGER update_status_change_date
BEFORE UPDATE ON job_applications
FOR EACH ROW
BEGIN
    IF NEW.app_status_id != OLD.app_status_id THEN
        SET NEW.status_change_date = CURRENT_TIMESTAMP();
    END IF;
END;

/*TRIGGER 2 : This trigger ensures that when a job is deleted from the jobs table, associated records in the job_applications table are also deleted.*/

CREATE TRIGGER delete_associated_job_applications
AFTER DELETE ON jobs
FOR EACH ROW
BEGIN
    DELETE FROM job_applications WHERE job_id = OLD.job_id;
END;

/*PROCEDURE 1: This procedure fetches all jobs posted by a specific company. */

CREATE PROCEDURE getJobsByCompany(IN companyId INT)
BEGIN
    SELECT *
    FROM jobs
    WHERE company_id = companyId;
END;

/*Procedure 2 :This procedure updates a job application status and then retrieves and sends an email notification to the user associated with that application*/

CREATE PROCEDURE updateStatusAndNotify(IN appId INT, IN newStatusId INT)
BEGIN
    DECLARE userEmail VARCHAR(45);
    DECLARE emailSubject VARCHAR(100);
    DECLARE emailBody VARCHAR(1000);

    -- Update status in the job_applications table
    UPDATE job_applications
    SET app_status_id = newStatusId
    WHERE application_id = appId;

    -- Retrieve user email associated with the application
    SELECT u.email INTO userEmail
    FROM job_applications ja
    INNER JOIN user u ON ja.user_id = u.user_id
    WHERE ja.application_id = appId;

    -- Construct email content
    SET emailSubject = 'Job Application Status Update';
    SET emailBody = 'Your job application status has been updated.';

    -- Sending email notification using sys_exec (This is just an example, requires proper setup and permissions)
    IF userEmail IS NOT NULL THEN
        SET @cmd = CONCAT('echo "', emailBody, '" | mail -s "', emailSubject, '" ', userEmail);
        -- Execute the command to send the email
        CALL sys_exec(@cmd);
    END IF;
END;


/*CREATION OF THE TABLES */
CREATE TABLE `application_status` (
  `app_status_id` int NOT NULL AUTO_INCREMENT,
  `app_status_name` varchar(45) NOT NULL,
  PRIMARY KEY (`app_status_id`),
  UNIQUE KEY `app_status_id_UNIQUE` (`app_status_id`)
) INSERT INTO `application_status` VALUES (1,'new application'),(2,'under review'),(3,'interviewing'),(4,'offer sent'),(5,'rejected');
CREATE TABLE `company` (
  `company_id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(120) DEFAULT NULL,
  `company_description` varchar(300) DEFAULT NULL,
  `company_logo` varchar(150) DEFAULT NULL,
  `register_day` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `email` varchar(80) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  `location_id` int NOT NULL,
  PRIMARY KEY (`company_id`),
  UNIQUE KEY `company_id_UNIQUE` (`company_id`),
  KEY `location_id_idx` (`location_id`)
)
CREATE TABLE `industries` (
  `industry_id` int NOT NULL AUTO_INCREMENT,
  `industry_name` varchar(45) DEFAULT NULL,
  `industry_description` varchar(500) DEFAULT NULL,
  `industry_img` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`industry_id`),
  UNIQUE KEY `industry_id_UNIQUE` (`industry_id`)
)
CREATE TABLE `job_applications` (
  `application_id` int NOT NULL AUTO_INCREMENT,
  `application_day` date DEFAULT NULL,
  `user_id` int NOT NULL,
  `job_id` int NOT NULL,
  `app_status_id` int NOT NULL,
  `status_change_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`application_id`),
  UNIQUE KEY `application_id_UNIQUE` (`application_id`),
  KEY `job_id_idx` (`job_id`),
  KEY `user_id_idx` (`user_id`),
  KEY `app_status_id_idx` (`app_status_id`),
  CONSTRAINT `app_status_id` FOREIGN KEY (`app_status_id`) REFERENCES `application_status` (`app_status_id`),
  CONSTRAINT `job_id` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`job_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) 
CREATE TABLE `job_type` (
  `job_type_id` int NOT NULL AUTO_INCREMENT,
  `job_type_name` varchar(45) NOT NULL,
  PRIMARY KEY (`job_type_id`),
  UNIQUE KEY `job_type_id_UNIQUE` (`job_type_id`)
)
CREATE TABLE `jobs` (
  `job_id` int NOT NULL AUTO_INCREMENT,
  `job_title` varchar(45) NOT NULL,
  `job_description` varchar(1000) DEFAULT NULL,
  `job_posted_date` date DEFAULT NULL,
  `job_close_date` date DEFAULT NULL,
  `min_salary` double DEFAULT NULL,
  `max_salary` double DEFAULT NULL,
  `company_id` int NOT NULL,
  `spec_id` int NOT NULL,
  `job_type_id` int NOT NULL,
  PRIMARY KEY (`job_id`),
  UNIQUE KEY `job_id_UNIQUE` (`job_id`),
  UNIQUE KEY `avoiddup` (`job_title`,`job_posted_date`,`max_salary`,`min_salary`),
  KEY `company_id_idx` (`company_id`),
  KEY `spec_id_idx` (`spec_id`),
  KEY `job_type_id_idx` (`job_type_id`),
  CONSTRAINT `company_id` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`),
  CONSTRAINT `spec_id` FOREIGN KEY (`spec_id`) REFERENCES `specialization` (`spec_id`)
)
CREATE TABLE `learning_path` (
  `path_id` int NOT NULL AUTO_INCREMENT,
  `path_name` varchar(45) NOT NULL,
  `path_description` varchar(200) DEFAULT NULL,
  `spec_id` int NOT NULL,
  PRIMARY KEY (`path_id`),
  UNIQUE KEY `path_id_UNIQUE` (`path_id`),
  KEY `spec_id_idx` (`spec_id`)
) 
CREATE TABLE `location` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `location_name` varchar(45) NOT NULL,
  PRIMARY KEY (`location_id`),
  UNIQUE KEY `location_id_UNIQUE` (`location_id`)
)
CREATE TABLE `path_skills` (
  `path_id` int NOT NULL,
  `skill_id` int NOT NULL,
  PRIMARY KEY (`path_id`,`skill_id`),
  KEY `skill_id` (`skill_id`),
  CONSTRAINT `path_skills_ibfk_1` FOREIGN KEY (`path_id`) REFERENCES `learning_path` (`path_id`),
  CONSTRAINT `path_skills_ibfk_2` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`skill_id`)
)
CREATE TABLE `skills` (
  `skill_id` int NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(45) NOT NULL,
  `skill_description` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`skill_id`),
  UNIQUE KEY `skill_id_UNIQUE` (`skill_id`)
)
CREATE TABLE `specialization` (
  `spec_id` int NOT NULL AUTO_INCREMENT,
  `spec_name` varchar(45) NOT NULL,
  `spec_description` varchar(500) DEFAULT NULL,
  `spec_image` varchar(100) DEFAULT NULL,
  `industry_id` int NOT NULL,
  PRIMARY KEY (`spec_id`),
  UNIQUE KEY `spec_id_UNIQUE` (`spec_id`),
  KEY `industry_id_idx` (`industry_id`),
  CONSTRAINT `industry_id` FOREIGN KEY (`industry_id`) REFERENCES `industries` (`industry_id`)
) 
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `birthday` date DEFAULT NULL,
  `pdf_cv` varchar(100) DEFAULT NULL,
  `location_id` int DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  KEY `location_id_idx` (`location_id`),
  CONSTRAINT `location_id` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`)
) 