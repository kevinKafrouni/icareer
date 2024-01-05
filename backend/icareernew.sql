-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: icareer
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `application_status`
--

DROP TABLE IF EXISTS `application_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `application_status` (
  `app_status_id` int NOT NULL AUTO_INCREMENT,
  `app_status_name` varchar(45) NOT NULL,
  PRIMARY KEY (`app_status_id`),
  UNIQUE KEY `app_status_id_UNIQUE` (`app_status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `application_status`
--

LOCK TABLES `application_status` WRITE;
/*!40000 ALTER TABLE `application_status` DISABLE KEYS */;
INSERT INTO `application_status` VALUES (1,'new application'),(2,'under review'),(3,'interviewing'),(4,'offer sent'),(5,'rejected');
/*!40000 ALTER TABLE `application_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'bluestack','','https://cdn-www.bluestacks.com/bs-images/BS5_img1.png','2023-12-22 13:24:21','kafrouni90@gmail.com','123456','71919437',2),(2,'Google','','https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png','2023-12-27 17:15:32','google@gmail.com','123456','111111111',2),(3,'Microsoft','','https://s3-symbol-logo.tradingview.com/microsoft--600.png','2024-01-05 11:34:14','microsoft@gmail.com','654321','111-222-333',1);
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `industries`
--

DROP TABLE IF EXISTS `industries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `industries` (
  `industry_id` int NOT NULL AUTO_INCREMENT,
  `industry_name` varchar(45) DEFAULT NULL,
  `industry_description` varchar(500) DEFAULT NULL,
  `industry_img` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`industry_id`),
  UNIQUE KEY `industry_id_UNIQUE` (`industry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `industries`
--

LOCK TABLES `industries` WRITE;
/*!40000 ALTER TABLE `industries` DISABLE KEYS */;
INSERT INTO `industries` VALUES (1,'Technology','Technology encompasses companies involved in the creation and development of innovative products, services, and solutions in various fields like software, hardware, telecommunications, and more.','https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703116800&semt=sph'),(2,'Healthcare','The healthcare industry includes organizations and professionals focused on providing medical services, treatments, and products to promote health and well-being.','https://t3.ftcdn.net/jpg/02/78/98/56/360_F_278985629_SwYPS2BfkqYYGINcg0gB3KG7gQuRvAIE.jpg'),(3,'Finance','The finance industry involves activities related to managing money, investments, banking, insurance, and other financial services.','https://st4.depositphotos.com/10325396/20155/i/450/depositphotos_201554746-stock-photo-double-exposure-image-stock-market.jpg'),(4,'Automotive','The automotive industry covers companies manufacturing vehicles, automotive parts, and related technologies for transportation purposes.','https://st.depositphotos.com/1000423/4113/i/450/depositphotos_41134775-stock-photo-rear-view-of-luxury-car.jpg'),(5,'Hospitality','Hospitality industry includes businesses providing accommodation, food services, travel, and tourism experiences to customers.','https://www.shutterstock.com/image-photo/check-hotel-receptionist-counter-wearing-260nw-1836531721.jpg'),(6,'Education','The education sector involves institutions and organizations focused on teaching, training, and educational services for students of all ages.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZYFxXKYIEdTL3PFWxAu151RDWfQv7xqXUjASAxr04Q&s'),(7,'Retail','Retail comprises businesses involved in selling goods or services directly to consumers through various channels like stores, online platforms, etc.',NULL),(8,'Entertainment','The entertainment industry covers sectors such as film, television, music, gaming, and other forms of entertainment and media.',NULL),(9,'Agriculture','Agriculture involves cultivation, farming practices, and the production of crops, livestock, and other agricultural products.',NULL),(10,'Energy','The energy industry includes companies involved in the production, distribution, and supply of energy resources like oil, gas, renewable energy, and electricity.',NULL);
/*!40000 ALTER TABLE `industries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_applications`
--

DROP TABLE IF EXISTS `job_applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_applications`
--

LOCK TABLES `job_applications` WRITE;
/*!40000 ALTER TABLE `job_applications` DISABLE KEYS */;
INSERT INTO `job_applications` VALUES (1,'2024-01-01',1,1,5,'2024-01-02 09:42:47'),(2,'2024-01-01',2,1,2,'2024-01-02 11:27:07'),(3,'2024-01-01',3,1,5,'2023-12-27 14:45:40'),(4,'2024-01-02',2,2,2,'2023-12-26 14:05:03'),(5,'2024-01-02',2,44,1,NULL),(6,'2024-01-03',2,30,1,NULL),(8,'2024-01-03',2,1,1,NULL),(9,'2024-01-03',2,44,1,NULL),(10,'2024-01-03',2,44,1,NULL);
/*!40000 ALTER TABLE `job_applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_type`
--

DROP TABLE IF EXISTS `job_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_type` (
  `job_type_id` int NOT NULL AUTO_INCREMENT,
  `job_type_name` varchar(45) NOT NULL,
  PRIMARY KEY (`job_type_id`),
  UNIQUE KEY `job_type_id_UNIQUE` (`job_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_type`
--

LOCK TABLES `job_type` WRITE;
/*!40000 ALTER TABLE `job_type` DISABLE KEYS */;
INSERT INTO `job_type` VALUES (1,'full time'),(2,'part time'),(3,'internship');
/*!40000 ALTER TABLE `job_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (1,'senior react developer','developing react applications','2031-01-02','2031-01-05',2000,3200,1,1,1),(2,'php developer','developing an admin dashboard using php','2023-12-25','2023-12-31',1000,1200,1,1,1),(3,'dev','desc','2023-12-27','2023-12-30',200,400,1,1,2),(5,'testing','some desc','2023-12-27','2024-01-03',25,36,1,1,1),(7,'software dev','developping software','2023-12-27','2024-03-01',3000,4000,2,1,2),(10,'security expert','checking the security of developped applications','2023-12-27','2024-06-06',3000,3500,2,2,1),(11,'data analyst','analysing app performance','2023-12-27','2024-06-06',1500,2000,2,3,1),(28,'testdup','ddd','2023-12-29','2024-01-28',400,500,1,1,1),(30,'testdup2','ddd','2023-12-29','2024-01-28',400,500,1,1,1),(32,'tttz','f','2023-12-29','2024-01-28',500,600,1,2,1),(34,'tttz22','f','2023-12-29','2024-01-28',500,600,1,1,1),(44,'test new','ddd','2024-01-01','2024-02-10',400,500,1,2,1),(45,'','','2024-01-03','2024-02-02',0,0,1,1,1),(47,'AI engineer','developping ai software','2024-01-05','2024-03-30',2000,4000,3,5,1),(48,'AI testing','testing ai programs','2024-01-05','2024-03-30',1000,1200,3,5,2),(49,'React Developper','developping react applications','2024-01-05','2024-02-23',2000,3000,3,1,1);
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `learning_path`
--

DROP TABLE IF EXISTS `learning_path`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `learning_path` (
  `path_id` int NOT NULL AUTO_INCREMENT,
  `path_name` varchar(45) NOT NULL,
  `path_description` varchar(200) DEFAULT NULL,
  `spec_id` int NOT NULL,
  PRIMARY KEY (`path_id`),
  UNIQUE KEY `path_id_UNIQUE` (`path_id`),
  KEY `spec_id_idx` (`spec_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learning_path`
--

LOCK TABLES `learning_path` WRITE;
/*!40000 ALTER TABLE `learning_path` DISABLE KEYS */;
INSERT INTO `learning_path` VALUES (1,'Software Engineering Fundamentals','A path covering core concepts in software engineering.',1);
/*!40000 ALTER TABLE `learning_path` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `location_name` varchar(45) NOT NULL,
  PRIMARY KEY (`location_id`),
  UNIQUE KEY `location_id_UNIQUE` (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'beirut'),(2,'jdeide'),(3,'jamhour');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `path_skills`
--

DROP TABLE IF EXISTS `path_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `path_skills` (
  `path_id` int NOT NULL,
  `skill_id` int NOT NULL,
  PRIMARY KEY (`path_id`,`skill_id`),
  KEY `skill_id` (`skill_id`),
  CONSTRAINT `path_skills_ibfk_1` FOREIGN KEY (`path_id`) REFERENCES `learning_path` (`path_id`),
  CONSTRAINT `path_skills_ibfk_2` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`skill_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `path_skills`
--

LOCK TABLES `path_skills` WRITE;
/*!40000 ALTER TABLE `path_skills` DISABLE KEYS */;
INSERT INTO `path_skills` VALUES (1,11),(1,12),(1,13),(1,14);
/*!40000 ALTER TABLE `path_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skills` (
  `skill_id` int NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(45) NOT NULL,
  `skill_description` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`skill_id`),
  UNIQUE KEY `skill_id_UNIQUE` (`skill_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,'JavaScript','A programming language commonly used for web development, enabling interactive web pages and server-side development.'),(2,'Python','A versatile programming language known for its simplicity and readability, used in web development, data analysis, and more.'),(3,'React','A JavaScript library for building user interfaces, commonly used for creating interactive web applications.'),(4,'SQL','A domain-specific language used for managing and querying relational databases.'),(5,'HTML','Markup language used for creating the structure of web pages.'),(6,'Node.js','A JavaScript runtime environment used for server-side programming, enabling building scalable network applications.'),(7,'Git','A distributed version control system used for tracking changes in source code during software development.'),(8,'Machine Learning','A field of artificial intelligence focused on enabling systems to learn and improve from experience.'),(9,'Data Analysis','The process of inspecting, cleansing, transforming, and modeling data to extract useful information.'),(10,'UI/UX Design','User Interface (UI) and User Experience (UX) design involving creating intuitive and engaging interfaces.'),(11,'Agile Methodologies','Learning agile frameworks like Scrum or Kanban for iterative and flexible software development.'),(12,'Software Testing Fundamentals','Basics of software testing, including unit testing, integration testing, and system testing.'),(13,'Software Architecture Principles','Understanding architectural patterns and principles in software design.'),(14,'Object-Oriented Programming (OOP)','Mastering concepts like classes, objects, inheritance, and polymorphism.');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specialization`
--

DROP TABLE IF EXISTS `specialization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialization`
--

LOCK TABLES `specialization` WRITE;
/*!40000 ALTER TABLE `specialization` DISABLE KEYS */;
INSERT INTO `specialization` VALUES (1,'Software Development','Involves designing, coding, testing, and maintaining software applications and systems.',NULL,1),(2,'Cybersecurity','Focuses on protecting computer systems, networks, and data from cyber threats and attacks.',NULL,1),(3,'Data Science','Deals with analyzing and interpreting complex data sets to extract valuable insights and knowledge.',NULL,1),(4,'Cloud Computing','Involves delivering computing services (servers, storage, databases, networking) over the internet.',NULL,1),(5,'Artificial Intelligence','Focuses on creating intelligent machines capable of performing tasks that typically require human intelligence.',NULL,1),(6,'Mobile App Development','Involves creating applications specifically for mobile devices like smartphones and tablets.',NULL,1),(7,'Nursing','Involves providing care and support to patients, families, and communities.',NULL,2),(8,'Medical Imaging','Focuses on using various technologies to create images of the human body for diagnosis.',NULL,2),(9,'Physical Therapy','Aims to help patients recover, improve mobility, and manage pain through exercises and therapies.',NULL,2),(10,'Health Information Management','Deals with managing and securing healthcare data and patient information.',NULL,2),(11,'Investment Banking','Involves assisting corporations and governments in raising capital through investments.',NULL,3),(12,'Risk Management','Focuses on identifying, assessing, and managing potential risks within financial operations.',NULL,3),(13,'Financial Planning','Involves advising individuals or businesses on managing finances, investments, and savings.',NULL,3),(14,'Corporate Finance','Deals with managing financial activities and decisions within a company.',NULL,3);
/*!40000 ALTER TABLE `specialization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'kek','skjbf','ssffff','admin@gmail.com','2023-12-06','',1),(2,'kevin1','kafrouni','123456','kevinkafrouni1@gmail.com','2002-07-17','',3),(3,'test','ett','tessss','admin@gmail.com','2023-12-01','',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-05 18:54:10
