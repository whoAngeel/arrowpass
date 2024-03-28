/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/ test_arrowpass /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE test_arrowpass;

DROP TABLE IF EXISTS drivers;
CREATE TABLE `drivers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `fullname` varchar(255) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `nomina` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS journeys;
CREATE TABLE `journeys` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `status` varchar(255) NOT NULL,
  `route_name` varchar(255) NOT NULL,
  `departure_time` varchar(255) NOT NULL,
  `arrival_time` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `id_driver` int unsigned NOT NULL,
  `id_terminal_end` int unsigned NOT NULL,
  `id_terminal_start` int unsigned NOT NULL,
  `id_vehicle` int unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_driver` (`id_driver`),
  KEY `id_terminal_end` (`id_terminal_end`),
  KEY `id_terminal_start` (`id_terminal_start`),
  KEY `id_vehicle` (`id_vehicle`),
  CONSTRAINT `journeys_ibfk_1` FOREIGN KEY (`id_driver`) REFERENCES `drivers` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `journeys_ibfk_2` FOREIGN KEY (`id_terminal_end`) REFERENCES `terminals` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `journeys_ibfk_3` FOREIGN KEY (`id_terminal_start`) REFERENCES `terminals` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `journeys_ibfk_4` FOREIGN KEY (`id_vehicle`) REFERENCES `vehicles` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS seats;
CREATE TABLE `seats` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `status` varchar(255) DEFAULT NULL,
  `number` int unsigned NOT NULL,
  `position` varchar(255) DEFAULT NULL,
  `id_vehicle` int unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_vehicle` (`id_vehicle`),
  CONSTRAINT `seats_ibfk_1` FOREIGN KEY (`id_vehicle`) REFERENCES `vehicles` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS terminals;
CREATE TABLE `terminals` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `coords` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS users;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `birthdate` datetime DEFAULT NULL,
  `role` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE IF EXISTS vehicles;
CREATE TABLE `vehicles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `plates` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `model` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `capacity` int NOT NULL,
  `details` varchar(512) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;




