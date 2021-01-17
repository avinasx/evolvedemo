/*
SQLyog Ultimate v12.3.2 (64 bit)
MySQL - 5.5.62-0ubuntu0.14.04.1 : Database - sql12387048
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`sql12387048` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `sql12387048`;

/*Table structure for table `test` */

DROP TABLE IF EXISTS `test`;

CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `inputId` varchar(255) DEFAULT NULL,
  `inputVal` varchar(255) DEFAULT NULL,
  `inputType` varchar(255) DEFAULT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `inputId` (`inputId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `test` */

insert  into `test`(`id`,`inputId`,`inputVal`,`inputType`,`updated`) values 
(1,'dummy1','1236547896','phone','2021-01-17 09:52:01'),
(2,'dummy2','jhvsah@jkvk.com','email','2021-01-17 09:52:11'),
(3,'dummy3','1365469874','phone','2021-01-17 09:52:21');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
