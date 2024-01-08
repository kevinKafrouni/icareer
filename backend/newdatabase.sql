-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: icareers
-- ------------------------------------------------------
-- Server version	8.2.0

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
INSERT INTO `application_status` VALUES (1,'New Application'),(2,'Under Review'),(3,'Interviewing'),(4,'Offer Sent'),(5,'Rejected');
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
  `company_logo` varchar(500) DEFAULT NULL,
  `register_day` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `email` varchar(80) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  `location_id` int NOT NULL,
  PRIMARY KEY (`company_id`),
  UNIQUE KEY `company_id_UNIQUE` (`company_id`),
  KEY `location_id_idx` (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'Bluestack','Specializes in developing software products that allow users to run Android applications on their computers.','https://cdn-www.bluestacks.com/bs-images/BS5_img1.png','2023-12-22 13:24:21','bluestack@gmail.com','123456','71919437',3),(2,'Google','Specializes in Internet-related services and products.','https://steelbluemedia.com/wp-content/uploads/2019/06/new-google-favicon-512.png','2023-12-27 17:15:32','google@gmail.com','123456','111111111',2),(3,'Microsoft','Operates in various segments of the technology industry (Operating Systems, Productivity Software, Cloud Computing, Devices and Hardware, Enterprise Solutions, Development Tools)','https://s3-symbol-logo.tradingview.com/microsoft--600.png','2024-01-05 11:34:14','microsoft@gmail.com','123456','111-222-333',1),(4,'Apple Inc','Consumer electronics, software, and services.','https://th.bing.com/th/id/R.6e508ae68b2074a2473b56c6bf66f66e?rik=LmK9kjKuQz6rdg&pid=ImgRaw&r=0','2024-01-05 11:34:14','apple@icloud.com','123456','111-222-333',6),(5,'Twitter','Social media and microblogging platform.','https://th.bing.com/th/id/R.49bb3e336fb2df580da23f67f8821ea3?rik=fjPsbgD%2biFqUrg&pid=ImgRaw&r=0','2024-01-05 11:34:14','twitter@hotmail.com','123456','111-222-333',6),(6,'Amazon','E-commerce, cloud computing, and digital streaming.','https://d24v5oonnj2ncn.cloudfront.net/wp-content/uploads/2018/10/16030301/Amazon-Logo-Black.jpg','2024-01-05 11:34:14','amazon@gmail.com','123456','111-222-333',9),(7,'Oracle Corporation','Database management, cloud services, and enterprise software.','https://th.bing.com/th/id/R.5052ea0c9efefe473c882a8dbaf70daf?rik=lA3N9L9iCZz9Gg&pid=ImgRaw&r=0&sres=1&sresct=1','2024-01-05 11:34:14','oracle@cloudl.com','123456','654321',5),(8,'Salesforce','Customer relationship management (CRM) software and cloud solutions.','https://th.bing.com/th/id/R.ef017bea65f458e9bd2af0b377926d1b?rik=MG%2fEd93NCHk0cA&pid=ImgRaw&r=0','2024-01-05 11:34:14','salesforce@gmail.com','123456','654321',7),(9,'Intel Corporation','Semiconductor manufacturing and technology.','https://g.foolcdn.com/editorial/images/147523/intel-logo.png','2024-01-05 11:34:14','intelc@gmail.com','123456','654321',5),(10,'Samsung Electronics Co','Consumer electronics, semiconductors, and technology solutions.','https://th.bing.com/th/id/R.3a67c1c36d0aa0691affa20395472710?rik=q1LVlS1RggSt%2bw&pid=ImgRaw&r=0','2024-01-05 11:34:14','samsung@android.com','123456','654321',6),(11,'Sony Corporation','Consumer electronics, gaming, and entertainment.','https://th.bing.com/th/id/R.9e40e8c94ca86982fdf8f54ea1d2c3bf?rik=25GAUmceNjSovw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fsony-png-sony-logo-png-6000.png&ehk=NKHd62X9G7USQzNwfKiQn5SPXJFhCRLsu2obcfvVJVU%3d&risl=&pid=ImgRaw&r=0','2024-01-05 11:34:14','sony@gmail.com','123456','654321',6),(12,'Cisco Systems','Networking hardware, software, and telecommunications equipment.','https://www.clipartmax.com/png/middle/200-2001206_cisco-cisco-high-res-logo.png','2024-01-05 11:34:14','cisco@gmail.com','123456','654321',5),(13,'Johnson & Johnson','Operates in pharmaceuticals, medical devices, and consumer healthcare.','https://th.bing.com/th/id/OIP.4tbDRfX4VvpKSq3T6_Gt6AHaEc?rs=1&pid=ImgDetMain','2024-01-05 11:34:14','Johnsonjohnson@gmail.com','123456','03322222',6),(14,'Pfizer','A leading pharmaceutical company known for its research, development, and manufacturing of prescription drugs and vaccines.','https://www.gannett-cdn.com/-mm-/b2b05a4ab25f4fca0316459e1c7404c537a89702/c=0-0-1365-768/local/-/media/2018/10/23/USATODAY/usatsports/247WallSt.com-247WS-500566-pfizer-logo.png?width=3200&height=1680&fit=crop','2024-01-05 11:34:14','pfizer@gmail.com','123456','03322222',7),(15,'Roche','A global healthcare company specializing in pharmaceuticals and diagnostics.','https://th.bing.com/th/id/R.c6cda4e30421b45369ccdd132ebcf24b?rik=bh%2fIEFM3mV0xow&pid=ImgRaw&r=0','2024-01-05 11:34:14','roche@gmail.com','123456','03322222',6),(16,'AstraZeneca','Multinational pharmaceutical company engaged in the research, development, and manufacturing of prescription drugs.','https://th.bing.com/th/id/R.6288be3775e3a6456d52733fb021a6bc?rik=oBlI78Kh4%2b4UsQ&pid=ImgRaw&r=0','2024-01-05 11:34:14','astrazeneca@hotmail.com','123456','03322222',6),(17,'Qatar National Bank ','Leading financial institutions in the Middle East.','https://th.bing.com/th/id/R.36fcdc4bf26cbe8e0c0e0a31138f0193?rik=XzRJpbHBAgFPYg&riu=http%3a%2f%2fdwglogo.com%2fwp-content%2fuploads%2f2015%2f11%2fQatar-National-Bank-Logo.png&ehk=TcWhdVK088hBjc8ZkS%2bPNWCJCM%2fZHWLeGNRpZKxKYAY%3d&risl=&pid=ImgRaw&r=0','2024-01-05 11:34:14','qnb@gmail.com','123456','03322222',5),(18,'Zain Group','A leading telecommunications company with a presence in several Middle Eastern and African countries.','https://th.bing.com/th/id/R.84bb4fd71c229bfa72ae4000ba14e477?rik=xCsTFl2eNvRx9w&pid=ImgRaw&r=0','2024-01-05 11:34:14','zain@yahoo.com','123456','03322222',9),(19,'Emirates NBD','A leading banking group in the UAE, offering a wide range of financial services.','https://th.bing.com/th/id/R.0f9f413b9e251a644e3a3d29c8322836?rik=sOQdA4M0ziaaYA&pid=ImgRaw&r=0','2024-01-05 11:34:14','emnbd@gmail.com','123456','03567894',8),(20,'Toyota',' Shaping the automotive industry and is renowned for its innovative approach to manufacturing, product development, and efficiency. ','https://th.bing.com/th/id/OIP.izISqc6xvnI50AA2ynElHgHaFC?rs=1&pid=ImgDetMain','2024-01-05 11:34:14','toyota@gmail.com','123456','03567894',1),(21,'General Motors','GM operates under various brands and produces a wide range of vehicles, including cars, trucks, and SUVs.','https://purepng.com/public/uploads/large/purepng.com-general-motors-logologobrand-logoiconslogos-251519938528rqhvt.png','2024-01-05 11:34:14','gm@gmail.com','123456','03567894',5),(22,'Ford','Development of the automotive industry, particularly with the introduction of assembly line production by Henry Ford. ','https://th.bing.com/th/id/OIP.rCier55RtLlFnTH9QIB4nwHaEK?rs=1&pid=ImgDetMain','2024-01-05 11:34:14','ford@gmail.com','123456','03567894',6),(23,'BMW','Luxury automaker and one of the leading manufacturers of premium vehicles and motorcycles worldwide. ','https://th.bing.com/th/id/R.11c17a8cffdce4bc047102db49a94a51?rik=YMKOe232a1ee3w&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f02%2fBMW_logo_big_transparent_png.png&ehk=AhLghiJcc6OJgtYYdNOiiM061S%2fa11BCNRbBYQtUBjI%3d&risl=&pid=ImgRaw&r=0','2024-01-05 11:34:14','bmw@gmail.com','123456','03567894',7);
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
  `industry_img` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`industry_id`),
  UNIQUE KEY `industry_id_UNIQUE` (`industry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `industries`
--

LOCK TABLES `industries` WRITE;
/*!40000 ALTER TABLE `industries` DISABLE KEYS */;
INSERT INTO `industries` VALUES (1,'Technology','Technology encompasses companies involved in the creation and development of innovative products, services, and solutions in various fields like software, hardware, telecommunications, and more.','https://img.freepik.com/free-photo/cardano-blockchain-platform_23-2150411956.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703116800&semt=sph'),(2,'Healthcare','The healthcare industry includes organizations and professionals focused on providing medical services, treatments, and products to promote health and well-being.','https://t3.ftcdn.net/jpg/02/78/98/56/360_F_278985629_SwYPS2BfkqYYGINcg0gB3KG7gQuRvAIE.jpg'),(3,'Finance','The finance industry involves activities related to managing money, investments, banking, insurance, and other financial services.','https://st4.depositphotos.com/10325396/20155/i/450/depositphotos_201554746-stock-photo-double-exposure-image-stock-market.jpg'),(4,'Automotive','The automotive industry covers companies manufacturing vehicles, automotive parts, and related technologies for transportation purposes.','https://st.depositphotos.com/1000423/4113/i/450/depositphotos_41134775-stock-photo-rear-view-of-luxury-car.jpg'),(5,'Hospitality','Hospitality industry includes businesses providing accommodation, food services, travel, and tourism experiences to customers.','https://www.shutterstock.com/image-photo/check-hotel-receptionist-counter-wearing-260nw-1836531721.jpg'),(6,'Education','The education sector involves institutions and organizations focused on teaching, training, and educational services for students of all ages.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZYFxXKYIEdTL3PFWxAu151RDWfQv7xqXUjASAxr04Q&s'),(7,'Retail','Retail comprises businesses involved in selling goods or services directly to consumers through various channels like stores, online platforms, etc.','https://th.bing.com/th/id/OIP.ZIhbcl9jz86AEAI02NXmYAHaE8?w=959&h=640&rs=1&pid=ImgDetMain'),(8,'Entertainment','The entertainment industry covers sectors such as film, television, music, gaming, and other forms of entertainment and media.','https://th.bing.com/th/id/R.4de713dedda7374138129b3a88768b1e?rik=wSv58QGbT33gaw&riu=http%3a%2f%2fwww.wrightsglobal.com%2fwp-content%2fuploads%2f2019%2f05%2fent3.jpg&ehk=pueRLZ2r%2bu0qVHoJ2NYFsYq%2bunIxSRUc6%2f9h4cCJyY0%3d&risl=&pid=ImgRaw&r=0'),(9,'Agriculture','Agriculture involves cultivation, farming practices, and the production of crops, livestock, and other agricultural products.','https://th.bing.com/th/id/R.310b9f4e2de6d0c5c12c5bace953284b?rik=gkxiZ0vMMvYQnA&pid=ImgRaw&r=0'),(10,'Energy','The energy industry includes companies involved in the production, distribution, and supply of energy resources like oil, gas, renewable energy, and electricity.','https://th.bing.com/th/id/OIP.JtpwpI0gbVeDUw9eizKO0gHaE8?rs=1&pid=ImgDetMain');
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
INSERT INTO `job_type` VALUES (1,'Full Time'),(2,'Part Time'),(3,'Internship');
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
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (1,'Senior React Developer','developing react applications','2031-01-02','2031-01-05',2000,3200,1,1,1),(2,'Php Developer','developing an admin dashboard using php','2023-12-25','2023-12-31',1000,1200,1,1,1),(3,'Systems Administrator','Systems administrators are responsible for the upkeep, configuration, and reliable operation of computer systems. They manage hardware, software, and server infrastructure, and ensure that IT systems are secure and properly functioning.','2023-12-27','2023-12-30',200,400,1,1,2),(5,'Cybersecurity Analyst','Cybersecurity analysts protect computer systems and networks from security breaches and cyber attacks. They implement security measures, monitor for potential threats, and respond to incidents. Knowledge of encryption, firewalls, and security protocols is essential.','2023-12-27','2024-01-03',25,36,1,4,1),(7,'Software Developer','developping software','2023-12-27','2024-03-01',3000,4000,2,1,2),(10,'Machine Learning Engineer','Machine learning engineers develop algorithms and models that enable machines to learn from and make decisions based on data. They often work on applications such as natural language processing, image recognition, and recommendation systems.','2023-12-27','2024-06-06',3000,3500,2,2,1),(11,'Data Analyst','analysing app performance','2023-12-27','2024-06-06',1500,2000,2,3,1),(28,'Data Scientist','Data scientists analyze and interpret complex data sets to inform business decision-making. They use statistical techniques, machine learning, and programming skills to extract insights and create predictive models. Proficiency in programming languages like Python and R is common.','2023-12-29','2024-01-28',400,500,1,1,1),(30,'UX/UI Designer','User Experience (UX) and User Interface (UI) designers focus on creating visually appealing and user-friendly digital interfaces. They collaborate with cross-functional teams to design and improve the overall user experience of websites, applications, or software.','2023-12-29','2024-01-28',400,500,1,1,1),(32,'Database Administrator (DBA)','DBAs manage databases, ensuring they are secure, available, and performing optimally. They design, implement, and maintain databases, as well as troubleshoot issues and ensure data integrity. Knowledge of database management systems like MySQL, Oracle, or SQL Server is crucial.','2023-12-29','2024-01-28',500,600,1,2,1),(34,'Network Engineer','Network engineers are responsible for designing, implementing, and managing computer networks. They ensure that organizations\' network infrastructures are efficient, secure, and meet business needs. Skills in network protocols and hardware are essential.','2023-12-29','2024-01-28',500,600,1,1,1),(44,'IT Project Manager','IT project managers plan, execute, and oversee technology projects from initiation to completion. They coordinate resources, manage timelines, and ensure that projects meet business objectives. Strong leadership and communication skills are crucial.','2024-01-01','2024-02-10',400,500,1,2,1),(45,'Software Developer/Engineer','Software developers design, code, test, and maintain computer programs. They may work on various types of software, such as applications, operating systems, or games, using programming languages like Java, Python, C++, or JavaScript.','2024-01-03','2024-02-02',0,0,1,1,1),(47,'AI engineer','developping ai software','2024-01-05','2024-03-30',2000,4000,3,5,1),(48,'Cloud Architect','Cloud architects design and implement cloud computing solutions. They work with cloud providers like AWS, Azure, or Google Cloud to create scalable, secure, and cost-effective cloud infrastructures for businesses.','2024-01-05','2024-03-30',1000,1200,3,5,2),(49,'React Developper','developping react applications','2024-01-05','2024-02-23',2000,3000,3,1,1),(50,'Elon Musk','ahahha','2024-01-08','2025-04-05',500,600,5,1,1),(51,'Risk Analyst','Analyze data to identify potential risks and trends','2024-01-08','2025-04-05',2000,3000,18,3,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learning_path`
--

LOCK TABLES `learning_path` WRITE;
/*!40000 ALTER TABLE `learning_path` DISABLE KEYS */;
INSERT INTO `learning_path` VALUES (1,'Software Developer/Engineer','Proficiency in programming languages (e.g., Java, Python, C++), problem-solving, software architecture, version control (e.g., Git), and knowledge of development tools.',1),(2,'Network Engineer','Networking protocols (TCP/IP, DNS, DHCP), routing and switching, network security, troubleshooting, and familiarity with network hardware.',2),(3,'Database Administrator','Database management systems (e.g., MySQL, Oracle), SQL, data modeling, database security, and performance tuning.',3),(4,'Systems Administrator','Operating systems (Windows, Linux), server administration, scripting (e.g., PowerShell, Bash), troubleshooting, and system security.',4),(5,'Cybersecurity Analyst','Security protocols, risk assessment, penetration testing, incident response, knowledge of cybersecurity tools, and understanding of compliance standards.',5),(6,'Data Scientist','Statistical analysis, machine learning, data modeling, programming (e.g., Python, R), data visualization, and big data technologies.',6),(7,'UX/UI Designer','User research, wireframing, prototyping, graphic design, usability testing, and proficiency in design tools (e.g., Adobe XD, Sketch).',7),(8,'IT Project Manager','Project management methodologies (e.g., Agile, Scrum), communication, leadership, risk management, and knowledge of project management tools.',8),(9,'Cloud Architect','Cloud platforms (e.g., AWS, Azure, Google Cloud), virtualization, infrastructure as code, security, and knowledge of cloud architecture patterns.',9),(10,'Machine Learning Engineer','Machine learning algorithms, deep learning, programming (e.g., Python), data preprocessing, and knowledge of machine learning frameworks (e.g., TensorFlow, PyTorch).',10);
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'Beirut'),(2,'Jdeideh'),(3,'Jamhour'),(4,'Mkalles'),(5,'Qatar'),(6,'United States of America'),(7,'United Kingdom'),(8,'UAE'),(9,'Kuweit'),(10,'Egypt');
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
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specialization`
--

LOCK TABLES `specialization` WRITE;
/*!40000 ALTER TABLE `specialization` DISABLE KEYS */;
INSERT INTO `specialization` VALUES (1,'Software Development','Involves designing, coding, testing, and maintaining software applications and systems.','https://th.bing.com/th/id/R.f574f2a38f4ef2fbf17b06988d1759ca?rik=sNlK2qmcn9Z6Ug&pid=ImgRaw&r=0',1),(2,'Cybersecurity','Focuses on protecting computer systems, networks, and data from cyber threats and attacks.','https://th.bing.com/th/id/R.20275d627f91254a64acee28f8b8c1d0?rik=vCS3VToMGyw%2f5A&pid=ImgRaw&r=0',1),(3,'Data Science','Deals with analyzing and interpreting complex data sets to extract valuable insights and knowledge.','https://th.bing.com/th/id/R.3b42e1892503f5144bf7f0276fe86490?rik=z42NWvBuu0tsvA&pid=ImgRaw&r=0',1),(4,'Cloud Computing','Involves delivering computing services (servers, storage, databases, networking) over the internet.','https://th.bing.com/th/id/OIP.vN86lZCAdr3RDSXc0cuHcAHaE8?rs=1&pid=ImgDetMain',1),(5,'Artificial Intelligence','Focuses on creating intelligent machines capable of performing tasks that typically require human intelligence.','https://th.bing.com/th/id/R.52b9dee346885ff0c343395341facdd7?rik=07E8Z20VrbMkXA&pid=ImgRaw&r=0',1),(6,'Mobile App Development','Involves creating applications specifically for mobile devices like smartphones and tablets.','https://th.bing.com/th/id/R.9ce8aa204a21e69716018fee472b042c?rik=SkF5GUuTXkntIw&pid=ImgRaw&r=0',1),(7,'Nursing','Involves providing care and support to patients, families, and communities.','https://assets.thehansindia.com/h-upload/2022/10/21/1317255-nursing.jpg',2),(8,'Medical Imaging','Focuses on using various technologies to create images of the human body for diagnosis.','https://th.bing.com/th/id/OIP.0KsGQalJXAh4Qm4UARkFswHaE8?rs=1&pid=ImgDetMain',2),(9,'Physical Therapy','Aims to help patients recover, improve mobility, and manage pain through exercises and therapies.','https://blog.tuf.edu.pk/wp-content/uploads/2021/06/Physical-therapy.jpg',2),(10,'Health Information Management','Deals with managing and securing healthcare data and patient information.','https://th.bing.com/th/id/R.aa11b41157f6f94f16569f7e8efa47f3?rik=nhP2irqaEOIubw&pid=ImgRaw&r=0',2),(11,'Investment Banking','Involves assisting corporations and governments in raising capital through investments.','https://th.bing.com/th/id/OIP.a7hUvJdvzO5IkfboPcAAwwHaEm?rs=1&pid=ImgDetMain',3),(12,'Risk Management','Focuses on identifying, assessing, and managing potential risks within financial operations.','https://th.bing.com/th/id/R.71b5fe6b4b8cdcef9943928c0b4758a4?rik=%2bNUxzYJiemfsDg&pid=ImgRaw&r=0',3),(13,'Financial Planning','Involves advising individuals or businesses on managing finances, investments, and savings.','https://www.euclea-b-school.com/wp-content/uploads/2023/03/Untitled-design.jpg',3),(14,'Corporate Finance','Deals with managing financial activities and decisions within a company.','https://th.bing.com/th/id/OIP.Cxk7i6Zc8PsKBQpX83eNzgHaEK?rs=1&pid=ImgDetMain',3),(15,'Cardiology','Specializing in the diagnosis and treatment of heart-related conditions and diseases.','https://th.bing.com/th/id/R.0ccf378a330660fdfa015530d911286f?rik=4dYeGLI4pBmqTg&pid=ImgRaw&r=0',2),(16,'Orthopedics','Focusing on the musculoskeletal system, including bones, joints, ligaments, tendons, and muscles.','https://th.bing.com/th/id/OIP.qi2yy5njWg7dMiILLr7KhwHaE8?rs=1&pid=ImgDetMain',2),(17,'Pediatrics','Specializing in the healthcare of infants, children, and adolescents.','https://th.bing.com/th/id/R.38514da41b640c44930c3362c0008e97?rik=ze4NW7dJ%2b%2fUnhQ&pid=ImgRaw&r=0',2),(18,'Neurology','Dealing with disorders of the nervous system, including the brain and spinal cord.','https://th.bing.com/th/id/R.3aeca9f06cc8d13dfa636c0ca81821eb?rik=vbTQOabDA5RmMg&pid=ImgRaw&r=0',2),(19,'Oncology','Specializing in the prevention, diagnosis, and treatment of cancer.','https://th.bing.com/th/id/R.48b945a43ba911d41b27673cb9b0abbb?rik=uLOBXlyI%2fgirNQ&pid=ImgRaw&r=0',2),(20,'Gastroenterology','Focusing on the digestive system and its disorders.','https://th.bing.com/th/id/OIP.rOf-oYwlu60aZ6p9Vht-5AHaGR?rs=1&pid=ImgDetMain',2),(21,'Automotive Engineering','Involves the design and development of automotive systems and components.','https://th.bing.com/th/id/R.6b13c560ad7a73aad822c1e8bf02c520?rik=jXvhi%2b%2b6Fb3o3w&pid=ImgRaw&r=0',4),(22,'Asset Management','Involves managing investment portfolios and funds on behalf of clients to achieve specific financial goals.','https://th.bing.com/th/id/OIP.Pe-1wfvYzzmIzlg_ktt4ZgHaED?rs=1&pid=ImgDetMain',3),(23,'Automotive Manufacturing','Focuses on the production and assembly of vehicles and their components.','https://th.bing.com/th/id/OIP.MoBmQMHA6yMpy5PLbzOwiAHaE4?rs=1&pid=ImgDetMain',4),(24,'Automotive Design','Involves the creation of vehicle aesthetics and overall design.','https://th.bing.com/th/id/OIP.WVYBcajCSSY4RXGux0JVdAHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain',4),(25,'Financial Analysis','Entails analyzing financial data to provide insights and recommendations for decision-making.','https://th.bing.com/th/id/OIP.KMOwxlX1SKswP0Nxtm-_WgHaE7?rs=1&pid=ImgDetMain',3),(26,'Automotive Marketing and Sales','Focuses on promoting and selling vehicles to consumers.','https://th.bing.com/th/id/R.bf49f43ab2b9cfe1ca29c29c22ed37db?rik=MU5Y3wiYe5fQjA&pid=ImgRaw&r=0',4);
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
INSERT INTO `user` VALUES (1,'Jennifer','Khoury','123456','jennifer@gmail.com','2001-07-12','',1),(2,'Kevin','Kafrouni','123456','kevinkafrouni1@gmail.com','2002-07-17','',3),(3,'Elias','Nakouzi','elias','elias@gmail.com','2023-12-01','',2);
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

-- Dump completed on 2024-01-08 15:24:22
